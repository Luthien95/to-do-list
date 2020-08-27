import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingTask: {},
    };

    this.changeTitleInput = this.changeTitleInput.bind(this);
    this.changeDescriptionInput = this.changeDescriptionInput.bind(this);
  }

  componentDidMount() {
    const task = this.props.task;

    this.setState({
      editingTask: task,
    });
  }

  changeTitleInput(e) {
    const title = e.target.value;

    this.setState({
      editingTask: {
        ...this.state.editingTask,
        title: title,
      },
    });
  }

  changeDescriptionInput(e) {
    const description = e.target.value;

    this.setState({
      editingTask: {
        ...this.state.editingTask,
        description: description,
      },
    });
  }

  render() {
    return (
      <TaskItem
        item={this.state.editingTask}
        changeTitleInput={this.changeTitleInput}
        changeDescriptionInput={this.changeDescriptionInput}
      />
    );
  }
}

const TaskItem = ({
  item,
  changeTitleInput,
  changeDescriptionInput,
  saveItemTaskChanges,
}) => {
  const taskTitle = item.title;
  const taskDescription = item.description;

  return (
    <div className="task-item">
      <input
        defaultValue={taskTitle}
        className="task-item__input"
        onChange={changeTitleInput}
        required
      ></input>
      <textarea
        defaultValue={taskDescription}
        className="task-item__textarea"
        onChange={changeDescriptionInput}
      ></textarea>
      <button onClick={saveItemTaskChanges}>Save</button>
    </div>
  );
};

export default EditTask;
