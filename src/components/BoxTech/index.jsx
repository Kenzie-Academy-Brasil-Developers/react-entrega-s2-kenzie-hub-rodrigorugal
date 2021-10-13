import { useEffect, useState } from "react";
import { BoxGroup, BoxText, ButtonRemove, TitleTech } from "./styled";
import axios from "axios";

const BoxTech = ({ item, tech, setTech }) => {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));

  const handleDelete = (id) => {
    axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });

    setTech(tech.filter((item) => item.id !== id));
  };

  return (
    <BoxGroup key={item.id}>
      <TitleTech>{item.title}</TitleTech>
      <BoxText>{item.status}</BoxText>

      <ButtonRemove onClick={() => handleDelete(item.id)}>X</ButtonRemove>
    </BoxGroup>
  );
};

export default BoxTech;

// {
//   "user": {
//     "id": "245243fb-6234-40db-8a72-2f47e6db16b1",
//     "name": "rodrigo",
//     "email": "Rodrigo32@gmail.com",
//     "course_module": "2º_Module",
//     "bio": "dodoi",
//     "contact": "81986406764",
//     "techs": [],
//     "works": [],
//     "created_at": "2021-09-29T17:38:15.461Z",
//     "updated_at": "2021-09-29T17:38:15.461Z",
//     "avatar_url": null
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzI5Mzc1MjksImV4cCI6MTYzMzE5NjcyOSwic3ViIjoiMjQ1MjQzZmItNjIzNC00MGRiLThhNzItMmY0N2U2ZGIxNmIxIn0.Vu_riPEFAdY4FTDbB0k3aJR4iXgbtDA2rOfeNNnqf0Y"
// }
