import formSignImg2 from '../../../../assets/signUp.jpg';
import { ErrorMessage } from '../../../shared/components/ErrorMessage/ErrorMessage';
import { LoadingButton } from '../../../shared/components/LoadingButton/LoadingButton';
import { Input } from '../../components/Input/Input';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useForm, type SubmitHandler } from "react-hook-form"

interface Inputs {
    email: string
    password: string
}

export function LoginPage() {
    const { login, error: authError, loading } = useAuthentication();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const user = { email: data.email, password: data.password, };

        login(user);
    }

    return (
        <section className='containerDefault'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login to post</h1>
                    <span>Log in and share your experiences</span>
                    <Input
                        placeholder="E-mail"
                        field="email"
                        errors={errors.email?.message}
                        register={register}
                        pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                        required
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        field="password"
                        errors={errors.password?.message}
                        register={register}
                        pattern={/^[A-Za-z\d!@#$%^&*()_\-+=[\]{}|\\;:'",.<>/?`~]{8,20}$/}
                        required
                    />
                    <LoadingButton isLoading={loading} text='Login'/>
                    <ErrorMessage errorText={authError} hasError={authError}/>
                </form>
                <section>
                    <img src={formSignImg2} alt={'Descriptive'} />
                </section>
            </div>
        </section>
    );
};
