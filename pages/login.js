export default function Login() {
  return (
    <div>
      <div className={"container"}>
        <h1>Account Login</h1>
        <form>
          <input type="email" name="name" placeholder={"Email"} style={{marginTop: 5}} />
          <br/>
          <input type="password" name="password" placeholder={"Password"} />
          <br/>
          <input type="submit" value="Login" className={"submit"} />
        </form>
      </div>


      <style jsx>{`
        .container {
          // width: 550px;
          // height: 500px;
          margin: 0 auto;
          text-align: center;
          // padding: 15px;
          // background-color: #fff;
          // border-radius: 25px;
          // border: 3px solid #121212;
          // box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
          // -moz-box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
          // -webkit-box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
          // -o-box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);   
        }

        input {
          margin: 0 auto;
          width: 40%;
          margin-top: 20px;
          margin-bottom: 5px;
          padding: 10px 15px;
          text-align: left;
          font-size: 14px;
          background-color: #fff;
          border-radius: 5px;
          border: 1px solid #121212;
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