// import React from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App({}) {

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm categories = {CATEGORIES} tasks = {TASKS}/>
//       <TaskList />
//     </div>
//   );
// }

// export default App;

import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [task, setTask] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('All')
  
  

  function addNewItemtoList(newItem){
    setTask([...task,newItem])
  }

  function deletedItem(deletedItem){
    setTask(task.filter((item)=>item.text !== deletedItem))
  }
 

  const itemDisplayed = task

  .filter(
    (item)=>{ 
    if(selectedCategoryButton==='All') return true
    return selectedCategoryButton === item.category
   } 
   )

  
          

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onButton={selectedCategoryButton}
        selectedButton={setSelectedCategoryButton} 
      />
      <NewTaskForm
        onTaskFormSubmit={addNewItemtoList}
        categories={categories}
      />
      <TaskList 
        deletedItem={deletedItem}
        tasks={itemDisplayed} />
    </div>
  );
}

export default App;
