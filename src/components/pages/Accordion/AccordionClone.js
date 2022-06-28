import React from 'react'
import { useState } from 'react'

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

const AccordionClone = () => {

    const [faq , setFaq] = useState(data)

    const toggler = (id, event) => {
        setFaq((prevState) => {
            (faq)
        })
    }

  return (
    <div>AccordionClone</div>
  )
}

export default AccordionClone