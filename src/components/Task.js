import React from "react";
import EditTask from "./EditTask";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
      isEditMode: false,
    };

    this.changeTaskItem = this.changeTaskItem.bind(this);
  }

  componentDidMount() {
    const { task } = this.props;

    this.setState({
      task: task,
    });
  }

  componentDidUpdate(nextProps) {
    const { task } = this.props;

    if (nextProps.task !== task) {
      this.setState({
        task: task,
      });
    }
  }

  changeTaskItem() {
    this.setState({
      isEditMode: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.isEditMode ? (
          <EditTask task={this.state.task} />
        ) : (
          <TaskItem
            title={this.state.task.title}
            description={this.state.task.description}
            changeTaskItem={this.changeTaskItem}
          />
        )}
      </div>
    );
  }
}

const TaskItem = ({ title, description, changeTaskItem }) => {
  return (
    <div className="task-item">
      <h1 className="task-item__title">{title}</h1>
      <p className="task-item__description">{description}</p>
      <button onClick={changeTaskItem}>Edit</button>
    </div>
  );
};

export default Task;
