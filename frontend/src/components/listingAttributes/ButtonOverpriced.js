import React from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
// import handleAttributeClick from './handleAttributeClick'

export default function ButtonOverpriced(listing) {
    return (
        <>
            <Button
                variant="outline-dark"
                size="sm"
                // onClick={ () => <handleAttributeClick listing={listing}/> }
            >
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </Button>           
        </>
    )
}
