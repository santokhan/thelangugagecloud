import FeatureItem from "./featureitem";
import Des from "./des";
import Title from "./title";
import Price from "./price";
import GetStarted from "./getstarted";
import JoinUs from "../../global/joinus";
import SeeAllFeature from "./features";

export default function Pricing(
  props = {
    starter: 29,
    company: 99,
    enterprise: 499,
  }
) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl shadow-2xl shadow-gray-200 xl:p-8">
          <Title>Starter</Title>
          <Des>Best option for personal use & for your next project.</Des>
          <Price price="29"></Price>
          <GetStarted to="/pricing" />
          <ul role="list" className="mb-8 space-y-4 text-left">
            <FeatureItem>Individual configuration</FeatureItem>
            <FeatureItem>No setup, or hidden fees</FeatureItem>
            <FeatureItem>
              Team size: <span className="font-semibold">1 developer</span>
            </FeatureItem>
            <FeatureItem>
              Premium support: <span className="font-semibold">6 months</span>
            </FeatureItem>
            <FeatureItem>
              Free updates: <span className="font-semibold">6 months</span>
            </FeatureItem>
          </ul>
          <SeeAllFeature />
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl shadow-2xl shadow-gray-200 xl:p-8">
          <Title>Company</Title>
          <Des>Relevant for multiple users, extended & premium support.</Des>
          <Price price="99" />
          <GetStarted to="/pricing" />
          <ul role="list" className="mb-8 space-y-4 text-left">
            <FeatureItem>Individual configuration</FeatureItem>
            <FeatureItem>No setup, or hidden fees</FeatureItem>
            <FeatureItem>
              Team size: <span className="font-semibold">10 developer</span>
            </FeatureItem>
            <FeatureItem>
              Premium support: <span className="font-semibold">24 months</span>
            </FeatureItem>
            <FeatureItem>
              Free updates: <span className="font-semibold">24 months</span>
            </FeatureItem>
          </ul>
          <SeeAllFeature />
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl shadow-2xl shadow-gray-200 xl:p-8">
          <Title>Enterprise</Title>
          <Des>
            Best for large scale uses and extended redistribution rights.
          </Des>
          <Price price="499" />
          <GetStarted to="/pricing" />
          <ul role="list" className="mb-8 space-y-4 text-left">
            <FeatureItem>Individual configuration</FeatureItem>
            <FeatureItem>No setup, or hidden fees</FeatureItem>
            <FeatureItem>
              Team size: <span className="font-semibold">100+ developer</span>
            </FeatureItem>
            <FeatureItem>
              Premium support: <span className="font-semibold">36 months</span>
            </FeatureItem>
            <FeatureItem>
              Free updates: <span className="font-semibold">36 months</span>
            </FeatureItem>
          </ul>
          <SeeAllFeature />
        </div>
      </div>
    </div>
  );
}
