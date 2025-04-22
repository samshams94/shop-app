import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { registerUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(registerUser(data));
    console.log("Registered user:", data);
    navigate('/login'); // or navigate("/") if you want auto-login experience
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

        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;