import { ProductService } from "@/app/services/product/product.service";
import { IPageSlugParam, TypeParamSlug } from "@/app/types/page-params";
import Product from "@/components/templates/ProductPage/Product";

export async function generateStaticParams() {
    const response = await ProductService.getAll();
    const paths = response.products.map(product => ({ params: { slug: product.slug } }));
    return paths;
}

async function getProduct(params: TypeParamSlug) {
    const product = await ProductService.getBySlug(params?.slug as string);
    const similarProducts = await ProductService.getSimilar(product.id);
    return { product, similarProducts };
}

export default async function ProductPage({ params }: IPageSlugParam) {
    const { product, similarProducts } = await getProduct(params);
    return (
        <Product 
            initialProduct={product}
            similarProducts={similarProducts}
            slug={params.slug}
        />
    );
}
