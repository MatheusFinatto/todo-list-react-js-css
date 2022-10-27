import React, { useEffect, useState } from "react";
import styles from "./TaskForm.module.css";
import { ITask } from "../../interfaces/Task";

interface Props {
  taskList: ITask[];
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, text: string): void;
}

const TaskForm = ({ taskList, setTask, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (task) {
      setId(task.id);
      setText(task.text);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, text);
    } else {
      setId(id + 1);
      const newTask: ITask = { id, text };
      setTask([...taskList, newTask]);
      console.log(taskList);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={text}
        type='text'
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
