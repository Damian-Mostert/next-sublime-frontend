'use server'

import services from '@/lib/services/server'

export async function generateMetadata({ params }) {
    return await new Promise(Resolve => {
        services.page
            .getMetaData({ slug: '/shop' })
            .then(
                response =>
                    response.success && [
                        Resolve(response.data),
                    ],
            )
    })
}

export default async function Layout({ children }) {
    return <>{children}</>
}
