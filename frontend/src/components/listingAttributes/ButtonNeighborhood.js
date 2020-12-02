import React from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
// import handleAttributeClick from './handleAttributeClick'

export default function ButtonNeighborhood (listing) {
    return (
        <>
            <Button
                variant="outline-dark"
                size="sm"
                // onClick={ () => handleOnClick()}
            >
                <FontAwesomeIcon icon={faHome} />
            </Button>     
        </>
    )
}
