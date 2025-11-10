export default function Footer({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  else {
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed === true).length;
    const percent = (packedItems / numItems) * 100;
    return (
      <footer className="stats">
        <em>
          {percent === 100
            ? `You got everything! Ready to go ✈️`
            : `💼 You have ${numItems} items on your list, and you already packed
      ${packedItems} (${percent.toFixed(0)}%)}`}
        </em>
      </footer>
    );
  }
}
