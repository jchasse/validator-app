import React from 'react'
import {Button} from 'react-bootstrap'

export default function EditOrSubmitButton(props) {

    const editOrSubmit = () => !props ? 'Submit' : 'Update'

    return (
        <>
            <Button className="float-right" variant="outline-light" size="sm" type="submit"> {editOrSubmit()} </Button>
        </>
    )
}


// import React from 'react'
 
// const Button = ({ handleClick, text })=> <button style="myButton" onClick={ handleClick }>{ text }</button>
 
// export default Button
