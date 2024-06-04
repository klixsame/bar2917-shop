'use client'
import NotFound from '@/app/not-found';
import { CategoryService } from '@/app/services/category.service';
import { ProductService } from '@/app/services/product/product.service';
import { ICategory } from '@/app/types/category.interface';
import { IProduct } from '@/app/types/product.interface';
import MainLayout from '@/components/layouts/MainLayout';
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
  const [category, setCategory] = useState<ICategory | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { products, category } = await fetchCategoryData(slug);
        setProducts(products);
        setCategory(category);
      } catch (error) {
        setNotFound(true);
      }
    }
    fetchData();
  }, [slug]);

  return (
    <main>
      <MainLayout>
        {notFound ? (
          <NotFound/>
        ) : (
          category && <Catalog products={products} title={category.name} />
        )}
      </MainLayout>
    </main>
  );
}
