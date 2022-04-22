import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "./style.scss";

const Modal = ({ isShowing, hide, color, ...props }) =>
  isShowing
    ? 
      ReactDOM.createPortal(
        <>
          <motion.div
            className="modal-overlay"
            initial="initial"
            animate="in"
            variants={variants}
            transition={pageTransition}
          >
            <div className="modal-wrapper">
              <motion.div
                className="modal"
                style={{ background: `${color}`, opacity: "0.8" }}
                initial="initial"
                animate="in"
                variants={variants}
                transition={transition}
              >
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <svg
                    version="1.1"
                    id="cross"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 490 490"
                  >
                    <polygon
                      points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 
	                    11.387,0 0.561,10.811 234.191,244.996 0.561,479.174"
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </button>
                <div className="modal-body">{props.children}</div>
              </motion.div>
            </div>
          </motion.div>
        </>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

// Motion
const variants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  in: {
    opacity: 1,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 2.5,
};

export default Modal;
