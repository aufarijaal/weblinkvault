import googleIcon from "/google.svg";
import { Link } from "react-router-dom";
import brandIcon from "/vite.svg";
import { useState } from "react";

const SignUp = () => {
    const [errors, setErrors] = useState<{ field: string; message: string }[]>([]);

    return (
        <div id="signup-page" className="flex flex-col justify-center items-center min-h-screen">
            <header className="flex flex-col gap-4 items-center mb-5">
                <Link to="/">
                    <img src={brandIcon} alt="brand icon" className="w-10 h-10" />
                </Link>
                <h2 className="sm:text-4xl text-3xl font-extrabold">Welcome to WebLinkVault</h2>
                <span className="text-sm">Store your bookmarks in the cloud</span>
            </header>

            <div className="form-wrapper max-w-md min-w-[400px]">
                <form className="flex flex-col items-center" method="post">
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="signup-email" className="label">
                            Email
                        </label>
                        <input
                            autoFocus
                            type="email"
                            id="signup-email"
                            placeholder="Please type your email"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="signup-email" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Retype your password"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="signup-email" className="label">
                            Password Confirmation
                        </label>
                        <input
                            type="password"
                            placeholder="Please type your password"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div className="errors-wrapper my-4">
                        <ul className="text-rose-500 text-xs">
                            {errors.map((error, index) => (
                                <li key={index}>{error.message}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button className="btn max-w-xs self-center" type="submit">
                            Sign up
                        </button>
                        <div className="text-center">OR</div>
                        <button className="btn" type="button">
                            <img src={googleIcon} alt="google icon" />
                            Sign up with google
                        </button>

                        <div>
                            <span>Already have an account? </span>
                            <Link className="font-bold hover:underline" to="/signin">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
