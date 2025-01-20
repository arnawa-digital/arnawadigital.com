import { works_content } from "@/common";
import * as FadeIn from "@/components/elements/motion";
import PageContainer from "@/components/elements/page-container";
import WorksCard from "@/components/elements/works-card";

const WorksPage = () => {
  return (
    <PageContainer className="min-h-screen pb-24 pt-6">
      <FadeIn.Container className="">
        <FadeIn.Item>
          <div className="mb-4 flex flex-col items-center justify-between text-center">
            <h1 className="text-2xl font-semibold">Our Works</h1>
            <h3 className="mt-1 max-w-80 text-lg text-gray-800">
              A selection of the best projects crafted in Indonesia by Arnawa Digital.
            </h3>
          </div>
        </FadeIn.Item>
        <div className="mt-12 grid grid-cols-1 gap-8 px-5 md:grid-cols-2 md:px-24">
          {works_content.map((item, index) => {
            return (
              <FadeIn.Item key={index}>
                <WorksCard
                  tags={item.tags}
                  desc={item.desc}
                  href={`${item.slug}`}
                  imageSrc={`${item.assetsImage[0]}`}
                  title={item.title}
                />
              </FadeIn.Item>
            );
          })}
        </div>
      </FadeIn.Container>
    </PageContainer>
  );
};

export default WorksPage;
