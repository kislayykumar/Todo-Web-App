import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Footer from './components/Footer';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todostring= localStorage.getItem("todos")
    if(todostring){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLS= (params)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit= (e,id)=>{
    let t=todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos= todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos);
    saveToLS()
  }

  const handleDelete= (e,id)=>{
    let newTodos= todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos);
    saveToLS()
  }

  const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4() , todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
    saveToLS()
  }

  const handleChange= (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox= (e)=>{
    let id= e.target.name;
    let index= todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  }


  return (
    <>
    <Navbar/>
      <div className="container max-w-[95vw] mt-4 bg-yellow-100 rounded-xl mx-auto min-h-[80%] p-5  overflow-auto">
        <div className="addTodo my-5">
          <h1 className='text-xl font-bold'>Add a Todo</h1>
          <input onChange={handleChange} value={todo} className='w-1/2  rounded-md' type="text" required/>
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-yellow-400 disabled:bg-yellow-700 hover:bg-yellow-600 p-3 py-1 text-black rounded-md mx-6'>Save</button>
        </div>
          <h1 className='text-xl font-bold'>Your Todos</h1>
          <div className="todos max-w-[95vw]">
            {todos.length ===0 && <div className='m-5'> No Todos to display </div> }
            {todos.map(item=>{
           return <div key={item.id} className="todo flex my-2 min-w-[50%] justify-between">
              <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
              <div className="m-2"><div className={item.isCompleted?"line-through":""}>{item.todo}</div></div>
              <div className="buttons flex h-full gap-1 mx-3">
                <button onClick={(e)=>handleEdit(e,item.id)} className='bg-yellow-400 hover:bg-yellow-600 p-3 py-1 text-black rounded-md '><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-yellow-400 hover:bg-yellow-600 p-3 py-1 text-black rounded-md '><MdDeleteForever /></button>
              </div>
            </div>
            })}
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
