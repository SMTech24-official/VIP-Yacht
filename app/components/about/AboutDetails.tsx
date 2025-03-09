"use client";
import React from "react";
import Heading from "../common/Heading";
import about from "../../assets/aboutPerson.png";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutDetails = () => {
  return (
    <div className="container px-2 md:px-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-secondary text-center py-5 px-10 austin text-xl md:text-[32px] font-medium leading-[150%] text-white mb-[60px] md:mb-[120px] mt-20 rounded-[8px]"
      >
        At Boon Yachts, we partner with the finest in the world to ensure
        exceptional quality and unforgettable experiences for our clients.
      </motion.div>
      <div className="md:px-[100px] px-4 text-justify md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="font-medium austin text-3xl md:text-[32px] leading-[150%] mb-4">
            Who We Are
          </h2>
          <p className="sans leading-[160%] text-[#606060]">
            Boon Yachts is your gateway to extraordinary adventures on the
            water, offering a seamless blend of luxury, expertise, and
            world-class service. Specializing in luxury yacht charters, sales,
            and management, we pride ourselves on delivering tailored
            experiences that exceed expectations. With a team of seasoned
            professionals and a deep love for the sea, Boon Yachts ensures every
            journey is nothing short of perfection, whether you&apos;re
            exploring pristine coastlines or investing in your dream yacht.
            Experience the ultimate in yachting sophistication with Boon Yachts,
            where passion meets precision on the open water.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="font-medium austin text-3xl md:text-[32px]  leading-[150%] mb-4">
            Our Mission
          </h2>
          <p className="sans leading-[160%] text-[#606060]">
            At Boon Yachts, we are dedicated to transforming your yachting
            aspirations into extraordinary journeys. Our commitment to
            excellence drives us to deliver personalized, seamless services that
            embody sophistication, reliability, and luxury. Whether you&apos;re
            a seasoned yachtsman or embarking on your first voyage, we aim to
            redefine your yachting experience, making it effortless, accessible,
            and unforgettable.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="font-medium austin text-3xl md:text-[32px]  leading-[150%] mb-4">
            What We Offer
          </h2>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Luxury Yacht Charters
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              At Global Boon Yacht, we excel in creating bespoke yacht charter
              experiences, offering exclusive access to a carefully selected
              fleet of world-class yachts. Whether you&apos;re planning a
              romantic escape, a memorable family adventure, or a sophisticated
              corporate retreat, our dedicated team crafts every detail to
              perfection, ensuring a seamless and extraordinary journey on the
              water.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Yacht Sales
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              For those seeking to own a yacht, we provide expert guidance every
              step of the way. From finding the ideal vessel to negotiating the
              best deal, we ensure a smooth and transparent purchasing
              experience tailored to your needs.
            </p>
          </div>
          <div className="">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Yacht Management
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              Owning a yacht is more than a purchase—it&apos;s a lifestyle and
              an investment. Our comprehensive yacht management services are
              designed to protect and enhance your asset. From crew coordination
              and meticulous maintenance to regulatory compliance and financial
              management, we handle every detail. Enjoy the freedom of yacht
              ownership while we ensure its value, performance, and your
              satisfaction are always at their peak.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="font-medium austin text-3xl md:text-[32px] leading-[150%] mb-4">
            Why Choose Boon Yachts?
          </h2>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Unmatched Expertise:
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              With years of experience as ex-crew members, we specialize in both
              technical maintenance and luxury service. Trust us, you&apos;re in
              expert hands
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Personalised Approach:
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              We dedicate ourselves to truly understanding your distinct desires
              and preferences. By tailoring our services to your vision, we
              create a personalized experience that perfectly aligns with your
              aspirations, ensuring every detail exceeds your expectations.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Global Reach:
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              We believe in working with trusted partners who share our
              commitment to excellence. That&apos;s why we only recommend the
              finest options, ensuring you receive the best service possible.
              With an extensive network of partners and a fleet that spans the
              globe, we offer unforgettable experiences at the world&apos;s most
              coveted destinations.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Commitment to Excellence:
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              At Boon Yachts, we prioritize quality and professionalism,
              ensuring every experience exceeds your expectations.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=""
        >
          <h2 className="font-medium austin text-3xl md:text-[32px]  leading-[150%] mb-4">
            Our Values
          </h2>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Customer Service: 
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              Our commitment to client satisfaction and safety is unwavering. By
              prioritizing your needs, we build strong, lasting relationships
              founded on trust and dependability. With us, you&apos;re not just
              a client—you&apos;re part of a journey where your peace of mind
              comes first.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Eco- conscious:
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              Boon Yachts is dedicated to shaping a sustainable future for the
              yachting industry. We champion eco-friendly practices and
              innovative green technologies, ensuring that our vessels
              contribute to cleaner seas and a healthier planet. Join us in
              embracing a luxurious yet responsible approach to yachting.
            </p>
          </div>
          <div className="">
            <h4 className="text-lg font-medium austin leading-[160%] mb-2">
              Integrity and Transparency:
            </h4>
            <p className="sans leading-[160%] text-[#606060]">
              We are committed to transparency and integrity in every aspect of
              our business. With a foundation built on open communication and
              ethical practices, we ensure that every decision and interaction
              reflects our dedication to trust and honesty.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="md:my-[120px] my-[60px] px-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <Heading
            className="mb-2 text-2xl"
            headingTxt="Begin Your Yachting Adventure with Us"
          />
          <p className="sans leading-[160%] text-[#606060]">
            Start your yachting adventure with us. From choosing the perfect
            yacht to customizing it to your needs, we provide expert guidance
            for a seamless and luxurious experience on the water.
          </p>
        </motion.div>
        <div className="details grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-6 mb-10">
          <div className="left">
            <p className="sans leading-[150%] text-[#606060] text-justify md:text-left">
              With a deep-rooted passion for the open seas and an extensive
              maritime background, Kaarel brings unmatched expertise to the
              yachting world. His hands-on experience as a crew member, combined
              with a keen eye for detail, allows him to perfectly match clients
              with their ideal yacht. A natural problem-solver, Kaarel ensures a
              seamless, stress-free experience for every client.
            </p>
            <p className="sans leading-[150%] text-[#606060] text-justify md:text-left">
              Kaarel&apos;er career as a lawyer adds another layer of value to
              his work, with strong financial, legal, and negotiation skills.
              His thorough market knowledge and wide-reaching industry network
              make him an invaluable partner for clients looking to buy, sell,
              or charter yachts. Committed to excellence, Kaarel offers a
              personalized, transparent service, ensuring a smooth and
              successful journey into yacht ownership or brokerage.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="right"
          >
            <div className=" rounded-[8px] w-full">
              <Image
                src={about}
                alt="Polina Yatsenko"
                height={400}
                width={500}
                className="rounded-[8px]  w-full"
              />
            </div>
            <div className="flex items-center justify-center flex-col mt-4">
              <h3 className="austin font-medium text-xl leading-[150%]">
                Polina Yatsenko
              </h3>
              <p className="sans text-[#606060] leading-[150%]">
                Charter Broker | Charter Manager
              </p>
              <p className="sans text-[#606060] leading-[150%]">
                polina@boonyachts.com
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="details grid items-center justify-center md:grid-cols-2 grid-cols-1 gap-6"
        >
          <div className="left">
            <div className=" rounded-[8px]">
              <Image
                src={about}
                alt="Polina Yatsenko"
                height={400}
                width={500}
                className="rounded-[8px] w-full"
              />
            </div>
            <div className="flex items-center justify-center flex-col mt-4">
              <h3 className="austin font-medium text-xl leading-[150%]">
                Polina Yatsenko
              </h3>
              <p className="sans text-[#606060] leading-[150%]">
                Charter Broker | Charter Manager
              </p>
              <p className="sans text-[#606060] leading-[150%]">
                polina@boonyachts.com
              </p>
            </div>
          </div>
          <div className="right">
            <p className="sans leading-[150%] text-[#606060] text-justify md:text-left">
              With a deep passion for the open seas and a rich maritime
              background, Kaarel combines a wealth of knowledge and hands-on
              experience to guide clients in their yachting journey. Having
              worked as a crew member and a lawyer, Kaarel&apos;rtise spans not
              only yachts but also financial and legal aspects, ensuring every
              transaction is seamless. His meticulous attention to detail and
              natural problem-solving ability make him the perfect partner for
              anyone looking to buy, charter, or sell a yacht. Kaarel&apos;stry
              connections and market insights further solidify his position as a
              trusted advisor for all things yachting.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDetails;
