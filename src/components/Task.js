import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
    };
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

  render() {
    return (
      <TaskItem
        title={this.state.task.title}
        description={this.state.task.description}
      />
    );
  }
}

const TaskItem = ({ title, description }) => {
  return (
    <div className="task-item">
      <h1 className="task-item__title">{title}</h1>
      <p className="task-item__description">{description}</p>
    </div>
  );
};

export default Task;
