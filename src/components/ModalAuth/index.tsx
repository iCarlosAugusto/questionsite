'use client';

import React, { useState } from 'react';
import { useFormState } from 'react-dom';

import { createAccountServerAction } from '@/app/auth/signin/actions/authenticate';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { z } from 'zod';

import ButtonComponent from '../Button';
import { Textfield } from '../Textfield';

interface ModalAuthProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ModalAuth({ isOpen, onOpenChange }: ModalAuthProps) {
  const [isCreateAccount, setCreateAccount] = useState(false);
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {() => (
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
            {isCreateAccount ? <Signup /> : <Signin />}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

const Signin = () => {
  interface FormErrors {
    email: string | undefined;
    password: string | undefined;
  }
  const [formState, formAction] = useFormState(createAccountServerAction, {
    message: '',
    errors: null,
    fieldValues: {},
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: undefined,
    password: undefined,
  });

  const validateForm = (formData: FormData) => {
    console.log(formState);
    const schema = z.object({
      email: z.string().email('Email inválido'),
      password: z.string().trim().min(1, 'Senha inválida'),
    });

    const validation = schema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    setFormErrors({
      email: validation.error?.formErrors?.fieldErrors?.email?.[0],
      password: validation.error?.formErrors?.fieldErrors?.password?.[0],
    });
    if (validation.success) {
      formAction();
    }
  };
  return (
    <>
      <form action={validateForm}>
        <ModalBody>
          <Textfield
            name="email"
            placeholder="Email"
            labelText="Email"
            textError={formErrors.email}
          />
          <Textfield
            name="password"
            placeholder="Senha"
            labelText="Senha"
            textError={formErrors.password}
          />
          <span className="cursor-pointer">Esqueci minha senha</span>
        </ModalBody>
        <ModalFooter className="flex justify-between">
          <ButtonComponent label="Entrar" type="submit" />
        </ModalFooter>
      </form>
    </>
  );
};

const Signup = () => {
  return (
    <>
      <ModalBody>
        <Textfield name="name" placeholder="Nome" labelText="Nome" />
        <Textfield name="email" placeholder="Email" labelText="Email" />
        <Textfield name="email" placeholder="Senha" labelText="Senha" />
      </ModalBody>
      <ModalFooter className="flex justify-between">
        <Button color="primary" onPress={() => {}}>
          Criar conta
        </Button>
      </ModalFooter>
    </>
  );
};
