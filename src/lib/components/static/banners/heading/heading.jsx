import { Layout, Text } from '@/utils/components'

export function Heading({ data }) {
    return (
        <Layout type='split'>
            <Text {...data} />
            <Text {...data} />
        </Layout>
    )
}
