'use client'

import MainLayout from "@/components/layouts/MainLayout";
import { FC } from "react";
import ProfilePage from "./ProfilePage";

const ProfileTemplate: FC = () => {

    
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