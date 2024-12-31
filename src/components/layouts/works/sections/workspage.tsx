import { works_content } from "@/common";
import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import PageContainer from "@/components/elements/page-container";
import WorksCard from "@/components/elements/works-card";
const WorksPage = () => {
  return (
    <PageContainer className="pt-6 pb-24 min-h-screen">
      <FadeIn.Container className="">
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="flex flex-col text-center items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Our Works</h1>
            <h3 className="text-gray-800 text-lg mt-1 max-w-80">
              A selection of the best projects crafted in Indonesia by Arnawa
              Digital.
            </h3>
          </div>
        </FadeIn.Item>
        <div className="grid grid-cols-1 md:grid-cols-2 px-24 gap-8 mt-12">
          {works_content.map((item, index) => {
            return (
              <FadeIn.Item key={index}>
                <WorksCard
                  tags={item.tags}
                  desc={item.desc}
                  href={`/${item.slug}`}
                  imageSrc={`${item.assetsImage[0]}`}
                  price=""
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
