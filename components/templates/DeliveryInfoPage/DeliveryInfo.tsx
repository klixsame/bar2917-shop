import MainLayout from "@/components/layouts/MainLayout";

const DeliveryInfo = () => {
    return(
        <MainLayout>
            <div className="delivery__info">
                <h1>Доставка и оплата</h1>
                <p>Доставка — от <b>100 рублей</b></p>
                <br></br>
                <p>Минимальная сумма заказа — <b>500 рублей</b></p>
                <br></br>
                <p className="font-bold">Наш суши-бар принимает заказы по 2-ум локациям:</p>
                <br></br>
                <p className="mb-3 text-orange-300">- г. Санкт-Петербург, проспект Ветеранов, д. 200</p>
                <p className="mb-3 text-orange-300">- Ленинградкая обл., гп. Новоселье, Красносельское шоссе, д. 6</p>
                {/* <p>Подробная информация о зонах доставки указана на интерактивной карте</p> */}
                <br></br>
                <p className="font-bold mb-3">Способы оплаты:</p>
                <p className="mb-3 text-orange-300">- Самовывоз</p>
                <p className="mb-3 text-orange-300">- Курьеру</p>
            </div>
        </MainLayout>
    )
}

export default DeliveryInfo;