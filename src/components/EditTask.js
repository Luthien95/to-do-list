import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingTask: {},
    };
  }

  componentDidMount() {
    const task = this.props.task;

    this.setState({
      editingTask: task,
    });
  }

  render() {
    return <TaskItem item={this.state.editingTask} />;
  }
}

const TaskItem = ({ item }) => {
  const taskTitle = item.title;
  const taskDescription = item.description;
  const taskStatus = item.status;

  return (
    <div className="task-item">
      <input defaultValue={taskTitle} className="task-item__input"></input>
      <textarea
        defaultValue={taskDescription}
        className="task-item__textarea"
      ></textarea>
      <button>Edit</button>
    </div>
  );
};

export default EditTask;
