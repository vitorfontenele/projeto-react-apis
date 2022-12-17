import bug from "../imgs/pokemon-types/bug.png";
import dark from "../imgs/pokemon-types/dark.png";
import dragon from "../imgs/pokemon-types/dragon.png";
import electric from "../imgs/pokemon-types/electric.png";
import fairy from "../imgs/pokemon-types/fairy.png";
import fighting from "../imgs/pokemon-types/fighting.png";
import fire from "../imgs/pokemon-types/fire.png";
import flying from "../imgs/pokemon-types/flying.png";
import ghost from "../imgs/pokemon-types/ghost.png";
import grass from "../imgs/pokemon-types/grass.png";
import ground from "../imgs/pokemon-types/ground.png";
import ice from "../imgs/pokemon-types/ice.png";
import normal from "../imgs/pokemon-types/normal.png";
import poison from "../imgs/pokemon-types/poison.png";
import psychic from "../imgs/pokemon-types/psychic.png";
import rock from "../imgs/pokemon-types/rock.png";
import steel from "../imgs/pokemon-types/steel.png";
import water from "../imgs/pokemon-types/water.png";

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
