import { Button, Menu, MenuItem, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import {
  BoxForm,
  BoxInputForm,
  ButtonStyle,
  FormStyle,
} from "../../style/StyledPattern/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúcula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação de senha inválida!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => console.log(response))
      .then((response) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <BoxForm>
      <FormStyle onSubmit={handleSubmit(handleForm)}>
        <h1>Registre-se</h1>

        <TextField
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Name"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Bio"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
        />

        <TextField
          label="Contato"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />

        <TextField
          label="Course Module"
          type="text"
          margin="normal"
          variant="outlined"
          size="small"
          fullWidth
          color="primary"
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
          select
        >
          <MenuItem value="1º_Module">1º module</MenuItem>
          <MenuItem value="2º_Module">2º module</MenuItem>
          <MenuItem value="3º_Module">3º module</MenuItem>
          <MenuItem value="4º_Module">4º module</MenuItem>
        </TextField>

        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </FormStyle>
    </BoxForm>
  );
};

export default Register;
