import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const schema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    const { email, password } = data;
    dispatch(loginUser({ email, password }));
    console.log("Submitted login data:", data);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;