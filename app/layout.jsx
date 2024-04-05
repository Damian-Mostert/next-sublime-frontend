'use server'

import { Header } from '@/extra/navigation/header/header'
import { BreadCrumb } from '@/extra/navigation/breadcrumb/breadcrumb'
import { Footer } from '@/extra/navigation/footer/footer'

import { Popup } from '@/lib/components'

import '@styles'

import services from '@/lib/services/server'

export async function generateMetadata({ params }) {
  return await new Promise(Resolve=>{
    services.page
      .getMetaData({slug:"/"})
      .then((response) => response.success && [Resolve(response.data)]);
  })  
}

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preload" as="image" href="/assets/image/bg.avif" />
            </head>
            <body>
                <Header />
                <BreadCrumb />
                <main>{children}</main>
                <Footer />
                <Popup />
            </body>
        </html>
    )
}
