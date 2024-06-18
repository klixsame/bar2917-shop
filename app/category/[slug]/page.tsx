'use client';

import NotFound from '@/app/not-found';
import { CategoryService } from '@/app/services/category.service';
import { ProductService } from '@/app/services/product/product.service';
import { ICategory } from '@/app/types/category.interface';
import { IProduct } from '@/app/types/product.interface';
import MainLayout from '@/components/layouts/MainLayout';
import { Tab, Tabs } from '@nextui-org/tabs'; // Импортируем компоненты табов
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Catalog = dynamic(() => import('@/components/ui/catalog/Catalog'), { ssr: false });

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

async function fetchCategoryData(slug: string) {
  const { data: products } = await ProductService.getByCategory(slug);
  const { data: category } = await CategoryService.getBySlug(slug);
  return { products, category };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0); // Состояние для отслеживания активной вкладки

  useEffect(() => {
    async function fetchData() {
      try {
        const { products, category } = await fetchCategoryData(slug);
        setProducts(products);
        setFilteredProducts(products); // Устанавливаем начальный фильтр для всех продуктов
        setCategory(category);
      } catch (error) {
        setNotFound(true);
      }
    }
    fetchData();
  }, [slug]);

  const filterProducts = (type: string) => {
    if (type === 'all') {
      setFilteredProducts(products);
    } else if (type === 'classic') {
      setFilteredProducts(products.filter(product => product.image.includes('classicrolls')));
    } else if (type === 'baked') {
      setFilteredProducts(products.filter(product => product.image.includes('baked')));
    }
  };

  useEffect(() => {
    if (slug === 'rolls') {
      if (activeTab === 0) filterProducts('all');
      if (activeTab === 1) filterProducts('classic');
      if (activeTab === 2) filterProducts('baked');
    }
  }, [activeTab, products, slug]);

  return (
    <main>
      <MainLayout>
        {notFound ? (
          <NotFound />
        ) : (
          category && (
            <>
            <div className='flex-row justify-between'>
              <h1>{category.name}</h1>
                {slug === 'rolls' ? ( // Условный рендеринг для страницы роллов
                  <div className='flex flex-row items-center'>
                    <Tabs aria-label="Rolls Filter Tabs" 
                    selectedKey={activeTab.toString()} 
                    onSelectionChange={(key)  => setActiveTab(Number(key))}
                    classNames={{
                      tabList: "flex-row"
                    }}>
                      <Tab key="0" title="Все" />
                      <Tab key="1" title="Классические" />
                      <Tab key="2" title="Запеченные" />
                    </Tabs>
                  </div>
                ) : null}
              </div>
              <Catalog products={filteredProducts}  />
            </>
          )
        )}
      </MainLayout>
    </main>
  );
}
