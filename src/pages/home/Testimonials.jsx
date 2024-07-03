/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonial.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us </h2>

            <blockquote className="my-5 text-[#6A6868] leading-[30px] font-medium">
              “I had the pleasure of dining at Edible last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>

            {/* avatar */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar border-white ">
                  <div className="w-12 cursor-pointer ">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar border-white">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar border-white">
                  <div className="w-12 cursor-pointer">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder border-white">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="text-lg font-semibold text-black">
                  Customer Feedback
                </h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />{" "}
                  <span className="font-medium text-[#454545]">4.9</span>{" "}
                  <span className="font-medium text-[#6A6868]">
                    (18.6k Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
