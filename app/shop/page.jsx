//generate static;

'use client'

import { useEffect, useState } from 'react'

import Static from '@/extra/components/static'
import services from '@services'
import Loading from '@/app/loading'

export default function Shop() {
    const [body, setBody] = useState(null)
    useEffect(() => {
        services.page
            .getShopPage({slug:'/'}, { fire: false })
            .then(response => response.success && setBody(response.data))
    }, []);

    return body ? (
        <main>
            {body.map((section, index) => {
                return <Static key={index} {...section} data={JSON.parse(section.data)}/>
            })}
        </main>
    ) : (
        <Loading />
    )
}
