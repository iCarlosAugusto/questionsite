import { Button, ModalBody, ModalFooter } from '@nextui-org/react';

import { Textfield } from '../Textfield';

export const Signup = ({ onClose }: { onClose: () => void }) => {
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
