export default function formatNumberAsEuro(value: number): string {
  // Use Intl.NumberFormat to format the number with commas and add the euro symbol
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
