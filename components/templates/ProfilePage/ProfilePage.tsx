import { UserService } from "@/app/services/user.service";
import { useActions } from "@/components/hocs/useActions";
import { useAuth } from "@/components/hocs/useAuth";
import { useProfile } from "@/components/hocs/useProfile";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/button/Button";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import InputMask from "react-input-mask-next";

const ProfilePage = () => {
    const { profile } = useProfile();
    const { isLoading } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        setFormData({
            name: profile.name || "",
            phone: profile.phone || "",
            email: profile.email || ""
        });
    }, [profile]);

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        toast.promise(
            UserService.updateProfile(formData), 
            {
                loading: 'Сохранение...',
                success: 'Профиль успешно обновлен!',
                error: 'Ошибка при обновлении профиля!'
            }
        ).catch((error) => {
            console.error('Ошибка при обновлении профиля:', error);
        });
    };

    const { logout } = useActions();

    return (
        <div className="w-1/2">
            <form className="h-72 rounded-lg shadow-sm" onSubmit={handleSubmit}>
                {isLoading ? (<Loader />) : (
                    <>
                        <Input
                            className="input-custom mb-3"
                            type="text"
                            label="Ваше имя"
                            size="md"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            errorMessage="Неверное имя"
                        />

                        <InputMask
                            mask="+7 (999) 999-99-99"
                            value={formData.phone}
                            onChange={handleChange}
                        >
                            {
                                <Input
                                    className="input-custom mb-3"
                                    type="text"
                                    label="Ваш телефон"
                                    name="phone"
                                    size="md"
                                    errorMessage="Телефон"
                                />
                            }
                        </InputMask>

                        <Input
                            className="input-custom mb-3"
                            type="text"
                            label="Почта"
                            name="email"
                            value={formData.email}
                            size="md"
                            isReadOnly
                            errorMessage="Почта"
                        />

                        <Button type="submit">Сохранить</Button>
                    </>
                )}
            </form>
            <div className="w-1/4">
                <button className="mt-7 text-sm w-12 ml-1 transition duration-300 hover:text-background-button-card" type="button" onClick={logout}>Выйти</button>
            </div>
        </div>
    );
};

export default ProfilePage;
