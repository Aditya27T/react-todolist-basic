const root = document.querySelector('#root');
const App = () => {
  const [activities, setActivities] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [messages, setMessages] = React.useState('');
  const handleAdd = () => {
    if (activities) {
      setTodos([...todos, {
        id: Date.now(),
        activities,
        completed: false
      }]);
      setActivities('');
    } else {
      setMessages('Please enter your activities');
    }
  };
  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleEdit = id => {
    setEdit(todos.find(todo => todo.id === id));
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleUpdate = () => {
    if (edit.activities) {
      setTodos([...todos, edit]);
      setEdit({});
    } else {
      setMessages('Please enter your activities');
    }
  };
  const handleCancel = () => {
    setEdit({});
  };
  const handleCompleted = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6 offset-md-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, "Todo List")), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Enter your activities",
    value: activities,
    onChange: e => setActivities(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "blok"
  }), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleAdd
  }, "Add")), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, todos.map(todo => /*#__PURE__*/React.createElement("li", {
    className: "list-group-item",
    key: todo.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    checked: todo.completed,
    onChange: () => handleCompleted(todo.id)
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    style: {
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }, todo.activities)), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    onClick: () => handleDelete(todo.id)
  }, "Delete"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning",
    onClick: () => handleEdit(todo.id)
  }, "Edit"), edit.id === todo.id && /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    value: edit.activities,
    onChange: e => setEdit({
      ...edit,
      activities: e.target.value
    })
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: handleUpdate
  }, "Update"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleCancel
  }, "Cancel"))))))), messages && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-danger"
  }, messages))))));
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);