import React, {useContext, useState} from "react";
import Card from "../components/ui/card/card";
import classes from "./scss/loginContainer.module.scss";
import TextInput from '../components/forms/inputs/textInput/textInput';
import { useForm } from "../hooks/useInputs";
import userContext from '../components/contexts/userContext'
import { validateEmail, validatePassword } from '../utils/validation'
import { useDidMount, useDidUpdate } from '../hooks/useLifeCycle'
import Button from '../components/button/button'
//import useApiState from 

const LoginContainer = () => {
  const { user, setUser } = useContext(userContext);
    //const [loginState, loginCall] = useApiState(login);

  const [formState, formActions] = useForm({
    initialValues: {
      email: "",
      password: ""
    },
    validation: {
      email: validateEmail,
      password: validatePassword
    },
    required: ["email", "password"]
  });

  const { values, errors, touched } = formState;
  const { handleChange } = formActions;

  const [openModal, setOpenModal] = useState(false);
  const [variantModal, setVariantModal] = useState("success");
  const [textModal, setTextModal] = useState("");
  const [checked, setChecked] = useState(false);

  /* useDidUpdate(() => {
    if (!loginState.fetching && loginState.data) {
      setAuthorizationBearer(loginState.data.token.accessToken);
      localforage.setItem("auth", loginState.data);
      setUser(loginState.data.user);
    } else if (loginState.errorCode) {
      setOpenModal(true);

      setVariantModal("error");
      setTextModal("Nom d'utilisateur et/ou Mot de passe invalide!");
    }
  }, [loginState.fetching]); */

  /* if (user) {
    const { from } = decodeUri(location.search);
    return <Redirect to={from || "/profile"} />;
  } */

  const onSubmit = () => {
    if (formActions.validateForm()) {
     // loginCall(formState.values);
    } else {
      formActions.setTouched({ email: true, password: true });
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleChangeCheckBox = event => {
    setChecked(event.target.checked);
  };
  return (
    <div className={classes.cardWrapper}>
      <Card>
        <form onSubmit={onSubmit}>
          <div className={classes.inputWrapperLogin}>
            <TextInput
              name="email"
              onChange={handleChange}
              value={values.email}
              autoComplete="off"
              label="Adresse e-mail"
              error={touched.email && errors.email !== ""}
              errorText={touched.email ? errors.email : ""}
            />
          </div>
          <div className={classes.inputWrapperLogin}>
            <TextInput
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
              label="Mot de passe"
              errorText={touched.password ? errors.password : ""}
              error={touched.password && errors.password !== ""}
            />
          </div>
          <div className={classes.resterConnecter}>
           {/*  <Checkbox
              checked={checked}
              onChange={handleChangeCheckBox}
              label="Rester connecter"
            /> */}
          </div>
          <div className={classes.btnLogin}>
            <Button
              variant="contained"
              large
              className={classes.submitButton}
              onClick={onSubmit}
            >
              Se connecter
            </Button>
           {/*  {loginState.fetching && (
              <CircularProgress size={16} className="login_loader" />
            )} */}
          </div>

          <div className={classes.creationCompte}>
            <a className={classes.registerText} href="/register">
              Je souhaite créer un compte
            </a>
          </div>

          <div className={classes.forgetPassword}>
            <a href="/forgot-password" className={classes.forgotPswd}>
              Mot de passe oublié ?
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginContainer;
