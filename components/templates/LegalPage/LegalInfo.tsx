import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";

const LegalInfo = () => {
    return(
        <MainLayout>
            <div className="delivery__info">
                <h1>Правовая информация</h1>
                <Link href='/legal/offer'>Публичная оферта</Link>
            </div>
        </MainLayout>
    )
}

export default LegalInfo;