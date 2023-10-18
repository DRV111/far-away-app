function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>What do you need for your trip? 🎒</h3>
      </div>
      <div className="form-input">
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Item..." />
        <input type="submit" value="Add Item" />
      </div>
    </form>
  );
}

export default Form;
