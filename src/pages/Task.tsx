import React, { useEffect } from "react";
import { TaskComponentType, TaskPropType } from "./types";
import { Card, Form } from "react-bootstrap";
import "./styles/TaskList.css";

const Task = ({ tasks, changeStatus }: TaskComponentType) => {
  useEffect(() => {
    console.log("component mounted");

    return () => {
      //cleanup function
      console.log("unmounted");
    };
  }, []); //dependency array, if else
  return (
    <Card className="customCard p-2">
      <Form className="taskContainer">
        <Form.Check
          label={tasks.title}
          checked={tasks.status === "complete" ? true : false}
          onChange={changeStatus}
          value={tasks.id}
        />
      </Form>
    </Card>
  );
};

export default Task;
