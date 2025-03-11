import React from "react";
import { motion } from "framer-motion";

const Crew2 = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {/* left */}
        <div className="left flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[480px] bg-[url(./assets/management_crew1.png)] bg-no-repeat bg-cover bg-top rounded-[8px] overflow-hidden"
          >
            <div className="absolute left-5 bottom-5">
              <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
                Harry Larson
              </h3>
              <h4 className="uppercase nunito font-medium text-white">
                Captain
              </h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[325px] bg-[url(./assets/management_crew1.png)] bg-no-repeat bg-cover bg-top rounded-[8px] overflow-hidden"
          >
            <div className="absolute left-5 bottom-5">
              <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
                David Taylor
              </h3>
              <h4 className="uppercase nunito font-medium text-white">
                engineer
              </h4>
            </div>
          </motion.div>
        </div>
        {/* middle */}
        <div className="middle flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-1/2 bg-[url(./assets/management_crew2.png)] bg-no-repeat bg-cover bg-top rounded-[8px] overflow-hidden"
          >
            <div className="absolute left-5 bottom-5">
              <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
                Harry Larson
              </h3>
              <h4 className="uppercase nunito font-medium text-white">
                yacht officer
              </h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-1/2 bg-[url(./assets/management_crew3.png)] bg-no-repeat bg-cover bg-top rounded-[8px] overflow-hidden"
          >
            <div className="absolute left-5 bottom-5">
              <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
                Arnold morris
              </h3>
              <h4 className="uppercase nunito font-medium text-white">
                Captain
              </h4>
            </div>
          </motion.div>
        </div>
        {/* right */}
        <div className="right flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[480px] bg-[url(./assets/management_crew1.png)] bg-no-repeat bg-cover bg-top rounded-[8px] overflow-hidden"
          >
            <div className="absolute left-5 bottom-5">
              <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
                Tomas Finn
              </h3>
              <h4 className="uppercase nunito font-medium text-white">
                2nd officer
              </h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[325px] bg-[url(./assets/management_crew1.png)] bg-no-repeat bg-cover bg-top rounded-[8px] overflow-hidden"
          >
            <div className="absolute left-5 bottom-5">
              <h3 className="quick_sand font-bold text-xl mb-2 text-white capitalize">
                Arnold morris
              </h3>
              <h4 className="uppercase nunito font-medium text-white">
                Captain
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Crew2;
