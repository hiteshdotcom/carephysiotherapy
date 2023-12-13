import "./cta.css";

import React from "react";

import CtaImage from "/public/contact.webp";
import { Button } from "flowbite-react";

const Cta = () => {
  return (
    <div>
      <div
        className="w-full dark:bg-gray-500 cta-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${CtaImage.src})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-7 py-20 mx-auto md:p-15">
          <h1 className="text-5xl antialiased font-semibold text-white text-center mb-8 dark:text-gray-100">
            Ready to take charge of your well-being?
          </h1>
          <p className="pt-2 pb-8 text-lg antialiased text-center text-slate-300 dark:text-gray-100">
            Lets kickstart your personalized journey to recovery. Book your
            appointment today and embrace a healthier, more active lifestyle.
            Your body will thank you!
          </p>
          <div className="flex flex-row justify-center ">
            {/* <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
            >
              Subscribe
            </button> */}
            <Button color="blue" className="py-1 px-2">
              Click here to Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;