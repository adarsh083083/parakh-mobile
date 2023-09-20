import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  category: yup.string().required('category is required'),

  description: yup.string().required('description is required'),

  price: yup.string().required('price is required'),
  label: yup.string().required('label is required'),

  attachments: yup
    .array()
    .min(1, 'Please select at least one image')
    .required('Image selection is required'),
});
