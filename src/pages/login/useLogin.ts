import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUsername } from "../../store/useUsername";
import { loginSchema } from "../../schema/login";
import type { LoginFormData } from "./types";

export function useLogin() {
	const setUsername = useUsername((state) => state.setUsername);
	const navigate = useNavigate();

	function handleLogin(username: string) {
		setUsername(username);
		navigate("/");
	}

	const { handleSubmit, register, formState: { errors } } = useForm({
		resolver: zodResolver(loginSchema),
	});

	function onSubmit(data: LoginFormData) {
		console.log({ data });
    handleLogin(data.username)
	}

	return {
		// handleLogin,
    handleSubmit,
    register,
    errors,
    onSubmit
	};
}
