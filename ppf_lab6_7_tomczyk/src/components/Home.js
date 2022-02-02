import React from "react";
import './Home.css'

export const Home = (props) =>{
    return(
        <div>
            <p><h1 id="h1">Witaj na stronie home</h1></p>
            <p><h2>Aplikacja ta ma na celu zaprezentowanie rzeczy, które są możliwe do wykonania w aplikacji React</h2></p>
            <p><h3>Składa się ona z trzech stron : strona home (tutaj jesteś), strona główna, gdzie zaprezentowane będą różne zdarzenia, oraz strona trzecia, przedstawiająca możliwości związane z obrazkami i komponentami</h3></p>
            <p><h3>Jeżeli chcesz przejść do innych stron kliknij na odpowiedni przycisk w panelu nawigacji</h3></p>
        </div>
    ) 
}