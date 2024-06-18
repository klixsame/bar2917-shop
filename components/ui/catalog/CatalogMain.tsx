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
        return products.filter((product) => targetIds.includes(product.id));
    }, [products]);

    return (
        <section>
            <div className="flex-row items-center justify-between">
                {title && <h1>{title}</h1>}
                <Button
                    className="border-none pl-2 ml-5 w-60 flex items-center hover:text-background-button-card transition-all duration-300 ease-in-out transform hover:scale-105"
                    variant="bordered"
                    onPress={handleRandomProduct}
                >
                    <GiPerspectiveDiceSixFacesRandom className="mr-2 group-hover:text-background-button-card transition-all duration-300 ease-in-out transform hover:scale-125" size={20}/>
                    <p className="text-white text-sm transition-all group-hover:text-background-button-card duration-300 ease-in-out transform group-hover:scale-105">Рекомендованный товар</p>
                </Button>
            </div>
            <div className="flex-row flex-wrap gap-3.5">
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
