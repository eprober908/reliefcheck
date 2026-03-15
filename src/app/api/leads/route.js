import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = "/tmp/reliefcheck-leads.json";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      state,
      debtAmount,
      debtTypes,
      behindOnPayments,
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !state || !debtAmount) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Calculate estimated savings (40-60% of debt amount)
    const savingsPercent = 0.4 + Math.random() * 0.2; // 40-60%
    const estimatedSavings = Math.round(debtAmount * savingsPercent);

    // Create lead record
    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      firstName,
      lastName,
      email,
      phone,
      state,
      debtAmount,
      debtTypes: debtTypes || [],
      behindOnPayments: behindOnPayments || "unknown",
      estimatedSavings,
      savingsPercent: Math.round(savingsPercent * 100),
      createdAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    // Read existing leads
    let leads = [];
    try {
      if (fs.existsSync(LEADS_FILE)) {
        const data = fs.readFileSync(LEADS_FILE, "utf-8");
        leads = JSON.parse(data);
      }
    } catch {
      leads = [];
    }

    // Append new lead
    leads.push(lead);

    // Write back
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    // Forward to LeadForge webhook (fire and forget)
    try {
      fetch("http://78.141.210.14:3009/api/webhook/reliefcheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, state, debtAmount: String(debtAmount), debtTypes: Array.isArray(debtTypes) ? debtTypes.join(", ") : debtTypes, behindOnPayments }),
      }).catch(() => {});
    } catch {}

    return NextResponse.json({
      success: true,
      estimatedSavings,
      savingsPercent: Math.round(savingsPercent * 100),
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "ReliefCheck Leads API",
    method: "POST",
    fields: [
      "firstName",
      "lastName",
      "email",
      "phone",
      "state",
      "debtAmount",
      "debtTypes",
      "behindOnPayments",
    ],
  });
}
