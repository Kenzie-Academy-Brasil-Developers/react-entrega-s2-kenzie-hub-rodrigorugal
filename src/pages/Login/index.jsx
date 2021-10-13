import { Button, Input, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  BoxForm,
  BoxInputForm,
  ButtonStyle,
  FormStyle,
} from "../../style/StyledPattern/styled";
import { useHistory } from "react-router";
import axios from "axios";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúcula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlerSwapPage = () => {
    history.push("/Register");
  };

  const handlerLogin = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response);
        history.push("/Home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <BoxForm>
        <FormStyle onSubmit={handleSubmit(handlerLogin)}>
          <h1>Login</h1>

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

          <ButtonStyle onClick={handlerSwapPage}>
            <p>Cadastre-se</p>
          </ButtonStyle>

          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </FormStyle>
      </BoxForm>
    </>
  );
};

export default Login;
