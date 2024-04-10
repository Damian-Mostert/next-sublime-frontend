import { Layout, Text } from '@/vendor/components'

export function Heading({ data }) {
    return (
        <Layout type='split'>
            <Text {...data} />
            <Text {...data} />
        </Layout>
    )
}
