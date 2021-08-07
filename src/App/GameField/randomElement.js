export default function randomElement() {
  const elements = ['line', 'cube', 'triangle', 'L-shaped'];
  return elements[Math.floor(Math.random() * 4)];
}