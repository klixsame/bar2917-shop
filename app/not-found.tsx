import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <h1>Страница не найдена</h1>
        <p>
          <Link href='./' className='text-primary'>
            View all products
          </Link>
        </p>
      </div>
    )
  }
  