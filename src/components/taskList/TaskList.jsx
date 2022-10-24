import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://6351820f3e9fa1244e6084e3.mockapi.io/api/task";
    await axios.delete(`${url}/${id}`);
    getTask();
  };
  return (
    <div>
      {task.map((item) => {
        const { id, task, Date } = item;
        return (
          <div
            key={id}
            className="mt-2 d-flex justify-content-between bg-secondary p-2 rounded-2"
          >
            <div>
              <h4>{task}</h4>
              <p>{Date}</p>
            </div>
            <div>
              <RiDeleteBin5Fill
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  fontSize: "2rem",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
