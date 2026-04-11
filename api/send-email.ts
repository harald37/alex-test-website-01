import { Resend } from "resend";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, date, location, found, message } = req.body;

  const resendKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

  if (!resendKey) {
    console.error("CRITICAL: RESEND_API_KEY is missing in environment variables.");
    return res.status(500).json({ 
      error: "Server configuration error",
      details: "API Key not found in environment. Please check Vercel settings."
    });
  }

  const resend = new Resend(resendKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Alex Begopoulos Photography <onboarding@resend.dev>",
      to: ["alex.begopoulos@yahoo.de", "hey@alex-begopoulos.de"],
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h1>Neue Kontaktanfrage</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Hochzeitsdatum:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location || "Nicht angegeben"}</p>
        <p><strong>Gefunden über:</strong> ${found || "Nicht angegeben"}</p>
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
