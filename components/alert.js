import React, { Component, useEffect, useState } from "react";
import styles from "../styles/search.module.css";

export const Alert = ({ handleClick, text }) => {
  return (
    <div>
      <div className="alert">
        <span className="close-button" onClick={() => handleClick()}>
          &times;
        </span>
        {text ? text : "An error as occurred"}
      </div>
      <style jsx="true">{`
        .alert {
          padding: 20px;
          margin: auto;
          width: 100%;
          background-color: #e28a85;
          // margin-top: 15px;
          margin-bottom: 25px;
          border-radius: 5px;
          border: 2px solid #ea5350;
          color: white;
        }

        .close-button {
          margin-left: 15px;
          color: white;
          font-weight: bold;
          float: right;
          font-size: 22px;
          line-height: 20px;
          cursor: pointer;
          transition: 0.3s;
        }

        .close-button:hover {
          color: #bfbfbf;
        }

        @media (max-width: 700px) {
          .alert {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Alert;
