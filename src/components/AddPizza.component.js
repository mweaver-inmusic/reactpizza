import React, { useState } from 'react';

const AddPizza = () => {
    const [name, setName] = useState('');
    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => sendpizza(name)} type="submit">Add</button>
        </div>
    );
}

// function sendpizza(name){
//     fetch("http://localhost:5000/pizzadb", {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name: name, isglutenfree: true })
//     })
// }
function sendpizza(name){
    fetch("https://contoso-pizza.herokuapp.com/pizzadb", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, isglutenfree: true })
    })
}

export default AddPizza;