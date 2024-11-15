import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";


const Footer = () => {

  return(

 


<motion.footer
className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-800"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5 }}
>
<p className="text-xs text-white ">
  © 2024 AskIt All rights reserved.
</p>
<nav className="sm:ml-auto flex gap-4 sm:gap-6  text-white">
  <Link className="text-xs hover:underline underline-offset-4" to="#">
    Terms of Service
  </Link>
  <Link className="text-xs hover:underline underline-offset-4" to="#">
    Privacy
  </Link>
</nav>
</motion.footer>

);
};

export default Footer;