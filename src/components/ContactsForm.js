import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CustomInput, CustomTextArea } from "./index";
import { Form, Formik } from "formik";
import validationSchema from "../schemas/validationSchema";

const ContactsForm = () => {
  const [serverState, setServerState] = useState();

  const formEndpoint = process.env.REACT_APP_FORM_ENDPOINT;

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: formEndpoint,
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="form-container">
                <div className="form-control">
                  <CustomInput label="név*" name="name" type="text" />
                </div>
                <div className="form-control">
                  <CustomInput label="email*" name="email" type="text" />
                </div>
                <div className="form-control">
                  <CustomInput
                    label="telefonszám"
                    name="phoneNumber"
                    type="number"
                  />
                </div>
                <div className="form-control">
                  <CustomTextArea name="message" type="textarea" />
                </div>
                <div className="btn-container">
                  <button type="submit" disabled={isSubmitting} className="btn">
                    <h3>küldés</h3>
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ContactsForm;
