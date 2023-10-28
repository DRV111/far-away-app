function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to a packing list! 👆🏻</em>
      </p>
    );
  const itemsNum = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percantage = Math.round((packedItems / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percantage === 100
          ? 'You are ready to go! 🛫'
          : `You have ${itemsNum} items on your list, and you already packed
        ${packedItems} (${percantage}%).`}
      </em>
    </footer>
  );
}

export default Stats;
