// Card.jsx
import React, { useState } from "react";
import Tasks from "./Tasks";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { editCardName, deleteCard } from "../redux/todoSlice";

const Card = ({ title, todoList, groupId }) => {
  const [modal, setModal] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const dispatch = useDispatch();

  const changeCardTitle = () => {
    dispatch(editCardName({ cardId: groupId, title: newTitle }));
    setModal(false);
  };

  return (
    <div className="flex flex-col border bg-slate-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <div className="space-x-2">
          <EditNoteIcon
            titleAccess="Edit card title"
            onClick={() => setModal(true)}
            className="text-green-500 cursor-pointer hover:text-green-600 transition-colors"
          />
          <DeleteForeverIcon
            onClick={() => dispatch(deleteCard({ cardId: groupId }))}
            className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
            titleAccess="Delete Card"
          />
        </div>
      </div>

      {modal && (
        <>
          <p className="text-sm text-gray-600">Enter new Card title here:</p>
          <div className="flex justify-between mt-2">
            <input
              type="text"
              value={newTitle}
              placeholder="New Card title"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              onClick={changeCardTitle}
              className="ml-2 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </>
      )}

      <Tasks todoList={todoList} />
    </div>
  );
};

export default Card;
