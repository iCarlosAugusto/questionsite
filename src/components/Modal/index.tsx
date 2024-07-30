// Modal.js
import React from 'react';

import { easeIn, motion } from 'framer-motion';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: '0',
    transition: { delay: 0.5, easeIn },
  },
};
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ isOpen, closeModal }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-999999"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal}
    >
      <motion.div
        className="rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xl font-bold mb-4 text-orange-500">
          Entrar na sua conta
        </span>
        <p className="mb-4">
          Seja bem-vindo! Ficamos felizes em ter você por aqui!
          <br />
          Preparado para tirar sua certificação?
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
