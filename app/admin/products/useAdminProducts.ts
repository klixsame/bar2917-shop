
import { ProductService } from "@/app/services/product/product.service";
import { IListItem } from "@/components/ui/admin/admin-list/admin-list.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAdminProducts = () => {
    const { data, isFetching, refetch } = useQuery({
        queryKey: ['getAdminProducts'], 
        queryFn: () => ProductService.getAll(),
        select: data => data.products.map((product): IListItem => {
            return {
                id: product.id,
                viewUrl: `/product/${product.slug}`,
                editUrl: `/admin/product/edit/${product.id}`,
                items: [
                    product.image,
                    product.category.name,
                    product.name
                    
                ]
            }
        })
    })

    const { mutate } = useMutation({
        mutationKey: ['deleteProduct'],
        mutationFn: (id: number) => ProductService.delete(id),
        onSuccess: () => {
            toast.success('Продукт успешно удален')
            refetch()
        }
    })

    return {
        mutate, 
        data,
        isFetching
    }
}