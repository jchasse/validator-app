import React from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import handleAttributeClick from './handleAttributeClick'

export default function ButtonLoveListing(listing) {
    return (
        <>
            <Button
                variant="outline-dark"
                size="sm"
                // onClick={ () => <handleAttributeClick listing={listing}/> }
            >
                <FontAwesomeIcon icon={faHeart} />
            </Button>           
        </>
    )
}