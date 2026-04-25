import React from "react";

const Cases = () => {
  return (
    <section className="w-full pb-20">
      <div className="flex justify-between items-start w-full gap-20">
        <div className="flex-1">
        <p className="text-secondary leading-5 text-sm">
            USD Bloom in Action
          </p>
          <h2 className="capitalize text-5xl text-accent-main font-medium">
            use cases
          </h2>
          <p className="text-secondary leading-5 text-base font-inter pr-50 mt-4 mb-4">
            USD Bloom offers a variety of use cases for developers, businesses treasuries seeking secure and profitable stablecoin integrations.
          </p>
            <p className="font-pixels">$180M+ stablecoin volume</p>
            <p>85+ integrations</p>
            <p>8% avg yield</p>
        </div>
        <div className="flex-1 bg-white p-8 pb-0 rounded-3xl">
          <h4 className="text-2xl text-accent-main font-medium">
            Business
          </h4>
          <p className="text-secondary leading-5 text-base font-inter mt-4 mb-4">
            Boost user engagement by offering USD Bloom, a secure flat-backed stablecoins with high yields, allowing your customers to earn effortlessly on your platform.
          </p>
          <a href="#" className="text-secondary font-inter">
            <i className="ri-arrow-right-long-line bg-[#C5C8E4] p-1 rounded-full text-2xl font-extralight mr-4 text-secondary"></i>
            Learn more</a>
            <img src="/images/cases_image.png" alt="Villa" className="w-[80%] object-cover object-center m-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Cases;
