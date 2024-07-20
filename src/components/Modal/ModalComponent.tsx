import { FunctionComponent, useState } from "react";
import { Modal } from "react-bootstrap";
import FormComponent from "../Form/FormComponent";
import "./ModalComponent.scss";

interface ModalComponentProps {
  show: boolean;
  onHide: () => void;
  formType: "login" | "register";
}

const ModalComponent: FunctionComponent<ModalComponentProps> = ({
  show,
  onHide,
  formType,
}) => {
  const [localFormType, setFormType] = useState<"login" | "register">(formType);

  const handleFormTypeChange = (newFormType: "login" | "register") => {
    setFormType(newFormType);
  };
  return (
    <Modal className="popup-wrapper" show={show} onHide={onHide} centered>
      <Modal.Body>
        <FormComponent formType={localFormType} modal onFormTypeChange={handleFormTypeChange} onClose={onHide}/>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
