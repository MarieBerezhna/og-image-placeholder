import { NextApiRequest, NextApiResponse } from "next";
import { chromium } from "@playwright/test";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const title = (req.query.title as string) || "Default Title";
    const fontSize = (req.query.fontsize as string) || "60";
    console.log(fontSize, req.query)
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.setViewportSize({ width: 1200, height: 630 });

    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100vw;
              height: 100vh;
              background: #1e1e1e;
              color: white;
            }
            h1 {
              font-size: ${fontSize}px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h1>${decodeURIComponent(title)}</h1>
        </body>
      </html>
    `;

    await page.setContent(htmlContent);
    const imageBuffer = await page.screenshot();
    await browser.close();

    res.setHeader("Content-Type", "image/png");
    res.send(imageBuffer);
  } catch (error) {
    console.error("Error generating OG image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}