import React from 'react'
import NoteCard from './NoteCard'

const NoteHero = ({subjects}) => {

    return (
        <div
            className="
            flex
            flex-wrap
            md:mx-10
            md:gap-10
            sm:gap-5
            lg:gap-40
            gap-20
            justify-center
            "
        >
            {subjects?.map((subject, index) => (
                <NoteCard key={index} subject={subject} />
            ))}
        </div>
    )
}

export default NoteHero;
