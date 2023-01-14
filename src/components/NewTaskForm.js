import React, { useState } from "react";
import Task from "./Task";

function NewTaskForm({categories, tasks}) {
  const [text, setText ]= useState ();
  const [category, setCategory] = useState ();
  const [submittedData, setSubmittedData] = useState ([])
  // console.log(categories);
  // console.log(tasks);

  const displayCategory = categories.map ((cat)=> {
    return <option>{cat}</option>
  });

  function handleCategory (e) {
    setCategory (e.target.value)
  }

  function handleChange (e) {
    setText (e.target.value)
  };

  function onSubmitTodo (e) {
    e.preventDefault ();
    const formData = { text : text, category: category}
    const dataArray = [...submittedData, formData]
    setSubmittedData (dataArray);
    tasks.push ({text, category})
  };


  console.log(text);
  console.log(category);
  console.log(submittedData);
  console.log(tasks)
  return (
    <>
      <form onSubmit={onSubmitTodo} className="new-task-form">
        <label>
          Details
          <input onChange={handleChange}  type="text" name="text" value = {text} />
        </label>
        <label>
          Category
          <select onChange={handleCategory} name="category" value={category}>
            {/* render <option> elements for each category here */}
            {displayCategory}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
      <Task/>
    </>
  );
}

export default NewTaskForm;
