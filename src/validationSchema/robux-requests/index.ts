import * as yup from 'yup';

export const robuxRequestValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  guest_user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
