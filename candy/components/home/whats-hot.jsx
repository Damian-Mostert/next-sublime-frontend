import { Layout, Text } from "@vendor/components";

export default function WhatsHot({ pre, title, extra, paragraphs }) {
  return (
    <div className="w-full">
      <Layout>
        <Text pre={pre} text={title} extra={extra} paragraphs={paragraphs} />
      </Layout>
    </div>
  );
}
