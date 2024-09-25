'use client';
import Image from 'next/image';
import React, { useState } from 'react';

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
    transition: { duration: 0.5 },
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

const ModalPasswordForgotten = ({ isOpen, closeModal }: ModalProps) => {
  const [currentAnimation, setCurrentAnimation] = useState<'hidden' | 'visible'>('visible');

  const handleCloseAnimation = async () => {
    setCurrentAnimation('hidden');
    await new Promise((resolve) => setTimeout(resolve, 300));
    closeModal();
  };

  const closeOnEscapePressed = (e: KeyboardEvent) => {
    e.stopPropagation();
    console.log('Trigged close by esc');
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  window.addEventListener('keydown', closeOnEscapePressed);

  return (
    isOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-999999 p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleCloseAnimation}
      >
        <motion.div
          className="rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5"
          variants={modalVariants}
          initial="hidden"
          animate={currentAnimation}
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold  text-orange-500">Recuperar minha senha</span>
            <Image
              src={Close}
              alt="Close button"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={handleCloseAnimation}
            />
          </div>

          <span className="mb-4">
            Entre em contato com o nosso time de suporte via Whatsapp ou email
          </span>
        </motion.div>
      </motion.div>
    )
  );
};

export { ModalPasswordForgotten };
