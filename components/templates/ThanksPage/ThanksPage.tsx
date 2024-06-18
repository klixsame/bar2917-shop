import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ThanksPage = () => {
    useEffect(() => {
        const hasToastBeenShown = localStorage.getItem("toast_shown");
        if (!hasToastBeenShown) {
            toast.success('Ваш заказ можно посмотреть в истории заказов!');
            localStorage.setItem("toast_shown", "true");
        }
    }, []);

    return (
        <MainLayout>
            <section>
                <h1>Спасибо за заказ!</h1>
                <Link className="text-background-button-card hover:text-white" href='/order-history'>Перейти в историю заказов &gt;&gt;</Link>
            </section>
        </MainLayout>
    )
}

export default ThanksPage;
