'use client'

import {
    Layout,
    Md,
    Lg,
    Button,
    Popup,
    Image,
    Link,
    Input,
    Img,
    A,
} from '@/lib/components'
import { usePathname } from 'next/navigation'

const links = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Shop',
        href: '/shop',
    },
    {
        label: 'About',
        href: '/info/about',
    },
    {
        label: 'Contact us',
        href: '/info/contact-us',
    },
]

export function Footer() {
    const pathname = usePathname()
    return (
        <footer className="bg-white w-full ">
            <div className="w-full flex justify-center pt-8">
                <Img
                    alt="logo"
                    src="/app-icon.svg"
                    width={100}
                    height={100}
                    className="p-4 h-20 h-20"
                />
            </div>
            <Layout>
                <div className="w-full flex justify-center pb-8">
                    {links.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                href={item.href}
                                label={item.label}
                                variant={`header${
                                    pathname == item.href ? '-active' : ''
                                }`}
                            />
                        )
                    })}
                </div>
            </Layout>
            <div className="p-2 w-full bg-black text-white text-center">
                @Copyright of somesite.co.za
            </div>
        </footer>
    )
}
