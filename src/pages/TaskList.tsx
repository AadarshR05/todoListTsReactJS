import React, { useEffect, useState } from "react";
import { taskData } from "../constants/Task";
import Task from "./Task";
import { TaskPropType } from "./types";
import { Card, Container } from "react-bootstrap";
import "./styles/TaskList.css";

const TaskList = () => {
  const [tasks, setTask] = useState<TaskPropType["tasks"][]>(taskData);
  const [filteredTask, setFilteredTask] =
    useState<TaskPropType["tasks"][]>(taskData);
  const [status, setStatus] = useState<boolean>(false);

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    let taskID: number = parseInt(e.target.value);
    let filteredData = taskData.filter((task) => task.id === taskID);
    filteredData[0].status = e.target.checked ? "complete" : "incomplete";

    setTask((prev) => {
      let toReplaceData = prev.filter((data) => data.id === filteredData[0].id);

      let toReplaceIndex = prev.indexOf(toReplaceData[0]);

      prev.splice(toReplaceIndex, 1, filteredData[0]);

      return [...prev];
    });
  };

  const filterFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if (e.target.value === "All") {
      setFilteredTask(tasks);
      setStatus(false);
    } else {
      const filtered = tasks.filter((task) => task.status === e.target.value);
      setFilteredTask(filtered);
      setStatus(true);
      // setTask(filtered);
    }
  };
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      {console.log("mounting")}
      <Container fluid>
        <Card className="m-2">
          <Card.Header>
            Task for the day
            <select className="ms-5" onChange={filterFunction}>
              <option selected value="All">
                All
              </option>
              <option value={"complete"}>complete</option>
              <option value={"incomplete"}>incomplete</option>
            </select>
          </Card.Header>
          {!status
            ? tasks.map((task) => (
                <Card.Body className="">
                  {" "}
                  <Task tasks={task} changeStatus={changeStatus} />
                </Card.Body>
              ))
            : filteredTask.map((task) => (
                <Card.Body className="">
                  {" "}
                  <Task tasks={task} changeStatus={changeStatus} />
                </Card.Body>
              ))}
          <Card.Footer>********</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default TaskList;
