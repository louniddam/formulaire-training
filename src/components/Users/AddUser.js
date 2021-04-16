import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const [toggle, setToggle] = useState(true)
    const [message, setMessage] = useState('')

    const addUserHHandler = (e) => {
        e.preventDefault()
        const formValues = {
            name: name,
            age: age,
            id: Math.random().toString()
        }

        if (name.trim().length === 0 || age.trim().length === 0){
            setMessage("Name or Age is empty")
            setToggle(false)
            return;
        } 
        if (+age < 1){ //on met +age pour convertir age(string) en age(number)
            setMessage("Age should be > 0")
            setToggle(false)
            return;

        }

        setName('')
        setAge('')

        props.onGetUserData(formValues)
    }

    const closeMessage =() => {
        setToggle(true)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)}/>
                <Button type="submit">Add user</Button>
            </form>
            {!toggle && <ErrorModal title="Error" message={message} handleMessage={closeMessage}/>}
        </Card>

    )
}

export default AddUser