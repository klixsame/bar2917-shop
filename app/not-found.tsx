import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function NotFound() {
    return (
      <MainLayout>
        <h1>Страница не найдена</h1>
        <p>
          <Link href='./' className='text-primary'>
            View all products
          </Link>
        </p>
      </MainLayout>
    )
  }
  