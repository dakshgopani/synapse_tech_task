import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShopPage from "./Shop";
import ServicesPage from "./Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopPage/>
      <ServicesPage/>
    </div>
  );
}
