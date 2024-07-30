'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { easeIn, motion } from 'framer-motion';

import Close from '../../../public/images/icon/close.svg';

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
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold  text-orange-500">
            Entrar na sua conta
          </span>
          <Image
            src={Close}
            alt="Close button"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>

        <p className="mb-4">
          Seja bem-vindo! Ficamos felizes em ter você por aqui!
          <br />
          Preparado para tirar sua certificação?
        </p>
        <Link href="/auth/signin">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={closeModal}
          >
            Acessar conta
          </button>
        </Link>

        <Link href="/auth/signup">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-5"
            onClick={closeModal}
          >
            Criar conta
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
