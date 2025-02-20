import logo from "../assets/anupam-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: 10,
    rotate: 20,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Navbar = () => {
  return (
    <nav className="navbar mb-20 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 360 }}
          transition={{ duration: 1 }}
          className="w-24 h-12"
          src={logo}
          alt=""
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4  ">
        <motion.a
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          href="https://www.linkedin.com/in/anupam-boral/"
          className="shadow-lg shadow-blue-500"
        >
          <FaLinkedin size={25} />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://github.com/anupamboral"
          className="shadow-lg shadow-amber-600"
        >
          <FaGithub size={25} />
        </motion.a>
        <motion.a
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          href="https://x.com/AnupamBoral399"
          className="shadow-lg shadow-emerald-400"
        >
          <BsTwitterX size={25} />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://www.instagram.com/anupamboral/"
          className="shadow-lg shadow-fuchsia-500"
        >
          <FaInstagram size={25} />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
