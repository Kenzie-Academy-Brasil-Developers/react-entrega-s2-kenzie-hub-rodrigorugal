import { Button, MenuItem, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { FormStyle, BoxForm } from "../../style/StyledPattern/styled";
import { useState } from "react";

const Tech = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlerTech = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        history.push("/Home");
      })
      .then((res) => console.log("segundo ", res))
      .catch((err) => console.log(err));
  };

  return (
    <BoxForm>
      <FormStyle onSubmit={handleSubmit(handlerTech)}>
        <h1>Registre-se</h1>

        <TextField
          label="title Tech"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Status Module"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("status")}
          error={!!errors.status}
          helperText={errors.status?.message}
          select
        >
          <MenuItem value="Iniciante">Iniciante</MenuItem>
          <MenuItem value="Intermediário">Intermediário</MenuItem>
          <MenuItem value="Avançado">Avançado</MenuItem>
        </TextField>

        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </FormStyle>
    </BoxForm>
  );
};
export default Tech;
