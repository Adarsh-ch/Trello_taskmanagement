// Task.jsx
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Task = ({
  taskTitle,
  taskDate,
  taskId,
  handleDeleteTask,
  handleEditTask,
  openModel,
  setOpenModel,
}) => {
  const [editText, setEditText] = useState(taskTitle);

  return (
    <div className="border flex flex-col gap-2 bg-slate-50 p-3 rounded-md shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-medium text-gray-800">{taskTitle}</h4>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Date: </span>
            {taskDate}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <button onClick={() => setOpenModel(true)}>
            <EditNoteIcon
              className="text-green-500 hover:text-green-600 transition-colors"
              titleAccess="Edit Task"
            />
          </button>

          <button onClick={() => handleDeleteTask(taskId)}>
            <DeleteForeverIcon
              className="text-red-500 hover:text-red-600 transition-colors"
              titleAccess="Delete Task"
            />
          </button>
        </div>
      </div>

      <Modal
        open={openModel}
        onClose={() => setOpenModel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Task
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <textarea
              onChange={(e) => setEditText(e.target.value)}
              value={editText}
              className="border w-full rounded-md p-2"
              rows={4}
            />
          </Typography>
          <button
            onClick={() => handleEditTask(taskId, editText)}
            className="mt-4 w-full py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Task;
