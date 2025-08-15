import { TaskList } from "../features/tasks/components/TaskList";
import MainLayout from "../layouts/MainLayout";

export default function Tasks() {
    return (
        <MainLayout>
            <TaskList />
        </MainLayout>
    );
}