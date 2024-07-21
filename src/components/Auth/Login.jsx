import { Image4 } from "../../Assets/Images/index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="w-full min-h-screen flex dark:bg-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 m-auto h-auto lg:h-[450px] sm:max-w-[850px] rounded-3xl dark:bg-slate-700 bg-white">
        <div className="w-full h-[300px] hidden lg:block">
          <img className="mt-12 w-full h-full object-cover" src={Image4} alt="Login illustration" />
        </div>
        <div className="p-5 flex flex-col justify-around">
          <form className="flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-8 dark:text-white">Sign<span className="text-blue-400"> In</span></h1>
            <div className="w-full max-w-xs">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Email Address</label>
              <input
                className="border px-3 py-2 w-full rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="w-full max-w-xs mt-4">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Enter Password</label>
              <input
                className="border px-3 py-2 w-full rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="password"
                placeholder="XXXXXXXXX"
              />
            </div>
            <div className="w-full max-w-xs mt-3 text-right">
              <button className="font-normal text-base text-blue-500">
                <Link to="/forgot-password">Forgot Password?</Link>
              </button>
            </div>
            <button
              className="mt-6 w-full max-w-xs active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold poppins-extrabold"
            >
              <p>Sign in</p>
            </button>
            <div className="mt-6 flex justify-center">
              <p className="font-medium text-base dark:text-slate-300">Did not have an account?</p>
              <button className="text-blue-500 text-base font-normal ml-2">
                <Link to="/register">Sign Up</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
