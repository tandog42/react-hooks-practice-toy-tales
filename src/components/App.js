import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showToy, setShowToy] = useState([]);
console.log(showToy)
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toy => setShowToy(toy));
  }, []);

  function deleteCard(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      const deleted = showToy.filter(t => t.id !== id);
      setShowToy(deleted);
    });
  }



  function handleClick() {
    setShowForm(showForm => !showForm);
  }

  function handleNewToy(toys) {
    setShowToy([...showToy, toys]);
  }

  return (
    <>
      <Header />
      {showForm && <ToyForm handleNewToy={handleNewToy} />}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer deleteCard={deleteCard} toy={showToy} />
    </>
  );
}

export default App;
