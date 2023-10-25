import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = { description, quantity, packed: false };
    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>What do you need for your trip? 🎒</h3>
      </div>
      <div className="form-input">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Add Item" />
      </div>
    </form>
  );
}

export default Form;
