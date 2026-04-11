import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post("/api/send-email", async (req, res) => {
    const { name, email, phone, date, location, found, message } = req.body;

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.error("RESEND_API_KEY is missing in environment variables");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const resend = new Resend(resendKey);

    try {
      const { data, error } = await resend.emails.send({
        from: "Alex Begopoulos Photography <onboarding@resend.dev>", // Replace with your verified domain later
        to: ["alex.begopoulos@yahoo.de"],
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

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Unexpected error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
