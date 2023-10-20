import React from "react";

const ConditionalRender = () => {
  const x = true;

  const name = "Cheyenne";

  return (
    <div>
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      <h3>Render ternário:</h3>
      {name === "Pooh" ? (
        <div>
          <p>O nome é Pooh</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
