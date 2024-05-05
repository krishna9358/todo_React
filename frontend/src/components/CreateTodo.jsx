import { useState } from 'react';
export function CreateTodo (){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div>
            <input 
                placeholder="Todo list" 
                onChange={function (e) { 
                    const value = e.target.value;
                    setTitle(value);
                }}
            />
            <input 
                placeholder="Description" 
                onChange={function (e) { 
                    const value = e.target.value;
                    setDescription(value);
                }}
            />
            <button onClick={() => {
                fetch("http://localhost:3000/add", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title, //usestate title it is (in the value)
                        description : description, // usestate description it is( in the value)
                    }),
                    headers : {
                        "Content-Type" : "application/json",
                    },
                })
                .then (async function (res){
                    if (!res.ok) {
                        throw new Error('Failed to add todo');
                    }
                    const json = await res.json();
                    alert("Added todo");
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Failed to add todo");
                });
            }}>Add</button>
        </div>
    );
}
