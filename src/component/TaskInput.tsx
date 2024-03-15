import { useState } from "react";

function TaskInput() {
  const [task, setTask] = useState<string>("");
  const [list, setlist] = useState<string[]>([]);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleSubmit() {
    setTask("");
    const getTask: string[] = list;
    getTask.push(task);
    setlist(getTask);
  }

  return (
    <div className="flex justify-center p-2 gap-x-4">
      <div>Enter the task you want to add:</div>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(event) => handleChange(event)}
          className="border border-black rounded-lg"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Task List</div>
      {list.map((data: string) => {
        return <div className="text-red-600">{data}</div>;
      })}
    </div>
  );
}

export default TaskInput;
