'use client'

import { usePathname } from 'next/navigation'

import './breadcrumb.scss'
import { A } from '@/utils/components'

export function BreadCrumb() {
    const pathname = usePathname()
    let p = ''
    return (
        <nav className="breadcrumb">
            {pathname == '/' ? (
                <A href="/" className="breadcrumb-item">HOME</A>
            ) : (
                pathname.split('/').map((item, key) => {
                    p += item + '/'
                    return item ? (
                        <A href={p} className="breadcrumb-item" key={key}>
                            {item.replace(/-/g," ")}
                        </A>
                    ) : undefined
                })
            )}
        </nav>
    )
}
