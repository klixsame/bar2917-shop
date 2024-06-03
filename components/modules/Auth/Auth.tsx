'use client'

import { IEmailPassword } from "@/app/store/user/user.interface";
import { useActions } from "@/components/hocs/useActions";
import { useAuth } from "@/components/hocs/useAuth";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/input/Field";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthRedirect } from "./useAuthRedirect";
import { validEmail } from "./valid-email";

const Auth = () => {
    useAuthRedirect()

    const {isLoading} = useAuth()

    const {login, register} = useActions()

    const [type, setType] = useState<'login' | 'register'>('login')

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: "onChange"
    })

    const onSubmit:SubmitHandler<IEmailPassword> = (data) => {
        if (type === 'login') {
            login(data)
        } else {
            register(data)
        }

        reset()
    }

    return (
        <section>
            <div className="container__auth">
                <form onSubmit={handleSubmit(onSubmit)} className="form form__auth">
                    <h1 className="text-primary">{type === 'login' ? 'Войти' : 'Регистрация'}</h1>
                    <p>Введите данные, чтобы {type === 'login' ? 'авторизоваться' : 'зарегистрироваться'}</p>

                    {isLoading ? ( <Loader /> ) : (<>

                    <Field {...formRegister('email',{
                        required: 'Почта обязательна',
                        pattern: {
                            value: validEmail,
                            message: 'Неверный формат почты'
                        }
                    })}
                        placeholder="Почта"
                        error={errors.email?.message}
                    />
                    <Field {...formRegister('password',{
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 4,
                            message: 'Минимальная длина пароля - 4 символа'
                        },
                    })}
                        type="password"
                        placeholder="Пароль"
                        error={errors.password?.message}
                    />
                    <Button type="submit">{type === 'login' ? 'Авторизоваться' : 'Зарегистрироваться'}</Button>

                    <div>
                        <button type="button" onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                        {type === 'login' ? 'Регистрация' : 'Войти'}
                        </button>
                    </div>
                    </>)}
                </form>
            </div>
        </section>
    )
}

export default Auth;