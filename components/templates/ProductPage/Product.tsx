'use client'
import { FolderNameForImage } from "@/app/constants/app.constants";
import { ProductService } from "@/app/services/product/product.service";
import { IProduct } from "@/app/types/product.interface";
import MainLayout from "@/components/layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import Image from 'next/image';
import AddToCartInline from "./product-information/AddToCartInline";

interface IProductPage {
    initialProduct: IProduct;
    similarProducts: IProduct[];
    slug?: string;
}

const SERVER_URL_FOR_IMAGE = process.env.SERVER_URL_IMAGE as string;

export default function Product({
    initialProduct,
    similarProducts,
    slug = '',
}: IProductPage) {
    const queryKey = ['get product', initialProduct.id];
    const queryFn = () => ProductService.getBySlug(slug);

    const { data: productData, isLoading, error } = useQuery({
        queryKey,
        queryFn,
        initialData: initialProduct,
        enabled: !!slug
    });

    const product = productData ?? initialProduct;
    const imageUrl = `${SERVER_URL_FOR_IMAGE}/${FolderNameForImage}/${product.image}`;

    return (
        <MainLayout>
            <section className="mt-6">
                <div className="flex-row w-11/12 h-90 bg-background-card border border-card-border p-3 rounded-lg">
                    <div className="w-4/12">
                        <Image width={500} height={254} src={imageUrl} alt={product.name} className="rounded-lg" />
                    </div>
                    <div className="ml-3 flex-wrap w-8/12 justify-between">
                        <div className="h-10/12">
                            <h2 className="text-2xl">{product.name}</h2>
                            <div className="w-full">
                                <p className="mt-2 break-words leading-4">{product.description}</p>
                            </div>
                            <span className="mt-2">{product.weight} г.</span>
                        </div>
                        <div className="h-2/12 w-full flex-row justify-between">
                            <div className="w-3/12">
                                <h2 className="text-2xl">{product.price} ₽</h2>
                                <span>Полная цена</span>
                            </div>
                            <div className="w-64">
                                <AddToCartInline product={product}></AddToCartInline>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
