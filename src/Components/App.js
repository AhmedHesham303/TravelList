import Logo from "../Components/Logo";
import Form from "../Components/Form";
import { useState } from "react";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelAddIems(item) {
    setItems((items) => [...items, item]);
  }
  function handelToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddIems} />
      <PackingList
        items={items}
        onDeleteItem={handelDelete}
        onToggleItem={handelToggleItems}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
