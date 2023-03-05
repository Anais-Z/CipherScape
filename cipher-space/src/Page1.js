import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useLocation, useParams, useEffect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Easy.css"


const TOBE_DECRYPTED = [
    'this is thy sentence one',
    'how much wood does a chuck wood',
    'consumer on a daily basis',
    'i used to best firends with nemo',
    'shame those tasty snacks got em again',
    'i dont blame him',
    'i see absolutely no error in logical reasoning within that matter of events',
    'as a famous man once said',
    'on to the next one',
    "why did the tomato turn red because it saw the salad dressing",
    "what did the left eye say to the right eye between us something smells",
    "why dont scientists trust atoms because they make up everything",
    "why did the math book look so sad because it had too many problems",
    "why do seagulls fly over the sea because if they flew over the bay theyd be bagels",
    "why did the coffee file a police report it got mugged",
    "why did the bicycle fall over because it was two-tired",
    "what do you call a boomerang that doesnt come back a stick",
    "why dont skeletons fight each other they dont have the guts",
    "why dont oysters give to charity because theyre shellfish"
];
const RAN = TOBE_DECRYPTED[Math.floor(Math.random() * TOBE_DECRYPTED.length)];
const RANSTR_INDEX_VAUE = RAN.length;
console.log(RANSTR_INDEX_VAUE);
console.log(RAN);

let GUESSES = 10;
let COUNTER = 0;
const reversed_cipher = RAN.split('').reverse().join('');
console.log('Decrypt the following below: ' + reversed_cipher + '\n');
console.log('**\n');

function Page1() {

    const navigate = useNavigate();
    const location = useLocation();
    const { level } = location.state;
    const [answer, setAnswer] = useState("");
    const [isPrint, setPrint] = useState(false)

    function getAnswer(event) {
        setAnswer(event.target.value);
    }

    function checkAnswer() {
        if (answer == RAN) {
            window.alert("You are correct")
            navigate('/');
        }
        else {
            GUESSES -= 1;
            window.alert(`Incorrect, try again. You have ${GUESSES} guesses left`)
        }

        if (GUESSES == 0) {
            window.alert("Game Over")
            navigate('/');
        }
    }

    return (
        <div className='play-page'>
        <>
            <div className='play-section'>


                <p className='mode-text'>{level} MODE</p>
                <h1> Decrypt The following cipher</h1>
                <h2> {reversed_cipher} </h2>
                <h2 className='guess-text'>GUESSES: {GUESSES}</h2>

                <input className='text-input'
                    type="text"
                    value={answer}
                    onChange={getAnswer}
                    placeholder='Enter Text'
                    style={{ textAlign: "center" }} />
                <div>
                    <button className='submit-button' onClick={checkAnswer}> SUBMIT</button>
                </div>
            </div>
        </>
        </div>
    )
}

export default Page1;