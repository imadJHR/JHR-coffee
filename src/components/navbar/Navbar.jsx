import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = ({sidebar,setSidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          {/*log section  */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              delay: 0.2,
              stiffness: 100,
            }}
            className="text-2xl font-semibold"
          >
            JOHAR <span className="text-primary uppercase">coffee</span>
          </motion.h1>
          {/*menu sm */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              delay: 0.2,
              stiffness: 100,
            }}
            onClick={()=>setSidebar(!sidebar)}
          >
            <IoMenu className="text-4xl cursor-pointer " />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
