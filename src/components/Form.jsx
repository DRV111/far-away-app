function Form() {
  return (
    <div className="add-form">
      <div className="form-header">
        <h3>What do you need for your trip? 🎒</h3>
      </div>
      <div className="form-input">
        <input type="text" placeholder="Add Item" />
        <input type="number" placeholder="Quantity" />
        <input type="submit" value="Add Item" />
      </div>
    </div>
  );
}

export default Form;
