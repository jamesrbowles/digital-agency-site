import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  message: yup.string().required('Please enter your message'),
  privacy: yup.boolean().oneOf([true], 'Please accept the privacy policy'),
});
