function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span>
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
