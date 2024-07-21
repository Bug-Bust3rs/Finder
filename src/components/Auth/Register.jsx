
import {Image5} from "../../Assets/Images/index";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="w-full min-h-[110vh] flex dark:bg-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[620px] sm:max-w-[900px] rounded-2xl dark:bg-slate-700 bg-white">
        <div className="w-full h-[450px] hidden md:block">
          <img
            className="w-[480px] mt-[130px] ml-2 h-[480px] mb-10"
            src={Image5}
            alt="Register illustration"
          />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-medium text-center mb-8 mr-14 dark:text-white">
              Join Wi<span className="text-blue-600">th US</span>
            </h2>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Enter Username</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="username"
                placeholder="eg. John Doe"
              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Email Address</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="email"
                placeholder="example@gmail.com"

              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Phone Number</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="phone"
                placeholder="+91 9876543210"

              />
            </div>
            <div className="mt-3">
              <label className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">Enter Password</label>
              <input
                className="border px-3 py-2 w-[350px] rounded-xl bg-slate-100 dark:bg-slate-600 mt-3 dark:border-slate-600"
                type="password"
                placeholder="Your Password"
              />
            </div>
            <button
              className="ml-[60px] mt-6 w-[230px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold poppins-extrabold"
              key="1"
            >
              Sign Up
            </button>
            <div className="mt-6 flex ml-[63px]">
              <p className="font-medium text-base dark:text-slate-300">Have an account?</p>
              <button className="text-blue-500 text-base font-normal ml-2">
                <Link to="/login">Sign in</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register