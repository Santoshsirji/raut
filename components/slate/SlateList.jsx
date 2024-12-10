import React from 'react'

const SlateList = ({ text }) => {
    return (
        <div
            className='
            pl-10
            text-justify
            text-sm
            list-disc
            '
        >
            <li className='text-sm'>
                {text}
            </li>
        </div>
    )
}
export default SlateList;
