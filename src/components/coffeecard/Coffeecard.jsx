import { delay, motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee2.png";

import Coffee3 from "../../assets/coffee/coffee3.png";
const Coffeecard = () => {
  const servicesData = [
    {
      id: 1,
      image: Coffee1,
      title: "Hot coffee",
      description: "lorem ipsum dolor sit amet , consecteture adipicing elit",
    },
    {
      id: 2,
      image: Coffee2,
      title: "White coffee",
      description: "lorem ipsum dolor sit amet , consecteture adipicing elit",
    },
    {
      id: 3,
      image: Coffee3,
      title: "Gold coffee",
      description: "lorem ipsum dolor sit amet , consecteture adipicing elit",
    },
  ];
  const vardvariants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="container my-16 space-y-4">
      {/*header section */}
      <div className="text-center bg-white maw-w-lg mx-auto  space-y-2 ">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 0.2,
            stiffness: 100,
          }}
          className=" text-3xl font-bold text-lightGray "
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 0.6,
            stiffness: 100,
          }}
          className=" text-sm opacity-50"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
          corrupti laboriosam, quibusdam quis asperiores libero vitae!
        </motion.p>
      </div>

      {/* card section*/}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 items-center gap-4 "
      >
        {servicesData.map((item) => (
          <motion.div
            variants={vardvariants}
            key={item.id}
            className="text-center  p-4 space-y-6"
          >
            <img
              src={item.image}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer  "
            />
            <div className="space-y-2 ">
              <h1 className="text-2xl font-bold text-primary">{item.title}</h1>
              <p className="text-darkGray ">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Coffeecard;
