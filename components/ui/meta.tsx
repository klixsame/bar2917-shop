'use client'

import { usePathname } from "next/navigation"
import { FC, PropsWithChildren, useEffect } from "react"

interface ISeo {
    title: string
    description?: string
    image?: string
    keywords?: string
}

const siteName = 'Bar2917'
export const titleMerge = (title: string) => `${title} | ${siteName}`

const Meta: FC<PropsWithChildren<ISeo>> = ({
    title, 
    description = 'Лучший суши-бар - Bar2917. Свежие и вкусные роллы, суши, сеты. Быстрая доставка.',
    image = '/img/og-image.png',
    keywords = 'суши, роллы, доставка суши, японская кухня, бар2917, bar2917, сеты роллов',
    children
}) => {
    const pathname = usePathname()
    const currentUrl = `${process.env.APP_URL}${pathname}`

    useEffect(() => {
        // Обновляем заголовок документа
        document.title = titleMerge(title)

        // Обновляем мета-теги
        const metaTags = {
            'description': description,
            'keywords': keywords,
            'og:title': titleMerge(title),
            'og:description': description,
            'og:image': image,
            'og:url': currentUrl,
            'og:type': 'website',
            'og:site_name': siteName,
            'og:locale': 'ru_RU',
            'twitter:card': 'summary_large_image',
            'twitter:title': titleMerge(title),
            'twitter:description': description,
            'twitter:image': image,
            'twitter:url': currentUrl,
        }

        // Обновляем или создаем мета-теги
        Object.entries(metaTags).forEach(([name, content]) => {
            if (!content) return

            // Проверяем существующие мета-теги
            let meta = document.querySelector(`meta[property="${name}"]`) ||
                      document.querySelector(`meta[name="${name}"]`)

            if (!meta) {
                meta = document.createElement('meta')
                if (name.startsWith('og:') || name.startsWith('twitter:')) {
                    meta.setAttribute('property', name)
                } else {
                    meta.setAttribute('name', name)
                }
                document.head.appendChild(meta)
            }

            meta.setAttribute('content', content)
        })
    }, [title, description, image, keywords, currentUrl])

    return <>{children}</>
}

export default Meta