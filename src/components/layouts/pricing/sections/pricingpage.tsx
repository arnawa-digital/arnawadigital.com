import { pricing_content } from "@/common";
import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import PageContainer from "@/components/elements/page-container";
import PricingCard from "@/components/elements/pricing-card";

const PricingPage = () => {
  return (
    <PageContainer className="min-h-screen pb-24 pt-6">
      <FadeIn.Container className="">
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="mb-4 flex flex-col items-center justify-between text-center">
            <h1 className="text-2xl font-semibold">Our Pricing Plans</h1>
            <h3 className="mt-1 max-w-80 text-lg text-gray-800">
              All plans include top design and developer talents, and project manager.
            </h3>
          </div>
        </FadeIn.Item>
        <div className="mt-12 flex flex-col gap-8 px-5 md:grid md:grid-cols-2 md:px-24">
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
