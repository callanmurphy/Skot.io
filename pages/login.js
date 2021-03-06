import React, { Component } from 'react'
// import axios from 'axios';
const axios = require('axios').default;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: null,
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  addUser = () => {
    axios.post('/api/users', {
        email: this.state.email,
        password: this.state.password
    })
    .then((res) => {
      alert(res)
      this.props.setUser(res);
    })
    .catch((res) => {
      console.log(error);
    })
  }

  // authenticate = async () => {
  //   const response = await axios.get('/api/users', {
  //     params: {
  //       email: this.state.email
  //     }
  //   })
  //   return response.data;
  // }

  authenticate = () => {
    axios.get('/api/users', {
      params: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .then((res) => {
      console.log(res)
      // alert(this.state.email)
      // this.props.setUser(res);
    })
    .catch((res) => {
      console.log(error);
    })
  }

  handleSubmit = () => {
    this.authenticate();
    // this.addUser();
  }

  render() {
    return (
      <div>
        <div className={"container"}>
          <h1>Account Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="email" value={this.state.email} onChange={(e) => this.handleInputChange("email", e.target.value)} placeholder={"Email"} style={{marginTop: 5}} />
            <br/>
            <input type="password" value={this.state.password} onChange={(e) => this.handleInputChange("password", e.target.value)} placeholder={"Password"}/>
            <br/>
            <input type="submit" value="Login" className={"submit"} />
          </form>
        </div>
  
  
        <style jsx>{`
          .container {
            margin: 0 auto;
            text-align: center;
          }
  
          input {
            width: 40%;
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
            border: none;
          }
  
          .submit:hover {
            opacity: 0.9;
            cursor: pointer;
          }
  
          @media (max-width: 700px) {
            .container {
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
    )
  }
} 

export default Login;