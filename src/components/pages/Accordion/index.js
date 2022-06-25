import { useState } from "react"
import React from 'react'

const data = [
    {
        id: 1,
        question: "Question 1",
        answer: "Answer 1",
        isOpen: false,
    },
    {
        id: 2,
        question: "Question 2",
        answer: "Answer 2",
        isOpen: false,
    },
    {
        id: 3,
        question: "Question 3",
        answer: "Answer 3",
        isOpen: false,
    },
]

const Accordion = () => {
    const [faqs, setFaqs] = useState(data) // pass in data to initilize it

    // const toggler = () => {
    //     setFaqs((prevState) => {
    //         [...prevState].map(faq => {
    //             return faq.id === id ? toggling happens here> {...faq, isOpen: !faq.isOpen} : faq
    //         })
    //     }) 
    // }

    const toggler = (id, event) => {
        setFaqs((prevState) => {
            return prevState.map(faq =>{
                return faq.id === id ? {...faq, isOpen: !faq.isOpen} : faq
                //each time question is clicked, we receive the id of the question
                // and loop through my faq, and if the id is true, the spread operator will be use and create a new array
                // and set the isOpen to true
            } )
        })
    }

//tailwind CSS, a big style sheet that is composed for us and can be accessed by control + space
// 1. onClick={referenceFunction} => use this
// 2. onClick{referenceFunction()} => do not use at all, invokes function right away
// 3. onClick={() => handlerFunction()} - anonymous function, receives event object
    return (
    
        <div className="border border-red-500"><h1>Accordion Title</h1>
        <ul>
            {faqs.map(faq => {
                return (
                    <li key={faq.id} className="border border-black">
                        <div onClick={(event) => toggler(faq.id)}>{faq.question}</div>
            {/* toggler will only run when it is invoked when it is clicked on */}
                        {faq.isOpen ? <div>{faq.answer}</div> : null}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}


export default Accordion