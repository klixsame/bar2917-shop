import MainLayout from "@/components/layouts/MainLayout";

const DeliveryInfo = () => {
    return(
        <MainLayout>
            <div className="delivery__info">
                <h1>Доставка и оплата</h1>
                <p>Доставка — от 100 рублей</p>
                <p>Минимальная сумма заказа — 500 рублей</p>
                <p>Доставка осуществляется только в пределах гп. Новоселье!</p>
                <p>Подробная информация о зонах доставки указана на интерактивной карте</p>
                <p>Способы оплаты на сайте:</p>
                <p>— Банковской картой онлайн</p>
                <p>— СБП онлайн</p>
            </div>
        </MainLayout>
    )
}

export default DeliveryInfo;