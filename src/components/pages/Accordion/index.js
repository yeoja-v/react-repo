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
    const [faqs, setFaqs] = useState(data) // pass in data to initilize it

    // const toggler = () => {
    //     setFaqs((prevState) => {
    //         [...prevState].map(faq => {
    //             return faq.id === id ? toggling happens here> {...faq, isOpen: !faq.isOpen} : faq
    //         })
    //     }) 
    // }

    const toggler = (id) => {
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
    return (
        <div className="border border-red-500"><h1>Accordion Title</h1>
        <ul>
            {faqs.map(faq => {
                return (
                    <li key={faq.id} className="border border-black">
                        <div onClick={() => toggler(faq.id)}>{faq.question}</div>
                        {faq.isOpen ? <div>{faq.answer}</div> : null}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}


export default Accordion