import React from "react";
import Button from "./Button";
const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-start gap-12">
        <div className="flex flex-col gap-8 items-start w-1/2">
          <h2 className="capitalize text-5xl text-accent-main font-medium">
            What is USD Bloom?
          </h2>
          <Button>Explore now</Button>
        </div>
        <div className="">
            <p className="text-secondary max-w-sm text-2xl leading-7 font-medium font-inter">USD Bloom is a yield-bearing stablecoin that helps your capital grow while staying pegged to the U.S. dollar.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
