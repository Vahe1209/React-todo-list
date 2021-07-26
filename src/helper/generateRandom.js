export default function generateRandomId() {
  const d = new Date();

  const n = d.getMilliseconds();
  return n;
}
