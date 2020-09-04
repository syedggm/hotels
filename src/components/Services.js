import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, autem.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, autem.",
      },
      {
        icon: <FaHiking />,
        title: "Free Unlimited",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, autem.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Delivery",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, autem.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
