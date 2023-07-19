import BulbasaurImg from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Components</h1>
      <img src={BulbasaurImg} alt="Bulbasaur"></img>
      <h2>
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>
      </h2>
      <h2>
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
