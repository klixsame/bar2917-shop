import { IProduct } from "@/app/types/product.interface";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, useMemo } from "react";
import toast from "react-hot-toast";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import ProductItem from "./product-item/ProductItem";

interface ICatalog {
    products: IProduct[];
    title?: string;
}

const CatalogMain: FC<ICatalog> = ({ products = [], title }) => {
    const router = useRouter();

    const handleRandomProduct = () => {
        if (products.length === 0) return;

        const excludedNames = ['Васаби', 'Имбирь', 'Соевый соус', 'Сырный соус', 'Спайси соус', 'Палочки'];
        const filteredProducts = products.filter(product => !excludedNames.includes(product.name));

        if (filteredProducts.length === 0) {
            toast.error('Нет доступных продуктов для случайного выбора.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * filteredProducts.length);
        const randomProduct = filteredProducts[randomIndex];

        const promise = new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (randomProduct) {
                    resolve();
                } else {
                    reject();
                }
            }, 2000);
        });

        toast.promise(
            promise,
            {
                loading: 'Подбор наилучшего варианта...',
                success: `Поздравляем, вам для заказа рекомендован - ${randomProduct.name}!`,
                error: 'Не удалось выбрать товар.',
            },
            {
                className: 'text-center'
            }
        ).then(() => {
            router.push(`/product/${randomProduct.slug}`);
        });
    };

    // Выбираем товары с заданными идентификаторами
    const displayedProducts = useMemo(() => {
        const targetIds = [1, 2, 15, 28, 41, 38, 43, 51, 64, 73, 86, 104];
        console.log('Incoming products:', products);
        console.log('Products IDs:', products.map(p => p.id));
        const filtered = products.filter((product) => targetIds.includes(product.id));
        console.log('Filtered products:', filtered);
        return filtered;
    }, [products]);

    return (
        <section className="media-768">
            <div className="flex-row items-center justify-between">
                {title && <h1>{title}</h1>}
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-5 media-480-gap">
            <Button className="card__template bg-transparent border-2 border-card-border rounded-lg animate-scaleIn" onPress={handleRandomProduct}>
                <GiPerspectiveDiceSixFacesRandom className="mr-2 group-hover:text-background-button-card transition-all duration-300 ease-in-out transform hover:scale-125" size={120}/>
            </Button>
                {displayedProducts.length ? (
                    displayedProducts.map((product) => <ProductItem key={product.id} product={product} />)
                ) : (
                    <div>Здесь нет продуктов</div>
                )}
            </div>
        </section>
    );
};

export default CatalogMain;
