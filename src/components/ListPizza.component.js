import React, { useState } from 'react';

const ListPizza = () => {
    const [pizzas, setPizzas] = useState([]);

    // function refreshlist(){
    //     fetch("http://localhost:5000/pizzadb")
    //         .then(result => result.json())
    //         .then(res => setPizzas(res));
    // }
    function refreshlist(){
        fetch("https://contoso-pizza.herokuapp.com/pizzadb")
            .then(result => result.json())
            .then(res => setPizzas(res));
    }

    return (
        <>
            <button onClick={refreshlist}>Refresh list</button>
            { pizzas.map(pizza => <p key={pizza.id}>{pizza.name}</p>) }
        </>
    )
}

export default ListPizza;
