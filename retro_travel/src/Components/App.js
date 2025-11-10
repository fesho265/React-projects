import { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Laptop", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleRemove(id) {
    setItems((prevItems) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((prevItems) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemove={handleRemove}
        onToggleItem={handleToggleItem}
        clear={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
