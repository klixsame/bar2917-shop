'use client'
import { IEmailPassword } from "@/app/store/user/user.interface";
import { useActions } from "@/components/hocs/useActions";
import { useAuth } from "@/components/hocs/useAuth";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/button/Button";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useAuthRedirect } from "./useAuthRedirect";

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

    const [value, setValue] = React.useState("");

    const [value1, setValue1] = React.useState("");

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validatePassword = (value1: string) => /^[a-zA-Z0-9]{4,}$/.test(value1);
  
    const isInvalid = React.useMemo(() => {
      if (value === "") return false;
  
      return validateEmail(value) ? false : true;
    }, [value]);

    const isInvalid1 = React.useMemo(() => {
        if (value1 === "") return false;

        return validatePassword(value1) ? false : true;
      }, [value1]); // Зависимость от значения, чтобы useMemo пересчитывалось при изменении значения
      

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <section className="flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="h-96 rounded-lg bg-background-card shadow-sm p-9">
                    <h1 className="text-white mt-2 mb-2">{type === 'login' ? 'Войти' : 'Регистрация'}</h1>
                    <p className="mb-5">Введите данные, чтобы {type === 'login' ? 'авторизоваться' : 'зарегистрироваться'}</p>
                    {isLoading ? ( <Loader /> ) : (<>

                        <Input {...formRegister('email')} 
                        value={value} 
                        onValueChange={setValue} 
                        className="input-custom mb-1"
                        type="email" 
                        label="Введите почту" 
                        color={isInvalid ? "danger" : "default"} 
                        isInvalid={isInvalid} 
                        size="sm"
                        errorMessage="Неверный формат почты" />

                        <Input {...formRegister('password')} 
                        value={value1} 
                        onValueChange={setValue1} 
                        className="input-custom mb-3"
                        type={isVisible ? "text" : "password"}
                        label="Введите пароль" 
                        color="default"
                        size="sm"
                        isInvalid={isInvalid1} 
                        errorMessage="Пароль не менее 4 символов"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                            </button>
                        }
                        />
                    <Button type="submit">{type === 'login' ? 'Авторизоваться' : 'Зарегистрироваться'}</Button>

                    <div className="justify-center flex-row">
                        <button className="mt-5 text-sm w-24" type="button" onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                        {type === 'login' ? 'Регистрация' : 'Войти'}
                        </button>
                    </div>
                    </>)}
                
                </form>

        </section>
        
    )
}

export default Auth;