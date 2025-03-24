import React from "react";
import banner from "../../public/Banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl mt-5 margin-top-20 container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="w-full  md:w-1/2">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold ">
              {" "}
              Hello!Welcome To Our Shop..{" "}
              <span className="text-blue-700">Explore Our Collection</span>
            </h1>
            <p className="text-.8xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus officiis iure, labore qui sit doloremque earum,
              quaerat iste ipsum accusamus quisquam voluptatem veniam architecto
              aspernatur reprehenderit! Nobis ab veniam, sunt rerum nam natus
              voluptatibus impedit dicta quas minus, consequuntur magni
              laudantium praesentium eos est enim labore fugiat error numquam.
              Fuga.
            </p>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            
          </div>
          <div><button className="btn btn-secondary">Secondary</button></div>
        </div>
        <div className="w-full md:w-1/2">
            <img src={banner} alt="" />
        </div>
        <div className="w-full  md:w-1/2">Right</div>
      </div>
    </>
  );
};

export default Banner;
