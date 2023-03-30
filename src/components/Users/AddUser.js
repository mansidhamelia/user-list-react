import React, { useState, useRef } from "react";
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";
import Button from '../UI/Button'
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (> 0)'
            })

            return
        }
        props.onAddUser(enteredName, enteredUserAge)
        // (state)
        // setEnteredAge('')
        // setEnteredUsername('')

        // (ref) rarely use below code
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // (state)
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper >

            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">
                        User Name
                    </label>
                    <input id="username" type="text" ref={nameInputRef} />

                    <label htmlFor="age">
                        Age (years)
                    </label>
                    <input id="age" type="text" ref={ageInputRef} />
                    <Button type="submit"> Add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;