import { useEffect, useState } from "react";
import "./App.css"

const App = () => {

    const [activar, setActivar] = useState(false);
    const [posicion, setPosicion] = useState({x:0, y:0});

    useEffect(() => {

        const handleMoverMouse = (e) => {
            const {clientX, clientY} = e;
            setPosicion({x:clientX, y:clientY})
        }

        if (activar) {
            window.addEventListener("pointermove", handleMoverMouse);
        } 

        return () => {
            window.removeEventListener("pointermove", handleMoverMouse)
        }

    },[activar])

    useEffect(() => {
        document.body.classList.toggle("no-cursor", activar);

        return () => {
            document.body.classList.remove("no-cursor")
        }
    },[activar])

    const handleClick = () => {
        setActivar(!activar);
    }

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${posicion.x}px, ${posicion.y}px)`
            }}
            />
            <button onClick={handleClick} > {activar ? "Desactivar seguir mouse" : "Activar seguir mouse"} </button>
        </>


    );
}

export default App;