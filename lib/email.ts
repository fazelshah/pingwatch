import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function sendDownAlert(
  email: string,
  url: string
) {
  await resend.emails.send({
    from: "PingWatch <alerts@fazelshah.fun>",
    to: email,
    subject: `🚨 Website Down: ${url}`,
    html: `
      <h2>Website Down Alert</h2>
      <p><strong>${url}</strong> is currently unreachable.</p>
      <p>Please investigate immediately.</p>
    `,
  });
}

export async function sendRecoveryAlert(
  email: string,
  url: string
) {
  await resend.emails.send({
    from: "PingWatch <alerts@fazelshah.fun>",
    to: email,
    subject: `✅ Website Recovered: ${url}`,
    html: `
      <h2>Website Recovered</h2>
      <p><strong>${url}</strong> is back online.</p>
    `,
  });
}
export async function sendSSLAlert(
  email: string,
  url: string,
  daysRemaining: number
) {
  await resend.emails.send({
    from: "PingWatch <alerts@fazelshah.fun>",
    to: email,
    subject: `🔒 SSL Certificate Expiring Soon`,
    html: `
      <h2>SSL Expiry Warning</h2>
      <p>
        SSL certificate for
        <strong>${url}</strong>
        expires in
        <strong>${daysRemaining} days</strong>.
      </p>
    `,
  });
}
