import React from 'react'
import styles from './TaskCard.module.css'
import icon from '../../img/priorities/high.svg'



const TaskCard = (props) => {
    const { onOpen } = props
    return (
        <article className={styles.card} onClick={onOpen}>
            <h2> Task Name</h2>
            <div className={styles.info}>
                <img className={styles.icon} src={icon} alt='icon'/>
                <p> discription </p>
            </div>
        </article>
    )
}

export default TaskCard