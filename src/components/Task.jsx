import classname from 'classnames';
import styles from './task.module.css';

const STATUS = "PLANNED";

export default function Task({ title }) {
  return <div className={styles.task}>
    <div>{title}</div>
    <div className={styles.bottomWrapper}>
        <div></div>
        <div className={classname(styles.status,styles[STATUS])}>{STATUS}</div>
    </div>
  </div>;
}