import React from "react";
import Banner from "../components/home/banner.js";
import OurExperts from "../components/home/ourExperts.js";
import Aboutvero from "../components/home/aboutvero.js";
import Verobenefits from '../components/home/verobenefits.js'
import Customers from "../components/home/customers.js";
import Research from "../components/home/research.js";
const Home = () => {
  return (
    <>
      <Banner />
      <OurExperts />
      <Aboutvero/>
      <Verobenefits/>
      <Customers/>
      <Research/>
    </>
  );
};
export default Home;
