const phoneNumber = "62895710149040";
const couponCode = "RnJlZSBUcmlhbCBDb3Vwb24gQXJuYXdhIERpZ2l0YWw=";
const message = `Coupon: ${couponCode} Successfully Claimed\nI want to order Standard Package Website ✨`;

const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
  message
)}`;

const pricing_content = [
  {
    title: "Standard",
    description:
      "Perfect for small businesses with occasional awareness needs.",
    price: "429,000 IDR",
    price_description: "Billed per project",
    free_trial_href: whatsappLink,
    service_title: "Our Standard Services",
    feature_list: [
      "Free Domain",
      "Unlimited Design Request",
      "Maximum 5 Pages",
      "Max 10 Revisions",
      "Advanced SEO",
      "Social Media Integrations",
      "Basic Stock Images",
      "Shared Hosting",
      "Customer Support",
      "7 Days Average Delivery Time",
    ],
  },
  {
    title: "Premium",
    description: "Perfect for growing businesses with regular goals needs",
    price: "749,000 IDR",
    price_description: "Billed per project",
    free_trial_href: whatsappLink,
    service_title: "Our Premium Services",
    feature_list: [
      "Free Domain",
      "Unlimited Design Request",
      "Unlimited Pages",
      "Unlimited Revisions",
      "Advanced SEO",
      "Social Media Integration",
      "Premium Stock Images",
      "Dedicated Hosting",
      "24/7 Priority Support",
      "5 Days Average Delivery Time",
    ],
  },
  {
    title: "Custom Enterprise",
    description: "Tailored for businesses with unique and advanced needs",
    price: "From 1,299,000 IDR",
    price_description: "Custom pricing based on requirements",
    free_trial_href: whatsappLink,
    service_title: "Our Custom Services",
    feature_list: [
      "Free Domain",
      "Unlimited Design and Dev Request",
      "Unlimited Pages",
      "Unlimited Revisions",
      "Advanced SEO",
      "Advanced Integrations",
      "Premium Stock Images",
      "E-commerce Ready",
      "Dedicated Hosting",
      "Analytics Reports",
      "24/7 Priority Support",
      "5 Days Average Delivery Time",
    ],
  },
];

export default pricing_content;
