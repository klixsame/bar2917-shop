'use client'
import MainLayout from "@/components/layouts/MainLayout"
import AdminList from "@/components/ui/admin/admin-list/AdminList"
import { FC } from "react"
import { useAdminProducts } from "./useAdminProducts"

const Products: FC = () => {
    const { data, isFetching, mutate } = useAdminProducts()

    return (
        <MainLayout>
            <h1>Все товары</h1>
            <AdminList
            isLoading={isFetching}
            listItems={data}
            removeHandler={mutate}
            />
        </MainLayout>
    )
}

export default Products