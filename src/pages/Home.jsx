import { Box, Container } from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";

const Home = () => {

  return (
    <Container maxW="container.xl" marginTop={"12"}>
      <ContactForm />
      <Box marginY="12" />
      <ContactTable />
    </Container>
  );
};

export default Home;
