import bug from "/pokemon-types/bug.png";
import dark from "/pokemon-types/dark.png";
import dragon from "/pokemon-types/dragon.png";
import electric from "/pokemon-types/electric.png";
import fairy from "/pokemon-types/fairy.png";
import fighting from "/pokemon-types/fighting.png";
import fire from "/pokemon-types/fire.png";
import flying from "/pokemon-types/flying.png";
import ghost from "/pokemon-types/ghost.png";
import grass from "/pokemon-types/grass.png";
import ground from "/pokemon-types/ground.png";
import ice from "/pokemon-types/ice.png";
import normal from "/pokemon-types/normal.png";
import poison from "/pokemon-types/poison.png";
import psychic from "/pokemon-types/psychic.png";
import rock from "/pokemon-types/rock.png";
import steel from "/pokemon-types/steel.png";
import water from "/pokemon-types/water.png";

export const getTypes = (type) => {
  switch (type) {
    case "Bug":
      return bug;
    case "Dark":
      return dark;
    case "Dragon":
      return dragon;
    case "Electric":
      return electric;
    case "Fairy":
      return fairy;
    case "Fighting":
      return fighting;
    case "Fire":
      return fire;
    case "Flying":
      return flying;
    case "Ghost":
      return ghost;
    case "Grass":
      return grass;
    case "Ground":
      return ground;
    case "Ice":
      return ice;
    case "Normal":
      return normal;
    case "Poison":
      return poison;
    case "Psychic":
      return psychic;
    case "Rock":
      return rock;
    case "Steel":
      return steel;
    case "Water":
      return water;
    default:
      return water;
  }
};
