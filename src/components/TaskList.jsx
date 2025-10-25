import { Component, createRef } from "react";
import x from '../components/TaskList.module.css'

class TaskList extends Component {

    identify = 1
    task = []
    inputRef = createRef()
    showForm = false

    add = () => {
        return (
            this.showForm = true,
            this.forceUpdate()
        )
    }

    delete = (id) => {
        this.task = this.task.filter(item => item.id !== id)
        this.forceUpdate()
    }

    addNewObject = () => {

        const value = this.inputRef.current.value
        if (value.trim() === '') return

        const newTask = {
            id: this.identify++,
            task: value,
            btn: 'Видалити',
        }

        this.task.push(newTask)
        console.log(this.task);
        this.inputRef.current.value = ''
        this.showForm = false
        this.forceUpdate()

    }

    render() {
        return (
            <div className={x.mainDiv}>
                <button className={x.mainBtn} onClick={this.add}>Додати завдання у список</button>

                {this.showForm && (
                    <div className={x.addForm}>
                        <h2>Завдання:</h2>
                        <input className={x.inputForm} type="text" placeholder="Твоє завдання" ref={this.inputRef} />
                        <button className={x.btnForm} onClick={this.addNewObject}>Додати до списку</button>
                    </div>
                )
                }

                <ul>
                    {this.task.map((item) => (
                        <li className={x.item} key={item.id}>
                            <p className={x.numberItem}>{item.id}.</p>
                            <h2 className={x.taskItem} id={item.id}>{item.task}</h2>
                            <button className={x.btnlist} onClick={() => this.delete(item.id)}>{item.btn}</button>
                        </li>

                    ))}
                </ul>

            </div>
        )
    }
}

export default TaskList