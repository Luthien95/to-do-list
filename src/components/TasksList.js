import React from "react";
import data from "./../data/tasks.json";
import Task from "./Task";
import NewTask from "./NewTask";

class TasksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewTaskOpen: false,
      taskList: [],
      newTask: {},
    };
    this.openNewTaskWindow = this.openNewTaskWindow.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  componentDidMount() {
    this.setState({
      taskList: data,
    });
  }

  openNewTaskWindow() {
    this.setState((prevState) => ({
      isNewTaskOpen: !prevState.isNewTaskOpen,
    }));
  }

  addNewTask(newTask) {
    if (newTask.status === undefined) newTask.status = "To do";

    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
  }

  render() {
    return (
      <div className="task-list">
        <div className="task-list__col">
          <h1 className="task-list__header">TO DO:</h1>
          {this.state.taskList
            .filter((task) => task.status === "To do")
            .map((task, id) => (
              <Task task={task} key={id} />
            ))}
        </div>
        <div className="task-list__col">
          <h1 className="task-list__header">IN PROGRESS:</h1>
          {this.state.taskList
            .filter((task) => task.status === "In progress")
            .map((task, id) => (
              <Task task={task} key={id} />
            ))}
        </div>
        <div className="task-list__col">
          <h1 className="task-list__header">DONE:</h1>
          {this.state.taskList
            .filter((task) => task.status === "Done")
            .map((task, id) => (
              <Task task={task} key={id} />
            ))}
        </div>
        <button onClick={this.openNewTaskWindow}>Add task</button>
        {this.state.isNewTaskOpen ? (
          <NewTask
            closeNewTaskWindow={this.openNewTaskWindow}
            addNewTask={this.addNewTask}
          />
        ) : null}
      </div>
    );
  }
}

export default TasksList;
