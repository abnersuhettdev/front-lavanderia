'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';

const schema = z.object({
	num_apt: z.string().min(3, 'Apartamento deve ter no minimo 3 números'),
	password: z.string().min(6, 'Senha deve conter pelo menos 6 caracteres'),
});

type UserProps = z.infer<typeof schema>;

export function FormLogin() {
	const form = useForm<UserProps>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<UserProps> = async (data) => {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
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

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mx-auto mb-0 mt-8 max-w-md space-y-4">
					<div>
						<label htmlFor="num_apt" className="sr-only">
							Número do Apartamento
						</label>

						<FormField
							control={form.control}
							name="num_apt"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											className="text-gray-950 placeholder:text-gray-400"
											type="string"
											placeholder="Número do apartamento"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											className="text-gray-950 placeholder:text-gray-400"
											type="password"
											placeholder="Número do apartamento"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex items-center justify-between">
						<p className="text-sm text-gray-500">
							Não tem conta?
							<br />
							<a className="underline" href="">
								Criar conta
							</a>
						</p>

						<Button type="submit" disabled={form.formState.isSubmitting}>
							Entrar
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
