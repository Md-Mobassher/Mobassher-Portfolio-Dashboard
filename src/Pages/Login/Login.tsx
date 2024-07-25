import assets from "@/assets";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    toast("Logging in...");
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    reset();
    toast(res?.data?.message || "User is logged in succesfully!");
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen justify-center items-center bg-[#111A28] text-white flex flex-col">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-10">
        Welcome to Md. Mobassher Portfolio Dashboard
      </h2>
      <div className="w-[350px] border border-green-500 rounded-lg p-5 pb-8">
        <h2 className="text-3xl font-bold text-center mb-10">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-primary text-sm w-full bg-slate-800 p-3 rounded-md border border-green-500"
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
              className="input input-bordered input-primary text-sm w-full bg-slate-800 p-3 rounded-md border border-green-500 mt-5"
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
              className="btn px-10 w-full bg-green-500 mt-6 p-3 rounded-md hover:bg-green-400 border-0 text-center text-white cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>

      <div className="flex lg:justify-start md:justify-start justify-center items-center gap-5 mt-10 text-md font-semibold">
        See Portfolio{" "}
        <a href="https://mobassher.vercel.app" target="_blank">
          <img src={assets.image.logo} alt="logo image" className="w-12" />
        </a>
      </div>
    </div>
  );
};

export default Login;
