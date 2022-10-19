import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Center,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getListContact } from "../redux/actions/contact";

const ContactTable = () => {
  const {
    getListContactResult,
    getListContactLoading,
    getListContactError,
    deleteContactResult,
  } = useSelector((state) => state.contactReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      dispatch(getListContact());
    }
  }, [deleteContactResult, dispatch]);

  return (
    <>
      <Heading marginBottom="4">List Contacts</Heading>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Position</Th>
              <Th>Phone Number</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {getListContactResult ? (
              getListContactResult?.map((contact) => {
                return (
                  <Tr key={contact.id}>
                    <Td>{contact.name}</Td>
                    <Td>{contact.email}</Td>
                    <Td>{contact.position}</Td>
                    <Td isNumeric>{contact.phone}</Td>
                    <Td>
                      <ButtonGroup>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          onClick={() => dispatch(detailContact(data))}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          onClick={() => dispatch(deleteContact(contact.id))}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                );
              })
            ) : getListContactLoading ? (
              <Tr>
                <Td colSpan="5">
                  <Center>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Center>
                </Td>
              </Tr>
            ) : (
              <Tr>
                <Td colSpan="5">
                  <Heading textAlign="center">
                    {getListContactError ? getListContactError : "Data Kosong"}
                  </Heading>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactTable;
