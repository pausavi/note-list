import { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from "./components/TaskContent";
function App() {
  // Inicializa tasks con el valor del local storage o un array vacío
  let initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialTasks);

  // Actualiza el local storage cada vez que cambie tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Función para crear una nueva tarea
  const createTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    const currenTask =tasks.filter((task) =>task.idTask !== id);
    setTasks(currenTask)
  }


  return (
    <Container>
      <Header />
      <InputTask createTask={createTask}  />
      <TaskContent tasks={tasks} deleteTask={ deleteTask}/>
    </Container>
  );
}

export default App;
