import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="squares">
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className="tablet1:mb-[26px] desktop1:mb-0 desktop2:mb-[46px]"
                modalTitle={content.texts.features.card1.title}
                modalContent={
                  <div className="text-paragraph3">
                    <p className="mb-[20px]">
                      {content.texts.features.card1.description}
                    </p>
                    {content.texts.features.card1.modal}{" "}
                    {/* conteúdo do modal */}
                    <p className="mb-[20px]">
                      Quer saber mais? Clique abaixo 👇
                    </p>
                    <Button
                      aria-label={content.texts.about.ctaButtonAriaLabel}
                      label={content.texts.about.ctaButtonText}
                      buttonLink={content.texts.links.ctaWhatsapp}
                      animation={false}
                      className="hover:scale-105 max-w-[300px]"
                      icon={<FaWhatsapp size={24} />}
                    />
                  </div>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
                modalTitle={content.texts.features.card2.title}
                modalContent={
                  <div className="text-paragraph3">
                    <p className="mb-[20px]">
                      {content.texts.features.card2.description}
                    </p>
                    {content.texts.features.card2.modal}{" "}
                    {/* conteúdo do modal */}
                    <p className="mb-[20px]">
                      Quer saber mais? Clique abaixo 👇
                    </p>
                    <Button
                      aria-label={content.texts.about.ctaButtonAriaLabel}
                      label={content.texts.about.ctaButtonText}
                      buttonLink={content.texts.links.ctaWhatsapp}
                      animation={false}
                      className="hover:scale-105 max-w-[300px]"
                      icon={<FaWhatsapp size={24} />}
                    />
                  </div>
                }
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <div
              className="hidden desktop1:h-[730px] desktop2:h-[770px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            ></div>
          </MotionDivDownToUp>
          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp className=" flex items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className="tablet1:mb-[26px] desktop1:mb-0 desktop2:mb-[46px]"
                modalTitle={content.texts.features.card3.title}
                modalContent={
                  <div className="text-paragraph3">
                    <p className="mb-[20px]">
                      {content.texts.features.card3.description}
                    </p>
                    {content.texts.features.card3.modal}{" "}
                    {/* conteúdo do modal */}
                    <p className="mb-[20px]">
                      Quer saber mais? Clique abaixo 👇
                    </p>
                    <Button
                      aria-label={content.texts.about.ctaButtonAriaLabel}
                      label={content.texts.about.ctaButtonText}
                      buttonLink={content.texts.links.ctaWhatsapp}
                      animation={false}
                      className="hover:scale-105 max-w-[300px]"
                      icon={<FaWhatsapp size={24} />}
                    />
                  </div>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp className=" flex flex-col items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card4.icon}
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
                modalTitle={content.texts.features.card4.title}
                modalContent={
                  <div className="text-paragraph3">
                    <p className="mb-[20px]">
                      {content.texts.features.card4.description}
                    </p>
                    {content.texts.features.card4.modal}{" "}
                    {/* conteúdo do modal */}
                    <p className="mb-[20px]">
                      Quer saber mais? Clique abaixo 👇
                    </p>
                    <Button
                      aria-label={content.texts.about.ctaButtonAriaLabel}
                      label={content.texts.about.ctaButtonText}
                      buttonLink={content.texts.links.ctaWhatsapp}
                      animation={false}
                      className="hover:scale-105 max-w-[300px]"
                      icon={<FaWhatsapp size={24} />}
                    />
                  </div>
                }
              ></IconFeatureCard>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
