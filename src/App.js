import Todo from "./Todo/TodoApp/Todo";
import Child from "./Todo/childTodo/Child";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const addData = (todo) => {
    const newData = [...data];
    newData.push(todo);
    setData(newData);
  };
  const removeData = (index) => {
    const newData = [...data];
    newData.splice(index,1);
    setData(newData);
  };

  return (
    <>
      <Todo addData={addData} />
   {data.length==0 && <h1 className="text-secondary mt-2 fw-bold text-center">
          Let's get some work done!
        </h1> 
      }  
      <Child data={data} removeData={removeData} /> 
      
     
    </>
  );
}

export default App;
