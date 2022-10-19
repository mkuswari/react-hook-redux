import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_LIST_CONTACT,
} from "../constants/contact";
import {
  getContacts,
  createContact,
  removeContact,
} from "../../services/contact.service";

export const getListContact = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    getContacts()
      .then((res) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addContact = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    createContact(payload)
      .then((res) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    removeContact(id)
      .then((res) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
