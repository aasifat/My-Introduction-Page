// Turns a small subset of markdown (**bold**, *italic*) into React nodes,
// so content.js can stay plain text/markdown instead of JSX.
export default function formatText(text) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <b key={i}>{part.slice(2, -2)}</b>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <i key={i}>{part.slice(1, -1)}</i>;
    }
    return part;
  });
}
