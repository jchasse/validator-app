import React from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
// import handleAttributeClick from './handleAttributeClick'

export default function ButtonGoodDeal({listing}) {
    return (
        <>
            <Button
                variant="outline-dark"
                size="sm"
                // onClick={ () => <handleAttributeClick listing={listing}/> }
            >
                <FontAwesomeIcon icon={faDollarSign} />
            </Button>           
        </>
    )
}
