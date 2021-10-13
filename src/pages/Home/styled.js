import styled from "styled-components";

export const HeaderHome = styled.header`
  height: 20vh;
  width: 100%;
  border-bottom: 1px solid gray;
  /* background-color: gray; */
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: aliceblue;
  }
`;

export const MainTech = styled.main`
  /* background-color: lightcoral; */
  margin-top: 21vh;
  height: 80vh;
  width: 80%;
  overflow-y: ${(props) =>
    props.overFlowŸ ? props.height : (props.height = "hidden")};

  position: relative;
`;

export const SectionHome = styled.section`
  background-color: ${(props) => (props.color ? props.color : null)};
  height: ${(props) => (props.height ? props.height : (props.height = "10%"))};
  width: 100%;
  padding: 5px 0;
  overflow: ${(props) => props.overFlow};
  overflow-x: ${(props) =>
    props.overFlowX ? props.height : (props.height = "hidden")};

  display: flex;
  flex-wrap: wrap;
`;
