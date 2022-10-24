import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log(newTask);
    addNewTask(newTask);
    setTask("");
    setDate("");
  };

  const addNewTask = async (newTask) => {
    const url = "https://6351820f3e9fa1244e6084e3.mockapi.io/api/task";
    await axios.post(url, newTask);
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            value={date}
            type="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary w-50" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
