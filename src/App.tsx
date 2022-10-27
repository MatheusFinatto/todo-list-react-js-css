import "./App.css";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal/Modal";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("rodando");
  };

  const handleEdit = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
    // setTasks(tasks.filter((task) => task.id !== id));
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    display ? modal?.classList.remove("hide") : modal?.classList.add("hide");
  };

  const updateTask = (id: number, text: string) => {
    const updatedTask: ITask = { id, text };
    const updatedItems = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <div className='App'>
      <Modal
        children={
          <TaskForm
            taskList={tasks}
            setTask={setTasks}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Navbar />
      <main>
        <label>Add a task</label>
        <TaskForm taskList={tasks} setTask={setTasks} />
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
