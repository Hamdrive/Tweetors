import React, { useState } from "react";
import { InputError } from "../../components";
import { useAuth } from "../../context";
import { useValidation } from "../../utils/validation/useValidation";

export const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  const {
    inputState,
    inputDispatch,
    errorState,
    errorDispatch,
    validateSignup,
  } = useValidation();

  const { name, email, password } = inputState;
  const { emailError, passwordError, nameError } = errorState;

  const { signupUser, setLoginPage } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      errorDispatch({ type: "CLEAR_ERRORS" });
      inputDispatch({ type: "CLEAR_INPUTS" });
      signupUser(name, email, password);
    }
  };

  return (
    <section className="section__signup">
      <div className="flex-center">
        <span className="txt-lg txt-bold">SignUp </span>
      </div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="input-section">
          <label
            htmlFor="name-input"
            className="form-input input-required txt-reg"
          >
            Name
          </label>
          <input
            type="text"
            className="input-corner input-md border-2"
            name="name-input"
            id="name-input"
            value={name}
            onChange={(e) =>
              inputDispatch({
                type: "NAME",
                payload: e.target.value,
              })
            }
            placeholder="Johnrao Doekar"
            required
          />
          <InputError errorMessage={nameError} />
        </div>
        <div className="input-section">
          <label
            htmlFor="email-input"
            className="form-input input-required txt-reg"
          >
            Email
          </label>
          <input
            type="text"
            className="input-corner input-md border-2"
            name="email-input"
            id="email-input"
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
          <label htmlFor="input" className="form-input input-required txt-reg">
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
        <div className="flex-center">
          <button type="submit" className="btn btn-def btn-md w-100">
            SignUp
          </button>
        </div>
      </form>
      <div className="div__loginAlt flex-center">
        <span className="">
          Already a member?{" "}
          <span
            onClick={() => setLoginPage(true)}
            className="txt-bold txt-underline pointer"
          >
            Log In!
          </span>
        </span>
      </div>
    </section>
  );
};
