import styled from "styled-components";

export const BoxGroup = styled.div`
  background-color: #14275a;
  height: 250px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  box-shadow: 0 0 8px 2px #454f74;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TitleTech = styled.div`
  background-color: #d4d5e7;
  height: 20px;
  width: 90%;
`;

export const BoxText = styled.div`
  background-color: #d4d5e7;
  height: 180px;
  width: 90%;
`;

export const ButtonRemove = styled.button`
  background-color: white;
  border: 1px solid red;
  border-radius: 30px;
  color: red;
  width: 35px;
  height: 35px;
`;
