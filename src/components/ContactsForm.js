import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CustomInput, CustomTextArea } from "./index";
import { Form, Formik } from "formik";
import validationSchema from "../schemas/validationSchema";
import { gsap } from "gsap/dist/gsap";

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

  useEffect(() => {
    gsap.utils.toArray(".form-input").forEach((input) => {
      const target = input.nextElementSibling;
      const tl = gsap.timeline({ paused: true });
      const anim = tl.fromTo(
        target,
        { width: "0px" },
        { duration: 0.5, width: "100%" }
      );

      input.addEventListener("focusin", () => {
        anim.play();
      });

      input.addEventListener("focusout", () => {
        anim.reverse();
      });
    });
  }, []);

  useEffect(() => {
    const btn = document.querySelector(".contact-btn");
    const target = btn.children[1];
    const tl = gsap.timeline({ paused: true });
    const anim = tl.fromTo(
      target,
      { width: "1px" },
      { duration: 0.75, width: "120%" }
    );

    btn.addEventListener("mouseover", () => {
      anim.play();
    });

    btn.addEventListener("mouseleave", () => {
      anim.reverse();
    });
  }, []);

  return (
    <Wrapper>
      <div className="title-container">
        <h2>
          kérdésed van? <br></br>
          írj nekünk!
        </h2>
      </div>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="form-container">
                <div className="form-control">
                  <CustomInput
                    name="name"
                    type="text"
                    placeholder="név*"
                    className="form-input"
                  />
                </div>
                <div className="form-control">
                  <CustomInput
                    name="email"
                    type="text"
                    placeholder="email*"
                    className="form-input"
                  />
                </div>
                <div className="form-control">
                  <CustomInput
                    name="subject"
                    type="text"
                    placeholder="tárgy"
                    className="form-input"
                  />
                </div>
                <div className="form-control">
                  <CustomTextArea
                    name="message"
                    type="textarea"
                    placeholder="üzenet*"
                    rows="10"
                    className="form-input"
                  />
                </div>
                <div className="btn-container">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-btn btn"
                  >
                    <h3>küldés</h3>
                    <span className="btn-span"></span>
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

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: var(--primary-black);
  border-bottom: var(--border);
  font-family: var(--ff-secondary);

  .form-container {
    margin: 2rem 0;
    display: grid;
    place-content: center;
  }

  .form-control {
    position: relative;
    display: grid;
    width: 70vw;
  }

  span {
    z-index: 1;
    position: absolute;
    bottom: 2px;
    left: 0;
    background: var(--primary-clr-5);
    height: 2px;
  }

  .form-input {
    font-size: 1.25rem;
    border: none;
    text-transform: uppercase;
    margin: 0.25rem 0;
    padding: 0.75rem;
    background-color: #444;
    outline: none;
    color: var(--primary-white);
    border-right: solid 2px #444;
    font-family: var(--ff-secondary);
    resize: none;
  }

  .btn-container {
    display: flex;
    justify-content: center;

    .btn-span {
      z-index: -1;
      position: absolute;
      top: 0;
      left: -10%;
      height: 100%;
      transform: skewX(-20deg);
    }
  }

  .valid-border {
    border-right: solid 2px yellowgreen;
  }

  .invalid-border {
    border-right: solid 2px var(--primary-clr-5);
  }

  .valid {
    background: yellowgreen;
  }

  .invalid {
    background: var(--primary-clr-5);
  }

  @media screen and (min-width: 700px) {
    .form-control {
      width: 50vw;
    }
  }
`;

export default ContactsForm;
