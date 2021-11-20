import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  & .table {
    margin: 20px;
    display: table;
  }
  & .table-row {
    display: table-row;
  }
  & .table-cell {
    border: solid 1px;
    border-color: #808080;
    display: table-cell;
    vertical-align: top;
  }
`;

export const Home = () => {

  const handleButtonClick = () => {
    axios
      .get("api/test")
      .then((responce) => {
        if (responce.status === 200) {
          alert(responce.data);
        }
      })
      .catch(() => {
        alert("エラー");
      });
  };

  const TYPE_NUMBER = "NUMBER";
  const TABLE_DIFINE = [
    { label: "日時", key: "date" },
    { label: "場所", key: "place" },
    { label: "イベント名", key: "eventName" },
    { label: "詳細", key: "detail" },
    { label: "集客リスト", key: "list" },
  ];

  const data = {
    body: {
      data: [
        {
          date: "2022/09/05",
          place: "アメ村のやばいところ",
          eventName: "さるかに合戦",
          detail: "詳細です",
          link: "",
        },
        {
          date: "2022/09/12",
          place: "アメ村",
          eventName: "おに戦",
          detail: "詳細です",
          link: "",
        },
      ],
    },
  };

  return (
    <Wrapper>
      <h1>Hello, world!</h1>
      
      <button onClick={handleButtonClick}>APIテスト</button>
      
      <table className="table table-bordered">
        <thead>
          {TABLE_DIFINE.map((def) => (
            <th key={def.key}>{def.label}</th>
          ))}
        </thead>
        <tbody>
          {data.body.data.map((row) => (
            <tr key={row.date}>
              {TABLE_DIFINE.map((def) => {
                if (def.type === TYPE_NUMBER) {
                  return(
                    <td key={`${row.date} ${def.key}`}>
                      {row[def.key]}
                    </td>
                  );
                }
                else{
                  return(
                    <td key={`${row.date} ${def.key}`}>{row[def.key]}</td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
