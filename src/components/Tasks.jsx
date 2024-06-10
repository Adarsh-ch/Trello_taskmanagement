// Tasks.jsx
import React, { useState } from "react";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { addTask, deleteTask, editTask } from "../redux/todoSlice";
import toast, { Toaster } from "react-hot-toast";

const Tasks = ({ todoList }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (message.length === 0) return toast.error("Message cannot be empty");

    try {
      const data = { cardId: todoList.id, message: message };
      dispatch(addTask(data));
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    dispatch(deleteTask({ cardId: todoList?.id, id: taskId }));
  };

  const [openModel, setOpenModel] = useState(false);

  const handleEditTask = async (taskId, newMessage) => {
    dispatch(editTask({ cardId: todoList?.id, id: taskId, newMessage }));
    setOpenModel(false);
  };

  return (
    <div>
      <Droppable droppableId={todoList?.id?.toString()}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoList?.tasks?.map(({ id, title, date }, index) => (
              <Draggable
                key={id}
                index={index}
                draggableId={id.toString()}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Task
                      handleDeleteTask={handleDeleteTask}
                      handleEditTask={handleEditTask}
                      taskId={id}
                      taskTitle={title}
                      taskDate={date}
                      openModel={openModel}
                      setOpenModel={setOpenModel}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <form onSubmit={handleAddTask} className="mt-4">
        <textarea
          id="addTask"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Add a Task"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Tasks;
