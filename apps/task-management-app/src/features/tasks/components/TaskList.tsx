import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";
import type { Task } from "../types";
import FilterSearch from "./FilterSearch";

export function TaskList() {
    const { tasks, isLoading, error } = useTasks();
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks)
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error :{error.message} </div>;
    return (
        <div className="p-4">
            <FilterSearch />
            {
                filteredTasks.map(task => (
                    <div>
                        <p>TASK# {task.id}</p>
                        <p>Title: {task.title} </p>
                        <p>Priority: {task.priority}</p>
                        <p>Status: {task.status}</p>
                    </div>
                ))
            }
        </div>

    );
}