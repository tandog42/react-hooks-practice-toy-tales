import React, { useState } from "react";

function ToyCard({ deleteCard, id, name, image, likes }) {
  const [currentLikes, setLikes] = useState(likes);

  const allLikes = {
   likes:currentLikes,
  };

  function handleClick(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allLikes),
    })
      .then(resp => resp.json())
      .then(r => setLikes(r.likes +1));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{currentLikes} Likes </p>
      <button onClick={ () => handleClick(id)} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={() => deleteCard(id)} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
