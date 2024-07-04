import React from "react";
import Image from "next/image";
import Img1 from "../public/img/adoption/img1.png";

const Driving = () => {
  return (
    <section className="bg-adoption bd-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        <div className="flex-1 mb-6 lg:mb-0">
          <Image src={Img1} width={542} height={560} alt="" />
        </div>
        <div className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
          <h2 className="h2 mb-6">Experience the thrill of driving with us.</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet velit at turpis ultricies convallis. Cras pellentesque leo
            sed tincidunt molestie. Mauris auctor pulvinar neque rhoncus
            tincidunt. Aenean orci ante, condimentum at imperdiet id, feugiat in
            erat.
          </p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc">
          <li>Wide Range of Cars</li>
            <li>Financing Options</li>
            <li>Test Drive Today</li>
          </ul>
          <button className="btn btn-primary mx-auto lg:mx-0">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Driving;
