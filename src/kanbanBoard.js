import React, { useState } from "react";

const KanbanBoard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", status: "todo" },
        { id: 2, title: "Task 2", status: "in-progress" },
        { id: 3, title: "Task 3", status: "in-test" },
        { id: 4, title: "Task 4", status: "done" },
    ]);

    const statuses = ["todo", "in-progress", "in-test", "done"];

    const moveTask = (id, direction) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    const currentIndex = statuses.indexOf(task.status);
                    const newIndex =
                        direction === "forward"
                            ? Math.min(currentIndex + 1, statuses.length - 1)
                            : Math.max(currentIndex - 1, 0);
                    return { ...task, status: statuses[newIndex] };
                }
                return task;
            })
        );
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {statuses.map((status) => (
                <div key={status} style={{ flex: 1, border: "1px solid black", padding: "10px" }}>
                    <h3>{status.toUpperCase()}</h3>
                    {tasks
                        .filter((task) => task.status === status)
                        .map((task) => (
                            <div
                                key={task.id}
                                style={{
                                    border: "1px solid gray",
                                    margin: "5px 0",
                                    padding: "10px",
                                    borderRadius: "5px",
                                }}
                            >
                                <p>{task.title}</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button
                                        onClick={() => moveTask(task.id, "backward")}
                                        disabled={status === "todo"}
                                    >
                                        Backward
                                    </button>
                                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                                    <button
                                        onClick={() => moveTask(task.id, "forward")}
                                        disabled={status === "done"}
                                    >
                                        Forward
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;