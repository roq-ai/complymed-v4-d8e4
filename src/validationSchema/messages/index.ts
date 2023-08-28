import * as yup from 'yup';

export const messageValidationSchema = yup.object().shape({
  content: yup.string().required(),
  date: yup.date().nullable(),
  sender_id: yup.string().nullable().required(),
  receiver_id: yup.string().nullable().required(),
});
