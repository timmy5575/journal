import { useState, useEffect } from "react";
import "./to-do.css";

export default function TodoApp() {
  // Safe helpers
  const readJSON = (key, fallback) => {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  };

  // ✅ Correct useState syntax
  const [showModal, setShowModal] = useState({
    show: false,
    type: "add",
    content: "A note has been added",
  });

  // Initialize FROM localStorage
  const [todos, setTodos] = useState(() => readJSON("todos", []));
  const [showForm, setShowForm] = useState(() => readJSON("showForm", false));
  const [title, setTitle] = useState(() => localStorage.getItem("draftTitle") || "");
  const [task, setTask] = useState(() => localStorage.getItem("draftTask") || "");
    const [date, setDate] = useState(() => localStorage.getItem("draftDate") || "");

  // 🔄 Persist to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("showForm", JSON.stringify(showForm));
  }, [showForm]);

  useEffect(() => {
    localStorage.setItem("draftTitle", title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem("draftTask", task);
  }, [task]);

    useEffect(() => {
    localStorage.setItem("draftDate", date);
  }, [date]);

  // ✅ Add new todo
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() && !task.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      task: task.trim(),
      date: date.trim(),
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setTitle("");
    setTask("");
    setDate("")
    setShowForm(false);

    // ✅ Show modal
    setShowModal({
      show: true,
      type: "add",
      content: "A note has been added",
    });
  };

  const handleToggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

      useEffect(()=>{
        setTimeout(()=>{
            setShowModal(false)
        }, 2000)
    }, [showModal])


  const handleEdit = (id) => {
    const item = todos.find((t) => t.id === id);
    if (!item) return;
    setTitle(item.title);
    setTask(item.task);
    setDate(item.Date);
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setShowModal({
      show: true,
      type: "delete",
      content: "A note has been deleted",
    });
  };

  return (
    <>
      {/* ✅ Modal with fixed className */}
      <p
        className={`modal 
          ${showModal.show ? "show" : ""} 
          ${showModal.type === "add" ? "add" : ""} 
          ${showModal.type === "delete" ? "delete" : ""}`}
      >
        {showModal.content}
      </p>

      <div className="inputField">
        {showForm ? (
          
          <form onSubmit={handleAdd} className="todo-form">
            <input type="date"
               value={date} 
               className="date"
               onChange={(e) => setDate(e.target.value)} 
                />
            <input
              type="text"
              placeholder="Title... "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
            />
            <textarea
              placeholder="Start typing..."
              maxRows={12}
              rows={10}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="task-input"
            />
            <button type="submit" className="addBu">Add</button>
          </form>
          
        ) : (
<div className="container">
  
  <a href="#" className="button type--C">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span onClick={() => setShowForm(true)} className="button__text">ENTRY</span>
    <div className="button__drow1"></div>
    <div className="button__drow2"></div>
  </a>
</div>
        )}

        <div className="Active">
          <h2>Active Tasks</h2>
          <div className="list">
            <ol>
              {todos
                .filter((t) => !t.completed)
                .map((t) => (
                  <li key={t.id}>
                    <strong className="da"> {t.date}</strong>
                    <strong className="tittle">{t.title}</strong>
                    <p className="de">{t.task}</p>
                    <div className="card-actions">
                      {/* <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => handleToggleCompleted(t.id)}
                      /> */}
                      <button onClick={() => handleEdit(t.id)}>Edit</button>
                      <button onClick={() => handleDelete(t.id)}>Delete</button>
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}





      {/* Completed todos */}
      {/* <div className="completedList">
        <h2>Completed Tasks</h2>
        <ol>
          {todos
            .filter((todo) => todo.completed) // only completed ones
            .map((todo) => (
              <li key={todo.id}>
                <span >
                  {todo.text}
                </span>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            ))}
        </ol>
      </div> */}