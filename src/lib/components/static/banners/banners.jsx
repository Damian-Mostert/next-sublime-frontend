'use client'

import { Testimonials } from './testimonials/testimonials'

import { Heading } from './heading/heading'

export function Banner({ data }) {
    switch (data.type) {
        case 'Testimonials':
            return <Testimonials data={data.data} />
        case 'Heading':
            return <Heading data={data.data} />
    }
}
