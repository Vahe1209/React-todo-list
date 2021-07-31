export default function generateRandomId() {
  const date = new Date();

  const randomDate = date.getMilliseconds();
  return randomDate;
}
