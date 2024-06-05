import { ProductService } from "@/app/services/product/product.service"
import { IPageSlugParam, TypeParamSlug } from "@/app/types/page-params"


export async function generateStaticParams() {
    const response = await ProductService.getAll()

    const paths = response.products.map(product => {
        return {
            params: { slug: product.slug }
        }
    })

    return paths
}

async function getProduct(params: TypeParamSlug) {
    const product = await ProductService.getBySlug(params?.slug as string)
    
    const { data: similarProducts } = await ProductService.getSimilar(product.data.id)

    
    return {
        product,
        similarProducts
    }
}

export default async function ProductPage({params}: IPageSlugParam) {

    const { product } = await getProduct(params)

    return (
        <div></div>
        // <Product 
        // initialProduct={product}
        // similarProducts={similarProducts}
        // slug={params.slug}
        // />
    )

}