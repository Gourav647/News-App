import React, { useState } from 'react'
import './Cards.css'
import { Button, Collapse, IconButton, Stack, Typography } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

const Cards = (props) => {
    const [expand, setExpand] = useState(false);

    const handleOnExpand = () => {
        setExpand(!expand)
    }
    return (
        <div>
            <div class="card" >
                <img src={props.imgUrl} height={30} alt="..." />
                <Stack sx={{ justifyContent: "space-between", padding: "0 5px 10px 5px" }} height="100%">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <Collapse in={expand} style={{height: "fit-content"}}>
                        <Typography fontSize={14}>
                            <p class="card-text">{props.description}</p>
                        </Typography>
                        </Collapse>
                        <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction='row'>
                            <span>{props.author} ~</span>
                            <IconButton color='inherit' onClick={handleOnExpand}>
                                <KeyboardArrowDown />
                            </IconButton>
                        </Stack>
                    </div>
                    <Button disableRipple={true} variant='contained' color='success' href={props.url}>
                        Learn more
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default Cards
