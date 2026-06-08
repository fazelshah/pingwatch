import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDownAlert(
  email: string,
  url: string
) {
  await resend.emails.send({
    from: "alerts@yourdomain.com",
    to: email,
    subject: `🚨 Website Down: ${url}`,
    html: `
      <h2>Website Down Alert</h2>
      <p>${url} is currently unreachable.</p>
    `,
  });
}
