'use client'

import NotFound from "@/app/not-found";
import { useAuth } from "@/components/hocs/useAuth";
import MainLayout from "@/components/layouts/MainLayout";
import { FC } from "react";
import ProfilePage from "./ProfilePage";

const ProfileTemplate: FC = () => {
    const { user } = useAuth(); // Получите информацию о пользователе из вашего хука useAuth

    return (
        <MainLayout>
            {user ? (
                <section>
                    <h1>Личный кабинет</h1>
                    <ProfilePage /> 
                </section>
            ) : (
                <NotFound />
            )}
        </MainLayout>
    )
}

export default ProfileTemplate;
