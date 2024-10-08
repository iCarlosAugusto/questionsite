'use client';

import React, { useEffect, useState } from 'react';

import { Modal, ModalContent, ModalHeader } from '@nextui-org/react';

import { Signin } from './Signin';
import { Signup } from './Signup';

interface ModalAuthProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  openCreation?: boolean;
}

export function ModalAuth({ isOpen, onOpenChange, openCreation }: ModalAuthProps) {
  const [isCreateAccount, setCreateAccount] = useState(openCreation);

  useEffect(() => {
    setCreateAccount(openCreation);
  }, [openCreation]);

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
            {isCreateAccount ? <Signin onClose={onClose} /> : <Signup onClose={onClose} />}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
