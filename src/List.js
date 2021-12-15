import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import styled from "styled-components";

const List = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    db.collection("userInfo").onSnapshot((snapshot) => {
      setInfo(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(info);

  return (
    <Wrapper>
      <Title>DANH SÁNH ĐĂNG KÍ</Title>
      {info.map((user) => {
        return (
          <Content>
            <Name>{user.name}</Name>
            <Phone>{user.phone}</Phone>
            <Email>{user.email}</Email>
            <Address>{user.address}</Address>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 20px;
  margin: 40px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  color: rgb(50, 150, 150);
`;

const Name = styled.div`
  text-align: start;
  padding-right: 20px;
  width: 25%;
  font-size: 18px;
`;
const Phone = styled.div`
  width: 25%;
  text-align: start;
  font-size: 18px;
`;
const Email = styled.div`
  width: 25%;
  text-align: start;
  font-size: 18px;
`;
const Address = styled.a`
  width: 25%;
  text-align: start;
  padding-left: 80px;
  cursor: pointer;
  font-size: 18px;
`;
