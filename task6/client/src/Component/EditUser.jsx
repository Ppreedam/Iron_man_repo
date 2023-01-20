import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name} = user;
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editTodoDetails = async () => {
    const response = await editUser(id, user);
    navigate("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container injectFirst>
      <Typography variant="h4">Edit TodoItem</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Todo</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editTodoDetails()}
        >
          Edit Todo
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
