import { Layout, Text } from '@/lib/components'

export function Heading({ data }) {
    return (
        <Layout type='split'>
            <Text {...data} />
            <Text {...data} />
        </Layout>
    )
}
