import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const active = searchParams.get("active")

    let certifications

    if (active === "true") {
      certifications = await prisma.certification.findMany({
        where: {
          OR: [{ expiryDate: null }, { expiryDate: { gt: new Date() } }],
        },
        orderBy: { displayOrder: "asc" },
      })
    } else {
      certifications = await prisma.certification.findMany({
        orderBy: { displayOrder: "asc" },
      })
    }

    const formattedCertifications = certifications.map((cert: any) => ({
      id: cert.id,
      name: cert.name,
      issuing_organization: cert.issuingOrganization,
      issue_date: cert.issueDate.toISOString().split("T")[0],
      expiry_date: cert.expiryDate ? cert.expiryDate.toISOString().split("T")[0] : null,
      credential_id: cert.credentialId,
      credential_url: cert.credentialUrl,
      description: cert.description,
    }))

    return NextResponse.json(formattedCertifications)
  } catch (error) {
    console.error("Error fetching certifications:", error)
    return NextResponse.json({ error: "Failed to fetch certifications" }, { status: 500 })
  }
}
