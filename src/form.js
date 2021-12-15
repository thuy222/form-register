import React, { useState, useEffect } from "react";
import { Button, Form, FormLayout, TextField } from "@shopify/polaris";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";

const FormInput = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const infoFirebase = {
    name: name,
    phone: phone,
    email: email,
    address: address,
  };

  const validate = () => {
    const errors = {};
    const regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const regexEmail = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(.[A-Za-z0-9]+)$/;

    if (name.length < 4) {
      errors.name = "Họ tên nhập chưa đúng";
    }
    if (regexPhone.test(phone) === false) {
      errors.phone = "Sai định dạng số điện thoại";
    }
    if (address.length < 5) {
      errors.address = "Địa chỉ nhập thiếu";
    }
    if (regexEmail.test(email) === false) {
      errors.email = "Sai định dạng email";
    }
    return errors;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    console.log(infoFirebase);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      db.collection("userInfo").add(infoFirebase);

      navigate("/list");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <div>
          <TextField
            label="Họ Tên"
            value={name}
            onChange={(e) => {
              setName(e);
            }}
          />
          <p>{formErrors.name}</p>
        </div>
        <div>
          <TextField
            type="number"
            label="Số Điện Thoại"
            value={phone}
            onChange={(e) => {
              setPhone(e);
            }}
          />
          <p>{formErrors.phone}</p>
        </div>
        <div>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e);
            }}
            autoComplete="email"
          />
          <p>{formErrors.email}</p>
        </div>
        <div>
          <TextField
            label="Địa Chỉ"
            value={address}
            onChange={(e) => {
              setAddress(e);
            }}
          />
          <p>{formErrors.address}</p>
        </div>
      </FormLayout>
      <Button onClick={handleSubmit}>Đăng Kí</Button>
    </Form>
  );
};

export default FormInput;
