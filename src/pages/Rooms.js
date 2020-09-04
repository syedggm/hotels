import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

function Rooms() {
  return (
    <>
      <Hero hero="roomsHero ">
        <Banner title="Our Rooms" subtitle=" ">
          <Link to="/" className="btn-primary">
            Rturn To Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}

export default Rooms;
