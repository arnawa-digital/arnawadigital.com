export async function generateStaticParams() {
  return [
    { title: "Web, Mobile, and Platform", slug: "website-mobile-and-platform" },
    { title: "Product and Design Builder", slug: "product-and-design" },
  ].map((item) => ({
    slug: item.slug,
  }));
}

const ServicesDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default ServicesDetail;
