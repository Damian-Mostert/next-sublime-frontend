'use client'

import { Heading } from './heading/heading'

export function Banner({ data }) {
    switch (data.type) {
        case 'Heading':
            return <Heading data={data.data} />
    }
    return <></>;
}
