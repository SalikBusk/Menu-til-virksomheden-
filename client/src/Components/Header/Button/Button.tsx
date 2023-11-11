import React from "react";
import { motion } from "framer-motion";

// css
import "./ButtonStyle.css"; 

interface PerspectiveTextProps {
    label: string,
}

const PerspectiveText: React.FC<PerspectiveTextProps> = ({label}) => {
    return(
        <div className="perspectiveText">
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}

interface ButtonProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => {
        setIsActive((prevIsActive) => !prevIsActive);
      }}
      className="button"
    >
      <motion.div animate={{top: isActive ? "-100%" : "0"}} transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1],}} className="slider">
        <div className="el">
          <PerspectiveText label="Menu" />
        </div>
        <div className="el">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default Button;
