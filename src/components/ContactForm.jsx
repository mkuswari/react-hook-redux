import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getListContact } from "../redux/actions/contact";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const { addContactResult } = useSelector((state) => state.contactReducer);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    console.log("1. Masuk Handle Submit");

    dispatch(
      addContact({
        name: name,
        email: email,
        position: position,
        phone: phone,
      })
    );
  };

  useEffect(() => {
    if (addContactResult) {
      dispatch(getListContact());
      setName("");
      setEmail("");
      setPosition("");
      setPhone("");
      setIsSubmit(false);
    }
  }, [addContactResult, dispatch]);

  return (
    <>
      <Heading marginBottom="4">Contact Form</Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Position</FormLabel>
          <Select
            placeholder="Choose Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Mobile Developer">Mobile Developer</option>
            <option value="DevOps">DevOps</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="number"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          isLoading={isSubmit}
          loadingText="Saving Data..."
          onClick={handleSubmit}
        >
          Save Data
        </Button>
      </Stack>
    </>
  );
};

export default ContactForm;
