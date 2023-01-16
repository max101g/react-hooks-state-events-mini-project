import React from "react";
import Task from "./Task";

function TaskList(prop) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
       {prop.tasks.map((task) => (
         <Task
          key={task.text} 
          text={task.text} 
          category={task.category}
          onDelete={prop.onDelete}
          id={task.id}
          
          />
        ))}
    </div>
  );
}

export default TaskList;
