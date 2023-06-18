import React, { useState } from "react";
import service1 from "../../../assets/h-python.svg";
import service2 from "../../../assets/services2.svg";
import service3 from "../../../assets/services3.svg";
import service4 from "../../../assets/services4.svg";
import service6 from "../../../assets/services6.svg";
import service7 from "../../../assets/services7.svg";
import service8 from "../../../assets/services8.svg";
import service9 from "../../../assets/services9.svg";
import service10 from "../../../assets/service-icon1.svg";
import service11 from "../../../assets/service-icon5.svg";
import service12 from "../../../assets/service-icon4.svg";
import service13 from "../../../assets/service-icon2.svg";
import service14 from "../../../assets/service-icon3.svg";
import service15 from "../../../assets/service-icon6.svg";
import Cards from "../Services/Cards";
import CardDetails from "./CardDetails";

const Services = () => {
  const cardDetails = [
    {
      cardDetailsId: "services_card_left1",
      cardHeading: "AI/ML/CV/ChatGPT",
      cardDesc:
        "Automate business operations with our tailor-made AI/ML/ChatGPT solutions to save time, reduce errors and improve efficiency — freeing up your resources to focus on profit-making decisions while enjoying increased accuracy & productivity.",
    },
    {
      cardDetailsId: "services_card_left2",
      cardHeading: "Web Application Development",
      cardDesc: "Scalable web product development at any stage and ongoing support after launch.",
    },
    {
      cardDetailsId: "services_card_left3",
      cardHeading: "Mobile App Development",
      cardDesc:
        "Consultation on updating existing mobile applications and development of apps that look and perform great on both iOS and Android.",
    },
    {
      cardDetailsId: "services_card_left4",
      cardHeading: "Cloud Services (DevOps/Cybersecurity)",
      cardDesc:
        "Let’s eliminate vulnerabilities and fill loopholes to stop unforeseen cyberattacks with InvoZone’s cover-all cybersecurity services. It’s an “evil genius vs. ethical genius war” — and we have got experience, years of it!",
    },
    {
      cardDetailsId: "services_card_left5",
      cardHeading: "Game/Metaverse Dev",
      cardDesc:
        "Developing a conceptual game is a maverick's job, and game developers at InvoZone clearly know the art of creating magical products that match your players’ vision and preferences. Are you ready to launch powerful gameplays?",
    },
    {
      cardDetailsId: "services_card_left6",
      cardHeading: "Blockchain Development",
      cardDesc:
        "Become a part of a trustless and borderless distributed network with InvoBlox’s real-world blockchain consultancy and development services.",
    },
  ];
  const [changeData, SetChangeData] = useState("services_card_left1");
  const handleActiveCard = (cardId) => {
    // SetChangeData(cardId);
    console.log(cardId);
  };

  return (
    <div className='services mt-10'>
      <div className='container'>
        {/* Heading */}
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='row'>
              <h2 className='text-center'>
                Software
                <span> Consulting & Development Services...</span>
              </h2>
              <p className='text-center py-3 mb-5'>
                ...with the perfect blend of technology, expertise and innovation.
              </p>
            </div>
          </div>
        </div>
        {/* Services Wrapper Section */}
        <div className='row'>
          {/* Services Wrapper - Left Section */}

          <div className='col-md-6'>
            <div className='row g-5'>
              <div className='col-md-4'>
                <Cards
                  cardText='AI/ML/CV/ChatGPT'
                  cardImage={service10}
                  cardId='services_card_left1'
                  onClickCard={handleActiveCard}
                />
              </div>
              <div className='col-md-4'>
                <Cards
                  cardText='Web Application Development'
                  cardImage={service11}
                  cardId='services_card_left2'
                  onClickCard={handleActiveCard}
                />
              </div>
              <div className='col-md-4'>
                <Cards
                  cardText='Mobile Application Development'
                  cardImage={service12}
                  cardId='services_card_left3'
                  onClickCard={handleActiveCard}
                />
              </div>
              <div className='col-md-4'>
                <Cards
                  cardText='AI/ML/CV/ChatGPT'
                  cardImage={service13}
                  cardId='services_card_left4'
                  onClickCard={handleActiveCard}
                />
              </div>
              <div className='col-md-4'>
                <Cards
                  cardText='Web Application Development'
                  cardImage={service14}
                  cardId='services_card_left5'
                  onClickCard={handleActiveCard}
                />
              </div>
              <div className='col-md-4'>
                <Cards
                  cardText='Mobile Application Development'
                  cardImage={service15}
                  cardId='services_card_left6'
                  onClickCard={handleActiveCard}
                />
              </div>
            </div>
          </div>
          {/* Services Wrapper - Right Section */}
          <div className='col-md-6 p-5'>
            <div className='row gap-4'>
              <CardDetails
                cardDetailsId='services_card_left1'
                cardDetailsHeading={cardDetails.cardHeading}
                cardDetailsDesc={cardDetails.cardDesc}
              />
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='d-flex align-items-center'>
                  <div className='p-4'>
                    <img src={service1} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service2} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service3} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service4} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service4} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service6} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service7} alt='' />
                  </div>
                  <div className='p-4'>
                    <img src={service8} alt='' />
                  </div>
                  <div className='p-5'>
                    <img src={service9} alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='row py-3'>
              <a href='' className='btn-brand-secondary'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
