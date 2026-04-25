import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-[url(/images/hero_bg.png)] bg-top bg-cover rounded-3xl">
      <div className="max-w-3lg mx-auto px-6 flex flex-col items-center gap-4 text-center py-20">
        <i className="ri-shining-2-fill text-shadow-[3px_2px_0px_#00000026] text-4xl inline-block mr-2 rotate-8"></i>
        <h1 className="capitalize text-5xl text-accent-main font-medium">
          Where money grows
        </h1>
        <p className="text-secondary max-w-sm text-base leading-5 font-inter">
          A programmable, utility-driven stable token designed for native value
          accrual and seamless integration into DeFi
        </p>
      <Button>Try it now</Button>
      </div>
    </section>
  );
};

export default Hero;
