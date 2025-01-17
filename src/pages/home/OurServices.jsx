import React from "react";

const OurServices = () => {
  const serviceLists = [
    {
      id: 1,
      title: "Catering",
      des: "Delight your guests with our flavors and  presentation",
      img: "/images/home/services/icon1.png",
    },
    {
      id: 2,
      title: "Fast delivery",
      des: "We deliver your order promptly to your door",
      img: "/images/home/services/icon2.png",
    },
    {
      id: 3,
      title: "Online Ordering",
      des: "Explore menu & order with ease using our Online Ordering n",
      img: "/images/home/services/icon3.png",
    },
    {
      id: 4,
      title: "Gift Cards",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
      img: "/images/home/services/icon4.png",
    },
  ];
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left md-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services </h2>

            <p className="my-5 text-[#6A6868] leading-[30px] font-medium">
              At Edible, we are driven by a passion for creating unforgettable
              dining experiences. We specialize in sweet dishes, expertly
              blending culinary artistry with warm hospitality to satisfy your
              sweet tooth.
            </p>
            <button className="btn bg-puce text-white px-8 py-3 rounded-full border-none">
              Explore
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-puce cursor-pointer hover:border hover:border-puce transition-all duration-200"
              >
                <img src={service.img} alt="" className=" mx-auto" />
                <h5 className="pt-3 font-semibold text-puce">
                  {" "}
                  {service.title}
                </h5>
                <p className="text-[#E7B5BF]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
