import "../App.css"
import React, { useState } from "react";
import Button from "./Button"
import Header from './Header';
import Section from './Section';
import classes from "../UI/Global.module.css"
function Question (){
    const [count, setCount] = useState(0)
    const [trueAnswers,setTrueAnswers] = useState(0)
    const onHandleClick = () =>{
           setCount(count + 1)
    }
    
    
    
    
    
    const data =[
     { id: 1,
        question: "Which mountain range is Armenia in?",
        answers: [
            {
                text: "Swiss Alps",
                correct: false
            },
            {
                text: "Caucasus",
                correct: true
            },
            {
                text: "Himalayas",
                correct: false
            },
            {
                text: "Urals",
                correct: false
            },
        ],
    },
    { id: 2,
        question: "What is the main religion of Armenia?",
        answers: [
            {
                text: "Islam",
                correct: false
            },
            {
                text: "Christianity",
                correct: true
            },
            {
                text: "Judaism",
                correct: false
            },
            {
                text: "Buddhism",
                correct: false
            },
        ],
    },
    { id: 3,
        question: "What is the largest city in Armenia?",
        answers: [
            {
                text: "Gyumri",
                correct: false
            },
            {
                text: "Tbilisi",
                correct: false
            },
            {
                text: "Van",
                correct: false
            },
            {
                text: "Yerevan",
                correct: true
            },
        ],
    },
    {
        id: 4,
        question: "There are more letters in the Armenian alphabet than the English alphabet.",
        answers: [
            {
                text: "True",
                correct: true
            },
            {
                text: "False",
                correct: false
            }
          ]
        }
    ]
 
return(
<div>
    <Section>
<Section>
      <Header className={classes.headerFirst}>Victorina Game</Header>
      </Section>
    <Section>
      <Header>Which mountain range is Armenia in?</Header>
    </Section>
<Section>
<Button >Swiss Alps</Button>
<Button >Caucasus</Button>
<Button>Himalayas</Button>
<Button>Urals</Button>
</Section>
<Section>
      <Header>What is the main religion of Armenia?</Header>
    </Section>
<Section>
<Button>Islam</Button>
<Button >Christianity</Button>
<Button>Judaism</Button>
<Button>Buddhism</Button>
</Section> 
<Section>
      <Header>What is the largest city in Armenia?</Header>
    </Section>
<Section>
<Button>Gyumri</Button>
<Button>Tbilisi</Button>
<Button>Van</Button>
<Button>Yerevan</Button>
</Section>
<Section>
      <Header>There are more letters in the Armenian alphabet than the English alphabet.</Header>
    </Section>
<Section>
<Button>True</Button>
<Button>False</Button>
</Section>
</Section>
</div>
    );
}
export default Question