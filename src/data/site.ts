export const SITE_CONTACT = {
  phone: "+91 9676662304",
  phoneTel: "+919676662304",
  whatsapp: "919676662304",
  email: "info@suriyanprints.in",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE_CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteMessage(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  details: string;
}) {
  return [
    "Hi Suriyan Prints, I'd like a quote:",
    "",
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Product: ${data.product}`,
    `Details: ${data.details}`,
  ].join("\n");
}
