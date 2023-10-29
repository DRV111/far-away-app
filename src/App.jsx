import './index.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';
import ModalWindow from './components/ModalWindow';

function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((itm) => itm.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((itm) =>
        itm.id === id ? { ...itm, packed: !itm.packed } : itm
      )
    );
  }

  function handleOpenModal() {
    if (items.length) {
      setOpenModal(true);
    }
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleClearList() {
    setItems([]);
    setOpenModal(false);
  }

  return (
    <>
      {openModal && (
        <ModalWindow onOpen={handleClearList} onClose={handleCloseModal} />
      )}
      <div className={openModal ? 'app overlay' : 'app'}>
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onCheckItem={handleCheckItem}
          onReset={handleOpenModal}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
