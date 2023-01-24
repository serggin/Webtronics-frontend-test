import React from "react";
import { useForm, FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import styles from "../../styles/Home.module.scss";
import Button from "../Button";

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
});

function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <div className={styles.error}>{children}</div>;
}

interface InputProps {
  name: "name" | "phone" | "email";
  type?: string;
  placeholder?: string;
  error?: FieldError;
}

interface IFormInputs {
  name: string;
  phone: string;
  email: string;
}

export default function ContactUs() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  function Input({ name, type = "text", placeholder = "", error }: InputProps) {
    const className = error ? styles.error : "";
    return (
      <>
        <input {...{ type, placeholder, className }} {...register(name)} />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </>
    );
  }

  const onSubmit = (data: IFormInputs) => {
    schema
      .validate(data)
      .then(() => {
        console.log("valid", data);
        postData(data).then(() => {
          setValue("name", "");
          setValue("phone", "");
          setValue("email", "");
        });
      })
      .catch((err) => console.error(err));
  };

  const postData = (data: IFormInputs) => {
    return axios
      .post("http://localhost:3004/feedback", data)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div id="contactUs" className={styles.contactUs}>
      <h2>Contact Us</h2>

      <div className={styles.text}>
        Do you have any kind of help please contact with us.
      </div>
      <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input placeholder="Name" name="name" error={errors.name} />
          <Input
            type="tel"
            placeholder="Phone"
            name="phone"
            error={errors.phone}
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            error={errors.email}
          />
        </div>
        <div className={styles.sendButton}>
          <Button
            type="submit"
            title={"Send"}
            style={{ width: "100%" }}
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
}
