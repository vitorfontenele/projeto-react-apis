import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import "./style.css";

function Modal() {
    const context = useContext(GlobalContext);
    const {setShowModal, action} = context;
  
    // if(modal) {
    //   document.body.classList.add('active-modal')
    // } else {
    //   document.body.classList.remove('active-modal')
    // }
    const renderModalContent = () => {
        switch(action){
            case "add":
                return (
                    <>
                        <h2>Gotcha!</h2>
                        <p>O Pokémon foi adicionado a sua Pokédex</p>  
                    </>
                )
            case "remove":
                return (
                    <>
                        <h2>Oh, no!</h2>
                        <p>O Pokémon foi removido da sua Pokédex</p> 
                    </>
                )
            case "failRemove":
                return (
                    <>
                        <h2>Nada a fazer!</h2>
                        <p>Esse Pokémon está na sua Pokédex?</p>
                    </>
                )
            default:
                return (
                    <>
                        <h2>Erro!</h2>
                        <p>Erro</p>
                    </>
                )
        }
    }
  
    return (
        <>
        (
          <div className="modal">
            <div onClick={() => {setShowModal(previous => !previous)}} className="overlay"></div>
            <div className="modal-content">
              {renderModalContent()}
            </div>
          </div>
        )
      </>
    );
  }

  export default Modal;