function ModalWindow({ onClose, onOpen }) {
  return (
    <div className="modal">
      <p>Are you sure you want to clear the list?</p>
      <div className="modal-btn">
        <button onClick={onOpen}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
}

export default ModalWindow;
