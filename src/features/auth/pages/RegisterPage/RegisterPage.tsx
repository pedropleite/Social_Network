import formSignImg2 from '../../../../assets/signUp.jpg';
import { ErrorMessage } from '../../../shared/components/ErrorMessage/ErrorMessage';
import { LoadingButton } from '../../../shared/components/LoadingButton/LoadingButton';
import { Input } from '../../components/Input/Input';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useForm, type SubmitHandler } from "react-hook-form"

export interface Inputs {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export function RegisterPage() {
    const { createUser, error: authError, loading } = useAuthentication();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const user = {
            displayName: data.name,
            email: data.email,
            password: data.password
        }

        createUser(user)
    }

    function validateConfirmPassword(value: string) {
        const passwordValue = watch("password")

        if (value !== passwordValue) return "Passwords do not match";

        return undefined
    }

    return (
        <section className='containerDefault'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register to post</h1>
                    <span>Create your user and share your experiences</span>
                    <Input
                        placeholder="Username"
                        field="name"
                        errors={errors.name?.message}
                        register={register}
                        pattern={/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/}
                        required
                    />
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
                    <Input
                        placeholder="Confirm Password"
                        type="password"
                        field="confirmPassword"
                        errors={errors.confirmPassword?.message}
                        register={register}
                        validate={validateConfirmPassword}
                        pattern={/^[A-Za-z\d!@#$%^&*()_\-+=[\]{}|\\;:'",.<>/?`~]{8,20}$/}
                        required
                    />
                    <LoadingButton isLoading={loading} text="Register"/>
                    <ErrorMessage hasError={authError} errorText={authError}/>
                </form>
                <section>
                    <img src={formSignImg2} alt="Registered" />
                </section>
            </div>
        </section>
    );
};
