// 'use server';

// import { revalidatePath } from 'next/cache';

// import { axiosReq } from '@/http/axios_helper';

// interface State {
//   message: string;
//   errors: null;
//   fieldValues: any;
// }

// export const createAccountServerAction = async (state: State, formData: FormData) => {
//   const email = formData.get('email');
//   const password = formData.get('password');
//   const { data } = await axiosReq.post('/auth', {
//     email,
//     password,
//   });

//   return {
//     message: 'Vim do server',
//     errors: null,
//     fieldValues: {
//       //data: 's',
//     },
//   };
// };
