import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nacl from 'tweetnacl';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API route for Discord interactions
  app.post("/api/interactions", express.raw({ type: "application/json" }), (req, res) => {
    const signature = req.get("X-Signature-Ed25519");
    const timestamp = req.get("X-Signature-Timestamp");
    const publicKey = process.env.DISCORD_PUBLIC_KEY;

    if (!signature || !timestamp || !publicKey) {
      return res.status(401).send("Invalid request signature");
    }

    const isVerified = nacl.sign.detached.verify(
      Buffer.from(timestamp + req.body.toString()),
      Buffer.from(signature, "hex"),
      Buffer.from(publicKey, "hex")
    );

    if (!isVerified) {
        return res.status(401).send("Invalid request signature");
    }

    const body = JSON.parse(req.body.toString());

    // Handle PING
    if (body.type === 1) {
        return res.status(200).send({ type: 1 });
    }
    
    // This is where you would handle incoming Discord interaction requests
    console.log("Interaction received:", body);
    res.status(200).send({ type: 1 }); // Acknowledge with PONG
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
