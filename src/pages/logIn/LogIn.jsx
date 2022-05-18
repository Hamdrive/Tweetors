import React, { useState } from "react";
import { InputError, Loader } from "../../components";
import { useAuth } from "../../context";
import { useValidation } from "../../utils/validation/useValidation";

export const LogIn = () => {
  const [showPass, setShowPass] = useState(false);

  const {
    inputState,
    inputDispatch,
    errorState,
    errorDispatch,
    validateLogin,
  } = useValidation();

  const { email, password } = inputState;
  const { emailError, passwordError } = errorState;

  const { loginUser, loading, setIsNewUser } = useAuth();

  const loginTestUser = (e) => {
    e.preventDefault();
    loginUser("hamza@tweetors.com", "TweetorsRocks123");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      errorDispatch({ type: "CLEAR_ERRORS" });
      inputDispatch({ type: "CLEAR_INPUTS" });
      loginUser(email, password);
    }
  };

  return (
    <section className="section__signup">
      <div className="flex-center">
        <span className="txt-lg txt-bold">LogIn </span>
      </div>
      <form className="form" novalidate>
        <div className="input-section">
          <label for="input" className="form-input input-required txt-reg">
            Email
          </label>
          <input
            type="text"
            className="input-corner input-md border-2"
            name="input"
            id="input"
            value={email}
            onChange={(e) =>
              inputDispatch({
                type: "EMAIL",
                payload: e.target.value,
              })
            }
            placeholder="johnrao.doekar@email.com"
            required
          />
          <InputError errorMessage={emailError} />
        </div>

        <div className="input-section">
          <label for="input" className="form-input input-required txt-reg">
            Password
          </label>
          <div className="input-toggle">
            <i
              onClick={() => setShowPass((s) => !s)}
              className={`fas ${
                showPass ? "fa-eye-slash" : "fa-eye"
              } toggle-vis pos-ab pointer`}
            ></i>
            <input
              type={showPass ? "text" : "password"}
              className="input-corner input-md border-2 pr-4"
              name="password"
              id="password"
              value={password}
              onChange={(e) =>
                inputDispatch({
                  type: "PASSWORD",
                  payload: e.target.value,
                })
              }
              placeholder={showPass ? "John123456" : "**********"}
            />
            <InputError errorMessage={passwordError} />
          </div>
        </div>
        <div className="div__login flex-center">
          <button onClick={handleSubmit} className="btn btn-def btn-md w-100">
            {loading ? <Loader /> : "LogIn"}
          </button>
        </div>
      </form>
      <div className="div__loginAlt flex-center">
        <span className="">
          New to Tweetors?{" "}
          <span
            onClick={() => setIsNewUser(true)}
            className="txt-bold txt-underline pointer"
          >
            Sign Up!
          </span>
        </span>
      </div>
      <div className="flex-center">
        <button
          className="btn btn-def btn-md outline w-100"
          onClick={loginTestUser}
        >
          {loading ? <Loader /> : "Login with test credentials"}
        </button>
      </div>
    </section>
  );
};
