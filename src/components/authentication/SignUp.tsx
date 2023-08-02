// src/SignUp.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../hooks/AuthContext';

// Validation schema for sign-up form
const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  
  // Define the type for the SignUp form data
  interface SignUpFormData {
    username: string;
    password: string;
  }
  

export const SignUp = () => {
  const { signUp } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    const { username, password } = data;
    signUp(username, password, );
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
      <button type="submit">Sign Up</button>
    </form>
  );
};
