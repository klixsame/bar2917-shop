'use client'

import DeliveryInfo from '@/components/templates/DeliveryInfoPage/DeliveryInfo'
import Meta from '@/components/ui/meta'

export default function DeliveryInfoPage() {
  return (
    <>
      <Meta 
        title="Доставка суши и роллов Bar2917 | Условия доставки и оплаты"
        description="Условия доставки Bar2917 🚗 Быстрая доставка суши и роллов 🍣 Зоны доставки 📍 Минимальная сумма заказа 💰 Способы оплаты 💳 Время доставки ⏰ Закажите прямо сейчас!"
        keywords="доставка суши, условия доставки роллов, зона доставки бар2917, стоимость доставки суши, время доставки роллов, оплата заказа суши, минимальный заказ роллов"
      />
      <DeliveryInfo />
    </>
  )
}