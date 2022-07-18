import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toy, deleteCard }) {
  return (
    <div id="toy-collection">


      {toy.map(toyCard => (
        <ToyCard
        deleteCard={deleteCard}
          toy = {toyCard}
          key={toyCard.id}
          id={toyCard.id}
          name={toyCard.name}
          image={toyCard.image}
          likes={toyCard.likes}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
