import { Input } from "../../../components/Input";

export default function TaskForm() {
    return (
        <form>
            <div className="form-container">
                <label htmlFor="title">Title</label>
                <Input id="title" placeholder="Type title..." />
            </div>
        </form>
    );
}