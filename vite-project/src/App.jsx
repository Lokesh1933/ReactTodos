import Navbar from "./components/Navbar" 
import { useState ,useEffect} from "react"
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid'
import Footer from "./components/Footer";

function App() {
  const [todo, settodo] = useState("")
  const [todos,settodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  useEffect(() => {
    const todostring = localStorage.getItem("todos");
    if (todostring) {
      const todosFromLS = JSON.parse(todostring);
      settodos(todosFromLS);
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  
   const handleEdit = (e,id)=> {
     let t = todos.filter(i => {
      return i.id === id
     })
     settodo(t[0].todo)
     let newTodos = todos.filter((item) => item.id !== id);
     settodos(newTodos);
    
     
   }
   
   const handleAdd = ()=> {
     settodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
     settodo("")
    //  saveToLS()
   }
   const handleChange = (e)=> {
      settodo(e.target.value)

   }
   const handleCheckbox = (e) => {
     let id = e.target.name
     let index = todos.findIndex(item => {
      return item.id === id
     })
     let newTodos = [...todos]
     newTodos[index].isCompleted = !newTodos[index].isCompleted
     settodos(newTodos)
    //  saveToLS()
   }

   const handleDelete = (e,id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this task?")
    if (isConfirmed) {
      let newTodos = todos.filter((item) => item.id !== id)
      settodos(newTodos)
      // saveToLS()
    }
   }
   const toggleFinished = () => {
     setshowFinished(!showFinished)
   }
   
   
   
  return (
    <>
       <Navbar />
       <div className="mx-3 md:container md:mx-auto bg-violet-100 my-5 rounded-xl p-5 min-h-[80vh] md:w-[35%]">
       <h1 className="font-bold text-xl text-center">iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-md font-bold">Add a Todo</h2>
          <div className="flex">
           <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full px-5 py-1"/>
           <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-violet-800 mx-2 rounded-full disabled:bg-violet-500 hover:bg-violet-950  p-4 py-2 text-sm font-bold text-white">Save</button>
          </div>

        </div>
       <input className="my-4" id="show" type="checkbox" onChange={toggleFinished} checked={showFinished}/> 
       <label className="mx-2" htmlFor="show">Show Finished</label>
       <div className="h-[1px] opacity-35 w-[90%] my-2 mx-auto bg-black"></div>
       <h2 className="text-md font-bold">Your Todos</h2>
       <div className="todos">
        {todos.length === 0 && <div className="m-5">No Todos to display</div>}
        {todos.map(item => {

         
        return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex  my-3 justify-between">
          <div className="flex gap-5">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons flex h-full">
            <button onClick={(e) =>{handleEdit(e,item.id)}} className="bg-violet-800 hover:bg-violet-950 rounded-md p-2 py-1 text-sm font-bold text-white mx-1"><FaEdit /></button>
            <button onClick={(e) => {handleDelete(e,item.id)}} className="bg-violet-800 hover:bg-violet-950 rounded-md p-2 py-1 text-sm font-bold text-white mx-1"><AiFillDelete /></button>
          </div>
        </div>
        })}
       </div>
        

       </div>
       <Footer />
    </>
  )
}

export default App
