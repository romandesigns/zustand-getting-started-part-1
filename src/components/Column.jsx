import styles from './column.module.css';
import Task from './Task';

export default function Column({ state }) {
  return <div className={styles.column}>
    <div className={styles.state}>
          {state}
    </div>
    <Task title="IDK"/>
    </div>;
}