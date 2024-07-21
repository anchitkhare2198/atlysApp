import { FunctionComponent } from "react";
import FormComponent from "../../components/Form/FormComponent";
import "./LoginPage.scss";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="container">
      <FormComponent formType="login" />
    </div>
  );
};

export default LoginPage;
