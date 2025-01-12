import { pricing_content } from "@/common";
import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import PageContainer from "@/components/elements/page-container";
import PricingCard from "@/components/elements/pricing-card";

const PricingPage = () => {
  return (
    <PageContainer className="pt-6 pb-24 min-h-screen">
      <FadeIn.Container className="">
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="flex flex-col text-center items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Our Pricing Plans</h1>
            <h3 className="text-gray-800 text-lg mt-1 max-w-80">
              All plans include top design and developer talents, and project
              manager.
            </h3>
          </div>
        </FadeIn.Item>
        <div className="flex flex-col md:grid md:grid-cols-2 px-5 md:px-24 gap-8 mt-12">
          {pricing_content.slice(0, 2).map((item, index) => {
            return (
              <FadeIn.Item key={index}>
                <PricingCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  price_description={item.price_description}
                  free_trial_href={item.free_trial_href}
                  service_title={item.service_title}
                  feature_list={item.feature_list}
                  className={index === 2 ? "col-span-2" : "col-span-1"}
                />
              </FadeIn.Item>
            );
          })}
          <PricingCard
            title={pricing_content[2].title}
            description={pricing_content[2].description}
            price={pricing_content[2].price}
            price_description={pricing_content[2].price_description}
            free_trial_href={pricing_content[2].free_trial_href}
            service_title={pricing_content[2].service_title}
            feature_list={pricing_content[2].feature_list}
            className={"col-span-2"}
          />
        </div>
      </FadeIn.Container>
    </PageContainer>
  );
};

export default PricingPage;
