const root = document.querySelector('#root');

const App = () => {
    const [activities, setActivities] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [messages, setMessages] = React.useState('');

    const handleAdd = () => {
        if (activities) {
            setTodos([...todos, { id: Date.now(), activities, completed: false }]);
            setActivities('');
        } else {
            setMessages('Please enter your activities');
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id) => {
        setEdit(todos.find((todo) => todo.id === id));
        setTodos(todos.filter((todo) => todo.id !== id));
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

    const handleCompleted = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Todo List</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter your activities" value={activities} onChange={(e) => setActivities(e.target.value)} />
                            </div>
                            <div className="blok"></div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={handleAdd}>
                                    Add
                                </button>
                            </div>
                            <div className="form-group">
                                <ul className="list-group">
                                    {todos.map((todo) => (
                                        <li className="list-group-item" key={todo.id}>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" checked={todo.completed} onChange={() => handleCompleted(todo.id)} />
                                                <label className="form-check-label" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                                    {todo.activities}
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                                                    Delete
                                                </button>
                                                <button className="btn btn-warning" onClick={() => handleEdit(todo.id)}>
                                                    Edit
                                                </button>

                                                {edit.id === todo.id && (
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" value={edit.activities} onChange={(e) => setEdit({ ...edit, activities: e.target.value })} />
                                                        <button className="btn btn-success" onClick={handleUpdate}>
                                                            Update
                                                        </button>
                                                        <button className="btn btn-secondary" onClick={handleCancel}>
                                                            Cancel
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {messages && <div className="alert alert-danger">{messages}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, root);
