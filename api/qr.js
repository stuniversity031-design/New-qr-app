import QRCode from "qrcode";

export default async function handler(req, res) {
  const { data } = req.query;

  if (!data) {
    res.status(400).send("Missing data");
    return;
  }

  try {
    const png = await QRCode.toBuffer(data, {
      width: 400,
      margin: 2
    });

    res.setHeader("Content-Type", "image/png");
    res.send(png);
  } catch {
    res.status(500).send("QR error");
  }
}