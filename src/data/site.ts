export const SITE_CONTACT = {
  phone: "02522-669393",
  phoneTel: "+912522669393",
  whatsapp: "912522669393",
  email: "help@suriyanprints.in",
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
