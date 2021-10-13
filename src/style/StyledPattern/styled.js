import styled from "styled-components";

export const BoxForm = styled.div`
  background-color: #0e0061;
  width: 400px;
  height: 80%;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormStyle = styled.form`
  /* background-color: yellow; */
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  input,
  label {
    color: #ffffff;
    border-color: #ffffff;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #6bb0f0;
  }
`;

export const BoxInputForm = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const ButtonStyle = styled.div`
  background-color: ${(props) => props.color};
  height: 50px;
  width: 100px;
  border: none;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.hover ? "lightgreen" : null)};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxStyle = styled.div`
  display: flex;
  align-items: center;
`;
