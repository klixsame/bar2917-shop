import { UserService } from "@/app/services/user.service";
import { useActions } from "@/components/hocs/useActions";
import { useAuth } from "@/components/hocs/useAuth";
import { useProfile } from "@/components/hocs/useProfile";
import Loader from "@/components/ui/Loader";
import ButtonCustom from "@/components/ui/button/ButtonCustom";
import { Input, Link } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { FaHistory } from "react-icons/fa";
import InputMask from "react-input-mask-next";

const ProfilePage = () => {
    const { profile } = useProfile();
    const { isLoading } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });
    const [allPhones, setAllPhones] = useState<{ id: number; phone: string }[]>([]);

    useEffect(() => {
        setFormData({
            name: profile.name || "",
            phone: profile.phone || "",
            email: profile.email || ""
        });

        const fetchAllPhones = async () => {
            try {
                const response = await UserService.getAllPhones();
                setAllPhones(response.data);
            } catch (error) {
                console.error('Ошибка при получении телефонов:', error);
            }
        };
        fetchAllPhones();
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

        // Проверяем, есть ли введенный телефон в списке всех телефонов
        const isDuplicatePhone = allPhones.some(item => item.phone === formData.phone);

        if (isDuplicatePhone) {
            toast.error('Этот телефон уже используется');
            return;
        }

        // Проверяем, заполнено ли поле имени
        if (!formData.name.trim()) {
            toast.error('Пожалуйста, введите ваше имя');
            return;
        }

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
        <section>
            <div className="flex-row">
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
                                    errorMessage="Имя обязательно для заполнения"
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

                                <ButtonCustom type="submit">Сохранить</ButtonCustom>
                            </>
                        )}
                    </form>
                    <div className="w-1/4">
                        <button className="mt-7 text-sm w-12 ml-1 transition duration-300 hover:text-background-button-card" type="button" onClick={logout}>Выйти</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <Link href="/order-history">
                        <div className="w-52 h-40 rounded-lg shadow-sm bg-background-card ml-10 border border-background-button-card p-5 justify-between">
                            <h3 className="text-xl font-semibold text-white">История заказов</h3>
                            <FaHistory size={25} color="white" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
