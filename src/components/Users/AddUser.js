import React, { useState } from "react";
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";
import Button from '../UI/Button'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()
    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (> 0)'
            })

            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">
                        User Name
                    </label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">
                        Age (years)
                    </label>
                    <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit"> Add user</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;