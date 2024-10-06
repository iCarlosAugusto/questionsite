import { useState } from 'react';

import { UserEntity } from '@/entities/UserEntity';
import { useAuth } from '@/hooks/useAuth';
import { axiosReq } from '@/http/axios_helper';
import { ModalBody, ModalFooter } from '@nextui-org/react';
import { z } from 'zod';

import ButtonComponent from '../Button';
import { Textfield } from '../Textfield';

export const Signin = ({ onClose }: { onClose: () => void }) => {
  interface FormErrors {
    email: string | undefined;
    password: string | undefined;
  }

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: undefined,
    password: undefined,
  });
  const { saveUser } = useAuth();

  const authenticate = async (email: string, password: string) => {
    const { data } = await axiosReq.post<UserEntity>('/auth', {
      email,
      password,
    });

    if (!data) {
      setFormErrors({
        email: 'Login ou senha inválidos',
        password: 'Login ou senha inválidos',
      });
      return;
    }

    saveUser(data);
    onClose();
  };

  const validateForm = (formData: FormData) => {
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
      authenticate(validation.data.email, validation.data.password);
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
