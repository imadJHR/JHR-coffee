import AppCover from "../../assets/coffee/coffee-cover.jpg";
import Appstore from "../../assets/coffee/app_store.png";
import Playstore from "../../assets/coffee/play_store.png";
import { motion } from "framer-motion";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${AppCover})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="container my-14">
      <div
        style={bannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div className="">
          <div className="space-y-6 max-w-xl mx-auto ">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download the app
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </motion.p>
            {/*image link */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            
            className="flex justify-center items-center gap-4">
              <a
                href=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={Playstore} alt="" />
              </a>
              <a
                href=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={Appstore} alt="" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
