
import React, { useState } from 'react'
import { useRouter } from 'next/router';

function Index({ todoData }) {

    const router = useRouter()

    // create a button and on click of button get all todos specify to some categories
    // get all dat of fun categories

    const [todos, setTodos] = useState(todoData)

    async function getFunTodos() {
        const res = await fetch("http://localhost:4000/todo?category=fun");
        const data = await res.json();
        setTodos(data)
        // shallow means it just add an path just after your present endpoint
        // undefined means we not send anything to new routes
        router.push('/todos?category=fun', undefined, { shallow: true })
        // we can share the new created routes with other 
    }



    return (
        <>
            <div>Todo List</div>
            <div>
                <button onClick={getFunTodos} > Fun Todos </button>
            </div>
            <div>
                {
                    // now apply map to display data
                    todos.map((todo, index) => <>
                        <h3>{todo.title} | {todo.category} </h3>
                    </>)
                }
            </div>
        </>
    )
}

export default Index


export const getServerSideProps = async (context) => {

    const { query } = context
    const category = query?.category

    const queryString = category ? `category=${category}` : ""
    // if someone refresh the page and category present
    const res = await fetch(`http://localhost:4000/todo?${queryString}`);
    const data = await res.json();
    return {
        props: {
            todoData: data
        }
    }
}

// we had successfully implemented both client side and server side rendering together
