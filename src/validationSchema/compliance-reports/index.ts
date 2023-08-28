import * as yup from 'yup';

export const complianceReportValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
