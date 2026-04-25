import React from "react";
import Card from "./Card";

const Features = () => {
  return (
    <section className="w-full flex gap-6">
      <div className="rounded-3xl flex flex-row flex-3 bg-[#C5C8E4]">
        <div className="p-8 flex-2">
          <h4 className="text-2xl text-accent-main font-medium">
            Capital that grows
          </h4>
          <p className="text-secondary mt-32 pr-12 leading-5 text-m">
            Earn passive income as your stablecoins are deployed into
            high-performing DeFi protocols.
          </p>
        </div>
        <div className="flex-1 w-full">
          <img
            src="/images/features.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <Card
        title1="Always liquid,"
        title2="always stable"
        description="Stay fully dollar-pegged with instant access to your funds - no lockups or delays"
      />
      <Card
        title1="100%"
        title2="hands-free"
        description="No need to manage strategies manually. USD Bloom works in the background for you."
      />
    </section>
  );
};

export default Features;
