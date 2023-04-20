import { useState, useEffect } from "react";
import Task from "./Task"
import { IoIosAddCircle} from "react-icons/io";

export default function Screen (){

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]); 

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks){
            setTasks(JSON.parse(storedTasks));
        }
    }, []);
    
    

    function handleChange(event){
        setInputValue(event.target.value);
        
    }

    function addTasks(event) {
        event.preventDefault();
        if (inputValue){
        setTasks((prevTasks) => [...prevTasks, inputValue]);
    }
        setInputValue("");
    }

    function deleteTask(id){
        setTasks(prevTasks => prevTasks.filter((task, index) => index !== id ));
    }

   

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#56DBA4] to-[#56C9DB] py-[10%] ">
            <div className="w-[70%] h-[85%] mx-auto lg:w-[30%]">
                <header className="p-[8%] flex justify-center items-center bg-white mb-[5%] border-[1px] border-black shadow-[2px_2px_2px_black]">
                <h1 className="text-xl">My ToDo List</h1>
                </header>
                <div className="min-h-[80%] bg-white px-[5%] mb-[5%] flex flex-col  border-[1px] border-black shadow-[2px_2px_2px_black]">
                    

                
                    {tasks.map((task, id) => {
                        return <Task key={id} content={task} onRemove={() => deleteTask(id)}/>
                    })}
                  
                   
                   
                </div>
        
                <form className="bg-white flex items-center border-[1px] border-black shadow-[2px_2px_2px_black]">
                    <textarea value={inputValue} onChange={handleChange} rows="3" className="text-xs w-[65%] bg-[#57C5B6] m-[5%] p-[2%] border-[1px] border-black rounded-lg"/>
                    <button onClick={addTasks} type="submit" className="w-8 pl-1 "><IoIosAddCircle className="w-10 h-10 text-[#57C5B6]" /></button>
                </form>
                
            </div>
        </div>
    )
}



