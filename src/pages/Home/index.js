import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import BoxTech from "../../components/BoxTech";
import { BoxStyle, ButtonStyle } from "../../style/StyledPattern/styled";
import { HeaderHome, MainTech, SectionHome } from "./styled";
import axios from "axios";

const Home = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")) || "");
  const { name } = useParams();
  const history = useHistory();
  const [tech, setTech] = useState([]);

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
      .then((res) => setTech(res.data.techs));
  }, [user]);

  const handleBack = () => {
    history.push("/");
  };

  const handlerRegister = () => {
    history.push("/Tech");
  };

  return (
    <>
      <HeaderHome>
        <div>
          <h1>{user.name}</h1>
        </div>

        <BoxStyle>
          <ButtonStyle color={"green"} hover={true} onClick={handlerRegister}>
            Adicionar Tecnologia
          </ButtonStyle>

          <ButtonStyle color={"green"} hover={true} onClick={handleBack}>
            Sair
          </ButtonStyle>
        </BoxStyle>
      </HeaderHome>

      <MainTech overFlowY={true}>
        <SectionHome height={"100%"}>
          {tech.map((item) => (
            <>
              {console.log(item.id)}
              <BoxTech item={item} tech={tech} setTech={setTech} />
            </>
          ))}
        </SectionHome>
      </MainTech>
    </>
  );
};
export default Home;
