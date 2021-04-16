import react from 'react'
import classes from './UserList.module.css'
import Card from '../UI/Card'

const Userlist = (props) => {

    return(
        <Card className={classes.users}>
            {props.userList.length < 1 && <p></p>}
            {props.userList.length > 0 && 
            <ul>
                {props.userList.map(elem => {
                    return <li key={elem.id}>{elem.name} ({elem.age} years old)</li>
                })}
            </ul>
            }
        </Card>
    )
}

export default Userlist