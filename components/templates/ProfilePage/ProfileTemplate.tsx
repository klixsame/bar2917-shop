'use client'

import { useAuth } from "@/components/hocs/useAuth";
import MainLayout from "@/components/layouts/MainLayout";
import { useRouter } from "next/navigation";
import { FC } from "react";
import ProfilePage from "./ProfilePage";

const ProfileTemplate: FC = () => {
    const { user } = useAuth(); // Получите информацию о пользователе из вашего хука useAuth
    const router = useRouter();

    if(!user) {
        router.push('/');
        return null;
    }

    return (
        <MainLayout>
                <section>
                    <h1>Личный кабинет</h1>
                    <ProfilePage /> 
                </section>
        </MainLayout>
    )
}

export default ProfileTemplate;
