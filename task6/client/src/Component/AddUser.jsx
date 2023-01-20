import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import AllUsers from './AllUsers';

const initialValue = {
    name: ''
   
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [todo, setTodo] = useState(initialValue);
    const { name } = todo;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const addTodoDetails = async() => {
        await addUser(todo);
        // console.log(todo)
        
    }

    return (
        <>
        <Container>
            <Typography variant="h4">Add Todo</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Todo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>

            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addTodoDetails()}>Add  Todo</Button>
            </FormControl>
        </Container>
            <AllUsers/>
        </>
    )
}

export default AddUser;