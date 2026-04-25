import React from "react";

const Logos = () => {
  return (
    <section className="w-full py-12">
      <div className="flex gap-56 items-center max-w-7xl mx-auto">
        <div className="flex-1">
          <p className="text-secondary leading-5 text-m">
            Backed by the best companies and visionary angles.
          </p>
        </div>
        <div className="flex-3 flex justify-between items-center">
          <img src="/images/albemarle_logo.png" alt="" className="h-32 object-contain"/>
          <img src="/images/bank_of_america_logo.png" alt="" className="h-28 object-contain"/>
          <img src="/images/axon_logo.png" alt="" className="h-4 object-contain"/>
          <img src="/images/baker_hughes_logo.png" alt="" className="h-4 object-contain object-center"/>
          <img src="/images/ametek_logo.png" alt="" className="h-6 object-contain object-center"/>
        </div>
      </div>
    </section>
  );
};

export default Logos;
