import React, {useState} from "react";
import './App.css';
import Todo from "./todo";
import InputArea from "./input";

function App(){
    const[items, setItems] = useState([]);

    function addItem(formData){
        setItems(prevItems => {
            return [...prevItems, formData]
        });

    }

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className="container">
            <div className="h1">
                <h1>To-Do List</h1>
            </div>
           <InputArea 
                onAdd={addItem}
           />
            <div>
                <ul>
                {items.map((item, index) => 
                    <Todo
                        key = {index}
                        id = {index}
                        list = {item}
                        onChecked = {deleteItem}

                    />
                )}
                </ul>
            </div>
        </div>
    );
}

export default App;