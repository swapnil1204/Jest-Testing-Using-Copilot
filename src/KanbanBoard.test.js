import { render, screen, fireEvent } from "@testing-library/react";
import KanbanBoard from "./kanbanBoard";

describe("KanbanBoard Component", () => {
    test("renders all statuses", () => {
        render(<KanbanBoard />);
        const statuses = ["TODO", "IN-PROGRESS", "IN-TEST", "DONE"];
        statuses.forEach((status) => {
            expect(screen.getByText(status)).toBeInTheDocument();
        });
    });

    test("renders tasks under correct statuses", () => {
        render(<KanbanBoard />);
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
        expect(screen.getByText("Task 3")).toBeInTheDocument();
        expect(screen.getByText("Task 4")).toBeInTheDocument();
    });

    test("moves task forward", () => {
        render(<KanbanBoard />);
        const forwardButton = screen.getAllByText("Forward")[0];
        fireEvent.click(forwardButton);
        expect(screen.getByText("Task 1")).toBeInTheDocument();
    });

    test("moves task backward", () => {
        render(<KanbanBoard />);
        const forwardButton = screen.getAllByText("Forward")[0];
        fireEvent.click(forwardButton);
        const backwardButton = screen.getAllByText("Backward")[0];
        fireEvent.click(backwardButton);
        expect(screen.getByText("Task 1")).toBeInTheDocument();
    });

    test("deletes a task", () => {
        render(<KanbanBoard />);
        const deleteButton = screen.getAllByText("Delete")[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    });

    test("disables forward button for tasks in 'done' status", () => {
        render(<KanbanBoard />);
        const doneTask = screen.getByText("Task 4");
        const forwardButton = doneTask.parentElement.querySelector("button:last-child");
        expect(forwardButton).toBeDisabled();
    });

    test("disables backward button for tasks in 'todo' status", () => {
        render(<KanbanBoard />);
        const todoTask = screen.getByText("Task 1");
        const backwardButton = todoTask.parentElement.querySelector("button:first-child");
        expect(backwardButton).toBeDisabled();
    });
});