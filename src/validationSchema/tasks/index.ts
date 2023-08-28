import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  due_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
