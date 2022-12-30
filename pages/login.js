import React, { Component } from "react";
import { Alert } from "../components/alert";
import Image from "next/image";
import Router from "next/router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      alertShow: false,
      alertType: "error",
      alertText: "",
      user: null,
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  authenticate = async () => {
    const res = await fetch(
      `/api/users?email=${this.state.email}&password=${this.state.password}`
    );
    const data = await res.json();
    if (!data.success) {
      this.setState({
        alertShow: true,
        alertType: "error",
        alertText: data.message,
      });
    } else {
      this.setState({
        alertShow: false,
        alertType: "success",
        alertText: data.message,
      });
      this.props.setUser(this.state.email);
      Router.push("/accounts");
    }
    console.log(data);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.authenticate();
    // this.addUser();
  };

  toggleAlert = () => {
    this.setState((prevState) => ({
      alertShow: !prevState,
    }));
  };

  render() {
    return (
      <div>
        <div className={"outer-container"}>
          <div>
            <Image src={"/icon.svg"} alt="Site Logo" width="100" height="100" />
          </div>
          {/* <h1>Log In to Skot.io</h1> */}
          <h1>Account Login</h1>
          <div className={"inner-container"}>
            {this.state.alertShow && (
              <Alert
                handleClick={this.toggleAlert}
                text={this.state.alertText}
              />
            )}
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                value={this.state.email}
                onChange={(e) =>
                  this.handleInputChange("email", e.target.value)
                }
                placeholder={"Email"}
                style={{ marginTop: 0 }}
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={(e) =>
                  this.handleInputChange("password", e.target.value)
                }
                placeholder={"Password"}
              />
              <input type="submit" value="Log In" className={"submit"} />
              <p>
                Need an account? <a href="/register">Sign up</a>
              </p>
            </form>
          </div>
        </div>

        <style jsx="true">{`
          .outer-container {
            margin: 0 auto;
            text-align: center;
          }

          .inner-container {
            margin: 0 auto;
            margin-top: -20px;
            text-align: center;
            // border: 2px solid #121212;
            width: 40%;
            border-radius: 10px;
            padding: 30px;
          }

          input {
            width: 100%;
          }

          .row {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .submit {
            border-radius: 5px;
            width: 200px;
            height: 40px;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            background-color: #121212;
            color: #fff;
            outline: none !important;
            border: none;
            margin-bottom: 15px;
          }

          .submit:hover {
            opacity: 0.9;
            cursor: pointer;
          }

          @media (max-width: 800px) {
            .inner-container {
              width: 80%;
            }

            input {
              width: 100%;
              font-size: 16px;
            }

            .submit {
              font-size: 16px;
              height: 50px;
            }
          }
        `}</style>
      </div>
    );
  }
}

// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();

//   const users = await db
//     .collection("users")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(10)
//     .toArray();

//   const properties = JSON.parse(JSON.stringify(users));

//   console.log(properties);

//   return {
//     props: { properties: properties },
//   };
// }

export default Login;
