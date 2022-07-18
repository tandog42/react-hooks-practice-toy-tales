import React, { useState } from "react";

function ToyForm({ handleNewToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const newCard = {
    name: name,
    image: image,
    likes: 0,
  };

  function handleNewCard(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then(r => r.json())
      .then(toys => handleNewToy(toys));
  }
  return (
    <div className="container">
      <form onSubmit={handleNewCard} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={e => setImage(e.target.value)}
          value={image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
