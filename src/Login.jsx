import React, { useState, useContext } from "react";
import Card from "./Components/Card";
import PrimaryButton from "./Components/PrimaryButton";
import TasksContext from "./Components/TaskContext";

const Login = () => {
  const { editTokenHandler } = useContext(TasksContext);

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const emailChangeHandler = (event) => SetEmail(event.target.value);
  const passwordChangeHandler = (event) => SetPassword(event.target.value);

  const handleSubmit = () => {
    const url = "http://daily-tasks.test/api/login";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let body = {
      userid: email,
      password: password,
    };
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) => editTokenHandler(response.token));
  };
  return (
    <div className="pt-20">
      <Card className="w-40 md:w-80  mx-auto my-auto  justify-items-center">
        <form className="bg-white w-40 md:w-80 border border-1 mx-auto justify-center">
          <div className="pt-2 pb-4">
            <div className="flex justify-center p-2">
              <h1 className="font-bold ">Login</h1>
            </div>
            <div className="p-2">
              <input
                type="text"
                placeholder="email"
                className="border w-full pl-2 h-10"
                value={email}
                onChange={emailChangeHandler}
              />
            </div>
            <div className="p-2">
              <input
                type="password"
                placeholder="password"
                className="border w-full pl-2 h-10"
                value={password}
                onChange={passwordChangeHandler}
              />
            </div>

            <div className="p-2">
              <PrimaryButton
                type="button"
                onClick={handleSubmit}
                className=""
                value="login"
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
