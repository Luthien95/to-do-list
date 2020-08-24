import React from "react";

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: {},
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.closeNewWindowTab = this.closeNewWindowTab.bind(this);
    this.changeTitleInput = this.changeTitleInput.bind(this);
    this.changeDescriptionInput = this.changeDescriptionInput.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
  }

  addNewTask(e) {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.closeNewWindowTab();
  }

  closeNewWindowTab() {
    this.props.closeNewTaskWindow();
  }

  changeTitleInput(e) {
    let title = e.target.value;
    this.setState({
      newTask: {
        ...this.state.newTask,
        title: title,
      },
    });
  }

  changeDescriptionInput(e) {
    let description = e.target.value;
    this.setState({
      newTask: {
        ...this.state.newTask,
        description: description,
      },
    });
  }

  changeTaskStatus = (e) => {
    let status = e.target.value;
    this.setState({
      newTask: {
        ...this.state.newTask,
        status: status,
      },
    });
  };

  render() {
    return (
      <TaskItem
        addNewTask={this.addNewTask}
        closeNewWindowTab={this.closeNewWindowTab}
        changeTitleInput={this.changeTitleInput}
        changeDescriptionInput={this.changeDescriptionInput}
        changeTaskStatus={this.changeTaskStatus}
      />
    );
  }
}

const TaskItem = ({
  addNewTask,
  closeNewWindowTab,
  changeTitleInput,
  changeDescriptionInput,
  changeTaskStatus,
}) => {
  return (
    <div className="new-task">
      <button onClick={closeNewWindowTab}>x</button>
      <form onSubmit={addNewTask}>
        <label>
          Title:
          <input type="text" name="name" required onChange={changeTitleInput} />
        </label>
        <label>
          Description:
          <textarea type="text" name="name" onChange={changeDescriptionInput} />
        </label>
        <select onClick={changeTaskStatus}>
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewTask;
