// import React, { useState } from "react";
// import Task from "./Task";

// function NewTaskForm({categories, tasks}) {
//   const [text, setText ]= useState ();
//   const [category, setCategory] = useState ();
//   const [submittedData, setSubmittedData] = useState ([])
//   // console.log(categories);
//   // console.log(tasks);

//   const displayCategory = categories.map ((cat)=> {
//     return <option>{cat}</option>
//   });

//   function handleCategory (e) {
//     setCategory (e.target.value)
//   }

//   function handleChange (e) {
//     setText (e.target.value)
//   };

//   function onSubmitTodo (e) {
//     e.preventDefault ();
//     const formData = { text : text, category: category}
//     const dataArray = [...submittedData, formData]
//     setSubmittedData (dataArray);
//     tasks.push ({text, category})
//   };


//   console.log(text);
//   console.log(category);
//   console.log(submittedData);
//   console.log(tasks)
//   return (
//     <>
//       <form onSubmit={onSubmitTodo} className="new-task-form">
//         <label>
//           Details
//           <input onChange={handleChange}  type="text" name="text" value = {text} />
//         </label>
//         <label>
//           Category
//           <select onChange={handleCategory} name="category" value={category}>
//             {/* render <option> elements for each category here */}
//             {displayCategory}
//           </select>
//         </label>
//         <input type="submit" value="Add task" />
//       </form>
//       <Task/>
//     </>
//   );
// }

// export default NewTaskForm;

import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  
  const [newItemFields, setNewItemFields]=useState({
    text:'',
    category:'Code'
  })
 
  function handleFields(e){
    const{name,value}=e.target
    setNewItemFields({...newItemFields,[name]:value})
    
  }
  // console.log(newItemFields)
  
  
  return (
    <form
    onSubmit={(e)=>{
      e.preventDefault()
      onTaskFormSubmit(newItemFields)}}
    className="new-task-form"
    >
      <label>
        Details
        <input value={newItemFields.text} onChange={handleFields}  type="text" name="text" />
      </label>

      <label>
        Category
        <select value={newItemFields.category} onChange={handleFields} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;