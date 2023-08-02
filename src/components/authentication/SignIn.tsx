// src/SignIn.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../hooks/AuthContext';


// Validation schema for sign-in form
const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  
  // Define the type for the SignIn form data
  interface SignInFormData {
    username: string;
    password: string;
  }

  
const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    const { username, password } = data;
    await signIn(username, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
