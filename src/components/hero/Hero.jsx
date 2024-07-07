import img1 from "../../assets/bg-slate.png";
import imgHero from "../../assets/black.png";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const bgImage = {
  backgroundImage: `url(${img1})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};
const Hero = () => {
  const [sidebar , setSidebar] = useState(0)
  return (
    <main style={bgImage}>
      <section className=" relative min-h-[750px] w-full ">
        <div className="container">
          {/*navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/*hero section */}
          <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/*text content section */}
            <div className="text-lightOrange mt-[100px]  p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.5,
                  stiffness: 100,
                }}
                className="lg:text-7xl text-4xl  fon-bold leading-tight ml-14 "
              >
                JHR TUMBER
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 1.2,
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4 ">
                  <h1 className="text-2xl "> Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
                    eos doloremque alias architecto deserunt ipsam cupiditate
                    vitae illo. Tenetur,{" "}
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/*hero image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.5,
                  stiffness: 100,
                }}
                src={imgHero}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/*orange circle section */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.8,
                  stiffness: 100,
                }}
                className="border-primary border-[20px] rounded-full -right-16 top-24 absolute z-10 h-[180px] w-[180px] "
              ></motion.div>
              {/*big-text-section */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.8,
                  stiffness: 100,
                }}
                className="absolute -top-20 lg:left-[330px] left-[280px] z-[1]" 
              > 
                <h1 className="lg:text-[140px] text-7xl lg:mt-14 scale-150 font-bold text-darkGray/40 leading-none">
                  JHR TUMBER
                </h1>
              </motion.div>
            </div>
            {/*third div  section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 1.2,
                stiffness: 100,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl fon-bold leading-tight ml-14">
                JHR TUMBER
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4 ">
                  <h1 className="text-2xl "> Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
                    eos doloremque alias architecto deserunt ipsam cupiditate
                    vitae illo. Tenetur,{" "}
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/*sidebar menu section */}
        {
          sidebar && (
            <motion.div 
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
           className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primarydark/80 backdrop-blur-sm z-10  ">
         <div className="w-full h-full flex justify-center items-center ">
         <div className=" flex flex-col justify-center items-center gap-6 text-white">
            {/*line */}
            <div className="w-[1px] h-[70px] bg-white"></div>
            {/*social icons */}
            <div className="inline-block p-2 rounded-full cursor-pointer border-white border 
            ">
            <FaFacebook className="text-2xl"/>
            </div>
            <div className="inline-block p-2 rounded-full cursor-pointer border-white border ">
            <FaTwitter className="text-2xl"/>
            </div>
            <div className="inline-block p-2 rounded-full cursor-pointer border-white border ">
            <FaInstagram className="text-2xl"/>
            </div>
            <div className="w-[1px] h-[70px] bg-white"></div>
          </div>
         </div>
        </motion.div>
            
          )
        }
        
      </section>
    </main>
  );
};

export default Hero;
