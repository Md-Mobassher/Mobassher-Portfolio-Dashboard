import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(data);

    const res = await login(userInfo).unwrap();
    console.log(res);
    const user = verifyToken(res.data.accessToken);
    reset();
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <div className=" max-w-sm mx-auto lg:mt-10 mt-6 py-12 border border-primary rounded-lg p-5">
      <h2 className="text-3xl font-bold text-center mb-10">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-primary text-sm w-full bg-slate-800"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {"Email is Required"}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {"Provide a valid Email"}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full ">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary text-sm w-full bg-slate-800 "
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
            })}
          />
          <label className="label">
            {errors.subject?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {"Password is Required"}
              </span>
            )}
          </label>
        </div>

        <div className="w-full mt-2 hover:text-white">
          <input
            className="btn px-10 w-full btn-primary hover:bg-green-400 border-0 text-center text-white "
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
