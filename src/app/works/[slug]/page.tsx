import { works_content } from "@/common";

export async function generateStaticParams() {
  return works_content.map((item) => ({
    slug: item.slug,
  }));
}

const WorksDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default WorksDetail;
