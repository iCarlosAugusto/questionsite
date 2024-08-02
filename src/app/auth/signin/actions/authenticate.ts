'use server';

import { revalidatePath } from 'next/cache';

export const authServerAction = async () => {
  console.log('Auth...');
  revalidatePath('/');
  return {
    message: 'Vim do server',
    errors: null,
    fieldValues: {},
  };
};
