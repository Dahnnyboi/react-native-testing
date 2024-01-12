import {FormikHelpers, useFormik} from 'formik';
import {object, string} from 'yup';
import {createUser} from 'apis/user';
import {VALIDATION, REGEX} from '@constants/validation';

const usePostSignup = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = object({
    firstName: string().required(VALIDATION.required),
    lastName: string().required(VALIDATION.required),
    email: string().required(VALIDATION.required).email(VALIDATION.email),
    password: string()
      .required('Password is required')
      .matches(REGEX.password, VALIDATION.password),
  });

  const onSubmit = async (
    values: UserModel,
    {resetForm}: FormikHelpers<UserModel>,
  ) => {
    const response = await createUser(values);
    console.log(response);

    resetForm();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};

export default usePostSignup;
