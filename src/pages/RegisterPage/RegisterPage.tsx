import { FunctionComponent } from "react";
import FormComponent from "../../components/Form/FormComponent";

const RegisterPage: FunctionComponent = () => {
  return (
    <div className="container">
      <FormComponent formType="register" />
    </div>
  );
};

export default RegisterPage;
