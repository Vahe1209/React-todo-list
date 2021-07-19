export default function handleEnter(e, stateHandler) {
  if (e.key === "Enter" && e.target.value) {
    stateHandler();
  }
}
