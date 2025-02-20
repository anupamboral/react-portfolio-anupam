import { CONTACT } from "../constants";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <div>
      <div className="border-b  pb-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h1>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            p
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.a
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            href="#"
            className="border-b border-neutral-200"
          >
            {CONTACT.email}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
