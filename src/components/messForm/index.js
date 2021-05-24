import React, { useState, useEffect } from "react";
import { Divider } from "../Divider";
import { db } from "../../firebase";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  MessFormContainer,
  MessFormContent,
  MessFormH1,
  FormInput,
  FormTextArea,
  FormSection,
  FormButton,
} from "./messComponents";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => alert("Message has been submitted successfully!"))
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <MessFormContainer id="contact" onSubmit={handleSubmit}>
        <MessFormContent>
          <MessFormH1 data-aos="fade-left" data-aos-offset="550">
            Contact.
          </MessFormH1>
          <Divider data-aos="fade-right" data-aos-offset="550" light="true" />
          <FormSection>
            <FormInput
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="400"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormInput
              data-aos="fade-up"
              data-aos-offset="350"
              data-aos-delay="500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormTextArea
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="650"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </FormSection>

          <FormButton
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="100"
            type="submit"
          >
            Submit
          </FormButton>
        </MessFormContent>
      </MessFormContainer>
    </>
  );
};

export default Contact;
