'use client';

import React, { useState } from 'react';

import { Modal, ModalContent, ModalHeader } from '@nextui-org/react';

import { Signin } from './Signin';
import { Signup } from './Signup';

interface ModalAuthProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ModalAuth({ isOpen, onOpenChange }: ModalAuthProps) {
  const [isCreateAccount, setCreateAccount] = useState(false);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <span>
                {isCreateAccount ? 'Comece a estudar de graça agora' : 'Bom te ver novamente =)'}
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setCreateAccount((oldState) => !oldState)}
              >
                {isCreateAccount ? 'Acessar minha conta' : 'Ainda não tem uma conta? Crie agora!'}
              </span>
            </ModalHeader>
            {isCreateAccount ? <Signup onClose={onClose} /> : <Signin onClose={onClose} />}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
