import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useAuth } from "../../../contexts/AuthContext";
const loginSchema = z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
})
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })
    const { login } = useAuth();

    const onSubmit = (data: LoginFormData) => {
        login(data.email, data.password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
            <div>
                <Input
                    {...register('email')}
                    type="text"
                    placeholder="Email"
                    aria-invalid={`${errors.email ? 'true' : 'false'}`}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div>
                <Input
                    {...register("password")}
                    type="password"
                    placeholder="Mật khẩu"
                    aria-invalid={`${errors.password ? 'true' : 'false'}`}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <Button type="submit">Đăng nhập</Button>
        </form>
    );
}