import { ITask } from "../../interfaces/Task";
import styles from "./TaskList.module.css";

interface Props {
  tasks: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ tasks, handleDelete, handleEdit }: Props) => {
  return (
    <div className={styles.list}>
      {tasks.length > 0 && (
        <>
          <h2>Your todos:</h2>
          <ul>
            {tasks.map((task) => (
              <>
                <hr />
                <div>
                  <input type='checkbox' />
                  <li key={task.id}>{task.text}</li>
                </div>
                <button id={styles.edit} onClick={() => handleEdit(task)}>
                  Edit
                </button>
                <button
                  id={styles.remove}
                  onClick={() => handleDelete(task.id)}
                >
                  Remove
                </button>
              </>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TaskList;
