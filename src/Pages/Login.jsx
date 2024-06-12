import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import veno from '/src/images/venom.jpg'

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleEvent = (eventObject, stateUpdater) => {
    let inputValue = eventObject.target.value;
    stateUpdater(inputValue);
  };

  const logInto = (event) => {
    event.preventDefault();
    if (email && password) {
      let apiUrl = "https://movie-site-stapi.onrender.com/api/auth/local";
      let requestObject = {
        method: "POST",
        body: JSON.stringify({
          data: {
            identifier: email,
            password: password
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(apiUrl, requestObject)
        .then((response) => {
          if (response.ok == true) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then((data) => {
          if (data) {
            toast("Account Created");
            setEmail("");
            setPassword("");
          } else {
            toast("Failed to create Account");
          }
        })
        .catch((error) => {
          toast(`Failed to create:${error}`);
        });
    } else {
      alert("Email and Password are missing!!");
    }
  };

  return (
    <div className="flex gap-[5rem] ml-[2rem] mt-[3rem]">
      <div className="text-[cyan] ">
        <h1 className="text-[2rem]">Account Details</h1>
        <form className="text-center">
          <div>
            <label htmlFor="text-email">Email</label>
            <br />
            <input
            className="h-[2rem] text-[red]"
              type="email"
              id="text-eamil"
              value={email}
              onChange={(event) => {
                handleEvent(event, setEmail);
              }}
            />
          </div>
          <div>
            <label htmlFor="text-email">Password</label>
            <br />
            <input
            className="h-[2rem] text-[red]"
              type="password"
              id="text-password"
              value={password}
              onChange={(event) => {
                handleEvent(event, setPassword);
              }}
            />
          </div>
          <br />
          <button
          className="bg-[orange] text-[white] p-[1rem] rounded-[8px] mb-[2rem]"
            onClick={(event) => {
              createAccount(event);
            }}
          >
            Login
          </button>
        </form>
        <ToastContainer />
        <div className="text-center hover:bg-[orange] p-[1rem] "> 
        <Link to="/"><button>HOME</button></Link>
        </div>
      </div>
      
      <div>
        <img className="w-[20rem]" src={veno} alt="imge" />
      </div>
    </div>
  );
};

export default Login;
