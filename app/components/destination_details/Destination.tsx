import React from "react";
import { motion } from "framer-motion";
import d1 from "../../assets/destination/d1.png";
import d2 from "../../assets/destination/d2.png";
import d3 from "../../assets/destination/d3.png";
import d4 from "../../assets/destination/d4.png";
import d5 from "../../assets/destination/d5.png";
import d6 from "../../assets/destination/d6.png";
import d7 from "../../assets/destination/d7.png";
import ceo from "../../assets/aboutPerson.png";
import Image from "next/image";

const Destination = () => {
  return (
    <div className="container px-2 md:px-0 text-fontGray pb-[60px] md:pb-[140px]">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-secondary text-center py-4  px-14 md:px-[256px] leading-[150%] text-white mb-10 mt-8 md:mt-20 rounded-[8px]"
        >
          <h2 className="quick_sand text-2xl md:text-[40px] font-bold">
            Maldives
          </h2>

          <p className="nunito text-xl md:text-2xl">With global Boonyacht</p>
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-10">
        {/* overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="p-4 rounded-[8px] overflow-hidden shadow-lg"
        >
          <Image
            src={d1}
            alt="overview"
            width={400}
            height={400}
            className="w-full h-[400px] md:h-[540px] object-cover rounded-[8px]"
          />
          <motion.div className="">
            <h3 className="quick_sand font-bold text-2xl md:text-[32px] text-fontColor mt-4 mb-2">
              Overview
            </h3>
            <span className="quick_sand font-light text-base md:text-2xl">
              7 days in the maldives
            </span>
            <p className=" nunito text-base md:text-2xl leading-[150%] mt-4 md:mt-6">
              The Maldives is a haven of turquoise lagoons, white sandy beaches,
              and vibrant coral reefs. With luxurious overwater villas,
              world-class diving, and serene sunsets, it’s the ultimate escape
              for romance, relaxation, and adventure. Experience paradise like
              never before.
            </p>
          </motion.div>
        </motion.div>
        {/* day-1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:p-5 rounded-[8px] overflow-hidden shadow-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <span className="quick_sand text-2xl md:text-[40px] font-bold py-3 px-6 bg-white rounded-[8px] absolute left-5 top-5">
              Day 1
            </span>
            <Image
              src={d2}
              alt="day 1"
              width={400}
              height={400}
              className="w-full h-[400px] md:h-[540px] object-cover rounded-[8px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 px-2 grid grid-cols-1 md:grid-cols-2 items-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="quick_sand font-bold text-2xl md:text-[32px] text-fontColor">
                Malé
              </h3>
              <p className=" nunito text-base md:text-2xl leading-[150%] mt-4">
                Malé, the capital of the Maldives, blends cosmopolitan charm
                with natural beauty. Surrounded by white sand beaches and lush
                flora, it’s the perfect starting point for yacht adventures.
                Dive the Maldives Victory wreck, explore vibrant coral gardens,
                and visit the historic Hukuru Miskiy Mosque. Malé offers rich
                culture and stunning landscapes, making it a must-see for yacht
                charterers.
              </p>
            </motion.div>
            <Image src={d5} alt="Day 1" className="rounded-[8px] w-full" />
          </motion.div>
        </motion.div>
        {/* day-2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:p-5 rounded-[8px] overflow-hidden shadow-lg"
        >
          <div className="relative">
            <span className="quick_sand text-2xl md:text-[40px] font-bold py-3 px-6 bg-white rounded-[8px] absolute right-5 top-5">
              Day 2
            </span>
            <Image
              src={d3}
              alt="day 2"
              width={400}
              height={400}
              className="w-full h-[400px] md:h-[540px] object-cover rounded-[8px]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 px-2 grid grid-cols-1 md:grid-cols-2 items-center gap-6"
          >
            <Image src={d6} alt="Day 1" className="rounded-[8px] w-full" />
            <div>
              <h3 className="quick_sand font-bold text-2xl md:text-[32px] text-fontColor">
                Felidhoo
              </h3>
              <span className="quick_sand font-bold text-base md:text-xl text-fontColor mt-2">
                Distance from last location:45nm
              </span>
              <p className=" nunito text-base md:text-2xl leading-[150%] mt-4">
                Located in the Vaavu Atoll, Felidhoo is a small island famous
                for its diving and snorkeling. With 26 deep current channels, or
                &quot;kundus,&quot; divers can encounter sharks, turtles, and
                manta rays year-round. The Pioneer Wreck, sunk in 1958, is a top
                attraction, now home to vibrant marine life. Felidhoo offers an
                unforgettable underwater adventure.
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* day-3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:p-5 rounded-[8px] overflow-hidden shadow-lg"
        >
          <div className="relative">
            <span className="quick_sand text-2xl md:text-[40px] font-bold py-3 px-6 bg-white rounded-[8px] absolute left-5 top-5">
              Day 3
            </span>
            <Image
              src={d4}
              alt="Day 3"
              width={400}
              height={400}
              className="w-full h-[400px] md:h-[540px] object-cover rounded-[8px]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 px-2 grid grid-cols-1 md:grid-cols-2 items-center gap-6"
          >
            <div>
              <h3 className="quick_sand font-bold text-2xl md:text-[32px] text-fontColor">
                Bandos
              </h3>
              <span className="quick_sand font-bold text-base md:text-xl text-fontColor mt-2">
                Distance from last location:45nm
              </span>
              <p className=" nunito text-base md:text-2xl leading-[150%] mt-4">
                Just a two-hour boat ride from Malé, Bandos is a peaceful haven
                perfect for those seeking a relaxed retreat. This charming
                island is encircled by pristine white sands, swaying coconut
                palms, and an incredible coral reef, making it a serene paradise
                for nature lovers and beachgoers alike. With its laid-back vibe,
                Bandos offers the ideal setting to unwind, explore vibrant
                marine life, or simply enjoy the beauty of the Maldives in
                peace.
              </p>
            </div>
            <Image src={d7} alt="Day 3" className="rounded-[8px] w-full" />
          </motion.div>
        </motion.div>
        {/* google map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[400px] md:h-[540px] shadow-lg rounded-[8px] overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902145481606!2d90.41251877486648!3d23.75087767869395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfe8b48206df%3A0x6bf20e9e9b6fd7cd!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
        {/* CEO details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-[676px] p-5 shadow-lg rounded-[8px] overflow-hidden"
        >
          <div className="bg-[#F5F5F5] rounded-[8px] overflow-hidden flex md:flex-row flex-col items-center md:gap-[56px] gap-5">
            <div className="">
              <Image
                src={ceo}
                width={500}
                height={400}
                alt="CEO"
                className="object-cover w-full h-[458px]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-[336px] md:block flex flex-col items-center justify-center mb-5 md:mb-0"
            >
              <h2 className="quick_sand font-bold text-xl text-fontColor">
                Kaarel Maide
              </h2>
              <p className="nunito font-medium my-2">CEO | Yacht Broker</p>
              <p className="nunito font-medium">kaarel@boonyachts.com</p>
              <p className="nunito font-medium mt-2">+447833459067</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Destination;
