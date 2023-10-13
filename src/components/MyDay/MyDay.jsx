import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Paper,
  Stack,
  Button,
  Toolbar,
  TextField,
  Typography,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import store from "../../redux/store";

import "./MyDay.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// -----------------------------------

export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();

  // const [task, setTasks] = useState([]);
  // console.log("this is task", task);

  const taskStore = useSelector((state) => state.taskStore);
  // const taskStore = useSelector((store) => store.taskStore);
  // console.log("this is the taskStore", taskStore);


  // const tasksSelect = useSelector((store)=> store.tasksSelect);
  // const routine = useSelector((state)=> state.taskStore);
  // console.log('this is routine', routine);


  // const tasksSelect = useSelector((state)=> state.tasksSelect);
  // console.log('this is tasks Select', tasksSelect);

  // console.log('this is set tasks', setTasks);


  
  useEffect(() => {
    // console.log("in useEffect");
    //OR
    // dispatch({ type: "FETCH_TASKS" , payload: tasks});
    dispatch({ type: "FETCH_TASKS" });

  }, []);

  const handleTaskSelect = (task) => {
    dispatch({ type: "SET_TASKS_SELECT", payload: task });
  };



  function AddTaskOnClick() {
    handleTaskSelect();
    console.log("clicked add task");
    history.push("/AddTask");
  }
  return (
    <>
      <AppBar style={{ background: "#CEE9f1" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "purple",
          }}
        >
          <Button className="custom-button" variant="contained">
            Today
          </Button>
          <Button variant="contained" onClick={AddTaskOnClick}>
            Add Task
          </Button>
        </Toolbar>
      </AppBar>

      <Box style={{ marginBottom: "90px", flexGrow: 1 }}>
        <section className="tasksClass">
          <Grid>
            <div>
              {/* {routine.map((task)=>( */}
              {taskStore.map((task) => (
                
                <Card
                  key={task.id}
                  style={{ backgroundColor: "#f0f0f0", marginBottom: "16px" }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <List>
                        <ListItem>
                          <ListItemText
                            primary={task.task_name}
                            secondary={`Start Time: ${task.task_time_start}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            secondary={`End Time: ${task.task_time_end}`}
                          />
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
                ))}
            </div>
          </Grid>
        </section>
      </Box>
    </>
  );
}
