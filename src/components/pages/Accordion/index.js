import { useState } from "react"

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
    const [faqs, setFaqs] = useState(data)

    // const toggler = (id) => {
    //     setFaqs((prevState) => {
    //         return prevState.map(faq => {
    //             return faq.id === id ? {...faq, isOpen: !faq.isOpen} : faq
    //         })
    //     })
    // }

    const toggler = (id) => {
        setFaqs(faqs.map(faq => faq.id === id ? {...faq, isOpen: !faq.isOpen} : faq))
    }

    // 1. onClick={referenceFunction}  => use this
    // 2. onClick={referenceFunction()} => DO NOT USE AT ALL - causes function to be invoked right away
    // 3. onClick={() => handlerFunction()} => or use this

    return (
    <div className="border border-red-500">
        <h1>Accordion Title</h1>
        <ul>
            {faqs.map(faq => {
                return (
                    <li key={faq.id} className="border border-black">
                        <div onClick={() => toggler(faq.id)} >{faq.question}</div>
                        {faq.isOpen ? <div>{faq.answer}</div> : null}
                    </li>
                )
            })}
        </ul>
    </div>)
}

export default Accordion