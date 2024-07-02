import React from "react";
import Navbar from "./Navbar";
import "../Style/Home.css";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
const dmash = require("../img/dmash.png");
const munja = require("../img/munja.png");
const sanjeev = require("../img/sanjeev.png");
const sarban = require("../img/sarban.png");

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <Hero />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mx-20 p-5 shadow-sm">
          {/* Item 1 */}
          <div className="flex flex-col items-center mx-5 py-4 shadow-2xl bg-white rounded-lg w-300 h-350">
            <img
              src={dmash}
              alt="Pa dmashree Vd. Rajesh Kotecha"
              className="rounded-full w-48 h-48 md:w-72 md:h-72 object-fit"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">
                Pa dmashree Vd. Rajesh Kotecha
              </h2>
              <p className="text-lg font-normal">Secretary</p>
              <p className="text-lg font-normal">Ministry of Ayush</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center py-4  mx-5 shadow-2xl bg-white rounded-lg w-300 h-350">
            <img
              src={munja}
              alt="Dr.Munjapara Mahendrabhai"
              className="rounded-full w-48 h-48 md:w-72 md:h-72 object-fit"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Dr.Munjapara Mahendrabhai</h2>
              <p className="text-lg font-normal">
                Hon'ble Minister of State Ministry of Ayush
              </p>
              <p className="text-lg font-normal">
                Ministry of Women and Child Development
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center py-4 mx-5 shadow-2xl bg-white rounded-lg w-300 h-350">
            <img
              src={sanjeev}
              alt="Prof. Sanjeev S harma"
              className="rounded-full w-48 h-48 md:w-72 md:h-72 object-fit"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Prof. Sanjeev S harma</h2>
              <p className="text-lg font-normal">Vice Chancellor</p>
              <p className="text-lg font-normal">NIA, Jaipur</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center py-4 mx-5 shadow-2xl bg-white rounded-lg w-300 h-350">
            <img
              src={sarban}
              alt="Shri Sarbananda Sonowal"
              className="rounded-full w-48 h-48 md:w-72 md:h-72 object-fit"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">Shri Sarbananda Sonowal</h2>
              <p className="text-lg font-normal">
                Hon'ble Cabinet Minister Ministry of Ayush
              </p>
              <p className="text-lg font-normal">
                Ministry of Ports, Shipping and Waterways
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
