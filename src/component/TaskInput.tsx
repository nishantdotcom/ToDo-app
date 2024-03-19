import { useState } from "react";

type TodoType = {
  title: string;
  id: number;
  desc: string;
};

function TaskInput() {
  const [task, setTask] = useState<string>("");
  const [taskDesc, setTaskDescription] = useState<string>("");
  const [list, setlist] = useState<TodoType[]>([]);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }
  function handleDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskDescription(event.target.value);
  }
  function handleRadioEvent(event: React.MouseEvent<HTMLInputElement>) {
    console.log(event);
    const finalId: number = parseInt((event.target as HTMLInputElement).value);
    console.log(finalId);

    const newData: TodoType[] = list.filter((data) => {
      return data.id != finalId;
    });
    console.log(newData);
    setlist(newData);
  }

  function handleSubmit() {
    if (task != "" || taskDesc != "") {
      setTask("");
      setTaskDescription("");
      const getTask: TodoType[] = list;
      const task_id: number = list.length;
      getTask.push({
        title: task,
        desc: taskDesc,
        id: task_id,
      });
      console.log(getTask);
      setlist(getTask);
    } else {
      alert("Please enter text");
    }
  }

  return (
    <div className="p-2 gap-x-4">
      <div className="flex justify-center text-2xl font-bold p-4">
        Enter the task you want to add
      </div>
      <div className="flex justify-center ">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(event) => handleChange(event)}
          className="border border-black rounded-lg h-16 w-96 p-6"
        />
      </div>
      <div className="flex justify-center text-2xl font-bold p-4">
        Enter Task Description
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          value={taskDesc}
          placeholder="Enter description"
          className="border border-black rounded-lg h-16 w-96 p-4"
          onChange={(event) => {
            handleDescription(event);
          }}
        />
      </div>
      <div className=" flex justify-center pt-8">
        <button
          onClick={handleSubmit}
          className="p-4 text-white font-semibold bg-red-300 rounded-2xl"
        >
          Submit
        </button>
      </div>

      <div className="flex justify-center p-4 text-xl">Task List</div>
      <div>
        {list.map((data: TodoType) => {
          return (
            <div
              className="flex justify-start p-4 border-2 bg-slate-100 m-2 text-violet-500 font-medium text-2xl rounded-lg gap-x-10 "
              key={data.id}
            >
              <div>
                <input
                  type="radio"
                  onClick={(event) => {
                    handleRadioEvent(event);
                  }}
                  value={data.id}
                />
              </div>
              <div>{data.title}</div>
              <div>{data.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskInput;
