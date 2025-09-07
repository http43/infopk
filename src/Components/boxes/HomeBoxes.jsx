import React from 'react'
import Box from './Box'
import './Box.css'
const HomeBoxes = () => {
    return (
        <>
            <div className="box-main-container">
                <Box title="AIOU" link="/aiou" linktitle="AIOU Admission" />
                <Box title="BISE" link="/bise" linktitle="BISE Admission" />
                <Box title="IUB" link="/iub" linktitle="IUB Admission" />
                <Box title="Other" link="/other" linktitle="Other Links" />
            </div>
        </>
    )
}

export default HomeBoxes