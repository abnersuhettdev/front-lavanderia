'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const schema = z.object({
	num_apt: z.string().min(3, 'Apartamento deve ter no minimo 3 números'),
	password: z.string().min(6, 'Senha deve conter pelo menos 6 caracteres'),
});

type UserProps = z.infer<typeof schema>;

export function FormLogin() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm<UserProps>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<UserProps> = async (data) => {
		console.log(JSON.stringify(data));
		await new Promise((resolve, reject) => setTimeout(resolve, 3000));
	};

	// const [user, setUser] = useState<UserProps>({ num_apt: '', password: '' });

	// function handleChange(ev: ChangeEvent<HTMLInputElement>) {
	// 	const fieldValue = ev.target.value;

	// 	const fieldName = ev.target.name;

	// 	setUser((state) => ({ ...state, [fieldName]: fieldValue }));
	// }

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl">Fazer Login</h1>

				<p className="mt-4  text-zinc-100">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque
					error neque ipsa culpa autem, at itaque nostrum!
				</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mx-auto mb-0 mt-8 max-w-md space-y-4">
				<div>
					<label htmlFor="num_apt" className="sr-only">
						Número do Apartamento
					</label>

					<div className="relative">
						<Input
							{...register('num_apt')}
							className="text-gray-950 placeholder:text-gray-400"
							// onChange={handleChange}
							type="string"
							// value={user.num_apt}
							name="num_apt"
							placeholder="Número do apartamento"
						/>
						{errors.num_apt && <p role="alert">{errors.num_apt?.message}</p>}
					</div>
				</div>

				<div>
					<label htmlFor="password" className="sr-only">
						Password
					</label>

					<div className="relative">
						<Input
							{...register('password')}
							className="text-gray-950 placeholder:text-gray-400"
							// onChange={handleChange}
							// value={user.password}
							type="password"
							name="password"
							placeholder="Senha"
						/>
						{errors.password && (
							<p className="text-red-500" role="alert">
								{errors.password?.message}
							</p>
						)}

						<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
						</span>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<p className="text-sm text-gray-500">
						Não tem conta?
						<br />
						<a className="underline" href="">
							Criar conta
						</a>
					</p>

					<Button type="submit" disabled={isSubmitting}>
						Entrar
					</Button>
				</div>
			</form>
		</div>
	);
}
