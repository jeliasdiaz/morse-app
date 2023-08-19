"use client";

import { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs"
const MORSE_CODE = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "Ñ": "--.--",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"
};

export const MorseTranslator = () => {
    const [morse, setMorse] = useState("")
    const [text, setText] = useState("")
    const [textToMorse, setTextToMorse] = useState(true)

    const onMorse = (e) => {
        const data = e.target.value;
        setMorse(data);
    };
    const onText = (e) => {
        const data = e.target.value.toUpperCase();
        setText(data)
    };

    useEffect(() => {
        const decodeMorse = (morseCode) => {
            return morseCode
                .trim()
                .split(" ")
                .map(code => {
                    if (code === "/") {
                        return " "; // Replace Morse space with regular space
                    } else {
                        for (const [key, value] of Object.entries(MORSE_CODE)) {
                            if (value === code) {
                                return key; // Return the letter for the Morse code
                            }
                        }
                    }
                    return ""
                })
                .join("");
        };

        setText(decodeMorse(morse));
    }, [morse]);

    useEffect(() => {

        const encodeMorse = (text) => {
            return text
                .split("")
                .map((letter) => {
                    if (letter === " ") {
                        return " / "; // Return space for spaces
                    } else {
                        return MORSE_CODE[letter]
                    }
                })
                .join(" ");
        };
        setMorse(encodeMorse(text));

    }, [text])

    const switchMorse = () => setTextToMorse(!textToMorse)


    const copyToClipboardLeft = () => {
        const dataToCopy = textToMorse ? text : morse;
        navigator.clipboard.writeText(dataToCopy);
    };
    const copyToClipboardRight = () => {
        const dataToCopy = textToMorse ? morse : text;
        navigator.clipboard.writeText(dataToCopy);
    };

    return (
        <div className="mb-5">
            <div className="mt-4 mb-4">
                <div className="flex gap-4 mt-3 mb-3 justify-center">
                    <div className="md:flex gap-3 p-6">
                        <div>
                            <div className="flex">
                                <h5 className="mb-2 text-lg font-sans font-semibold dark:text-slate-900">{textToMorse ? "Texto" : "Morse"}</h5>
                                <MdContentCopy className="ms-auto hover:bg-gray-700/50 p-1.5 rounded-md cursor-pointer dark:text-slate-900 dark:hover:bg-gray-400/50" onClick={copyToClipboardLeft} size={30} />

                            </div>
                            <textarea type="text" className="w-80 md:w-[28rem] h-64 p-4 rounded bg-gray-800 dark:bg-slate-400  focus:outline-gray-700 dark:focus:outline-gray-500 outline-none" onChange={textToMorse ? (e) => onText(e) : (e) => onMorse(e)} value={textToMorse ? text : morse}></textarea>
                        </div>

                        <BsArrowLeftRight onClick={switchMorse} size={30} className="hover:bg-gray-700/50 p-1.5 rounded-md mx-auto md:mx-0 mt-2 md:mt-0 cursor-pointer dark:text-slate-900 dark:hover:bg-gray-400/50" />

                        <div>
                            <div className="flex">
                                <h5 className="mb-2 text-lg font-sans font-semibold dark:text-slate-900">{textToMorse ? "Morse" : "Texto"}</h5>
                                <MdContentCopy className="ms-auto hover:bg-gray-700/50 p-1.5 rounded-md cursor-pointer dark:text-slate-900 dark:hover:bg-gray-400/50" onClick={copyToClipboardRight} size={30} />

                            </div>
                            <textarea type="text" className="w-80 md:w-[28rem] h-64 p-4 rounded bg-gray-800 dark:bg-slate-400 focus:outline-gray-700 dark:focus:outline-gray-500 outline-none" readOnly={true} value={textToMorse ? morse : text} ></textarea>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-center text-3xl md:text-4xl text-gray-200 dark:text-gray-900">Alfabeto del código Morse</h4>

                    <h6 className="text-center text-xl md:text-2xl text-gray-300 dark:text-slate-800 mt-4 mb-3">Letras</h6>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-slate-800 rounded-md overflow-clip">
                        <tbody className="text-xs text-gray-400 uppercase bg-gray-700 dark:bg-slate-400 dark:text-slate-700 rounded-md">
                            <tr className="border-b bg-gray-800 dark:bg-slate-500">
                                <td className="tableItem">A</td>
                                <td className="tableItem">{MORSE_CODE.A}</td>
                                <td className="tableItem">G</td>
                                <td className="tableItem">{MORSE_CODE.G}</td>
                                <td className="tableItem">M</td>
                                <td className="tableItem">{MORSE_CODE.M}</td>
                                <td className="tableItem">S</td>
                                <td className="tableItem">{MORSE_CODE.S}</td>
                                <td className="tableItem">Y</td>
                                <td className="tableItem">{MORSE_CODE.Y}</td>
                            </tr>
                            <tr>
                                <td className="tableItem">B</td>
                                <td className="tableItem">{MORSE_CODE.B}</td>
                                <td className="tableItem">H</td>
                                <td className="tableItem">{MORSE_CODE.H}</td>
                                <td className="tableItem">N</td>
                                <td className="tableItem">{MORSE_CODE.N}</td>
                                <td className="tableItem">T</td>
                                <td className="tableItem">{MORSE_CODE.T}</td>
                                <td className="tableItem">Z</td>
                                <td className="tableItem">{MORSE_CODE.Z}</td>
                            </tr>
                            <tr className="border-b bg-gray-800 dark:bg-slate-500">
                                <td className="tableItem">C</td>
                                <td className="tableItem">{MORSE_CODE.C}</td>
                                <td className="tableItem">I</td>
                                <td className="tableItem">{MORSE_CODE.I}</td>
                                <td className="tableItem">O</td>
                                <td className="tableItem">{MORSE_CODE.O}</td>
                                <td className="tableItem">U</td>
                                <td className="tableItem">{MORSE_CODE.U}</td>
                                <td colSpan={2} className="tableItem"></td>
                            </tr>
                            <tr>
                                <td className="tableItem">D</td>
                                <td className="tableItem">{MORSE_CODE.D}</td>
                                <td className="tableItem">J</td>
                                <td className="tableItem">{MORSE_CODE.J}</td>
                                <td className="tableItem">P</td>
                                <td className="tableItem">{MORSE_CODE.P}</td>
                                <td className="tableItem">V</td>
                                <td className="tableItem">{MORSE_CODE.V}</td>
                                <td colSpan={2} className="tableItem"></td>
                            </tr>
                            <tr className="border-b bg-gray-800 dark:bg-slate-500">
                                <td className="tableItem">E</td>
                                <td className="tableItem">{MORSE_CODE.E}</td>
                                <td className="tableItem">K</td>
                                <td className="tableItem">{MORSE_CODE.K}</td>
                                <td className="tableItem">Q</td>
                                <td className="tableItem">{MORSE_CODE.Q}</td>
                                <td className="tableItem">W</td>
                                <td className="tableItem">{MORSE_CODE.W}</td>
                                <td colSpan={2} className="tableItem"></td>
                            </tr>
                            <tr>
                                <td className="tableItem">F</td>
                                <td className="tableItem">{MORSE_CODE.F}</td>
                                <td className="tableItem">L</td>
                                <td className="tableItem">{MORSE_CODE.L}</td>
                                <td className="tableItem">R</td>
                                <td className="tableItem">{MORSE_CODE.R}</td>
                                <td className="tableItem">X</td>
                                <td className="tableItem">{MORSE_CODE.X}</td>
                                <td colSpan={2} className="px-6 py-4 tableItem"></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="md:flex justify-around">
                        <div>
                            <h6 className="text-center text-xl md:text-2xl text-gray-300 dark:text-slate-800  mt-4 mb-3">Números</h6>
                            <table className="w-full md:w-96 text-sm text-left  rounded-md overflow-clip">
                                <tbody className="text-xs text-gray-400  bg-gray-700 dark:bg-slate-400 dark:text-slate-700 rounded-md">
                                    <tr className="border-b bg-gray-800 dark:bg-slate-500 ">
                                        <td className="tableItem">0</td>
                                        <td className="tableItem">{MORSE_CODE[0]}</td>
                                        <td className="tableItem">6</td>
                                        <td className="tableItem">{MORSE_CODE[6]}</td>
                                    </tr>
                                    <tr>
                                        <td className="tableItem">1</td>
                                        <td className="tableItem">{MORSE_CODE[1]}</td>
                                        <td className="tableItem">7</td>
                                        <td className="border-r-0 border-b-gray-400 tableItem">{MORSE_CODE[7]}</td>
                                    </tr>
                                    <tr className="border-b bg-gray-800 dark:bg-slate-500">
                                        <td className="tableItem">2</td>
                                        <td className="tableItem">{MORSE_CODE[2]}</td>
                                        <td className="tableItem">8</td>
                                        <td className="tableItem">{MORSE_CODE[8]}</td>
                                    </tr>
                                    <tr>
                                        <td className="tableItem">3</td>
                                        <td className="tableItem">{MORSE_CODE[3]}</td>
                                        <td className="tableItem">9</td>
                                        <td className="tableItem">{MORSE_CODE[9]}</td>
                                    </tr>
                                    <tr className="border-b bg-gray-800 dark:bg-slate-500">
                                        <td className="tableItem">4</td>
                                        <td className="tableItem">{MORSE_CODE[4]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                    <tr>
                                        <td className="tableItem">5</td>
                                        <td className="tableItem">{MORSE_CODE[5]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h6 className="text-center text-xl md:text-2xl text-gray-300 dark:text-slate-800  mt-4 mb-3">Puntuación</h6>
                            <table className="w-full md:w-96 text-sm text-left rounded-md overflow-clip">
                                <tbody className="text-xs text-gray-400 bg-gray-700 dark:bg-slate-400 dark:text-slate-700 rounded-md">
                                    <tr className="border-b bg-gray-800 dark:bg-slate-500 ">
                                        <td className="tableItem">.</td>
                                        <td className="tableItem">{MORSE_CODE["."]}</td>
                                        <td className="tableItem">{"("}</td>
                                        <td className="tableItem">{MORSE_CODE["("]}</td>
                                        <td className="tableItem">+</td>
                                        <td className="tableItem">{MORSE_CODE["+"]}</td>
                                        <td className="tableItem">" "</td>
                                        <td className="tableItem">{MORSE_CODE[" "]}</td>
                                    </tr>
                                    <tr>
                                        <td className="tableItem">,</td>
                                        <td className="tableItem">{MORSE_CODE[","]}</td>
                                        <td className="tableItem">{")"}</td>
                                        <td className="tableItem">{MORSE_CODE[")"]}</td>
                                        <td className="tableItem">-</td>
                                        <td className="tableItem">{MORSE_CODE["-"]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                    <tr className="border-b bg-gray-800 dark:bg-slate-500 ">
                                        <td className="tableItem">?</td>
                                        <td className="tableItem">{MORSE_CODE["?"]}</td>
                                        <td className="tableItem">&</td>
                                        <td className="tableItem">{MORSE_CODE["&"]}</td>
                                        <td className="tableItem">_</td>
                                        <td className="tableItem">{MORSE_CODE["_"]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                    <tr>
                                        <td className="tableItem">'</td>
                                        <td className="tableItem">{MORSE_CODE["'"]}</td>
                                        <td className="tableItem">:</td>
                                        <td className="tableItem">{MORSE_CODE[":"]}</td>
                                        <td className="tableItem">"</td>
                                        <td className="tableItem">{MORSE_CODE["\""]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                    <tr className="border-b bg-gray-800 dark:bg-slate-500 ">
                                        <td className="tableItem">!</td>
                                        <td className="tableItem">{MORSE_CODE["!"]}</td>
                                        <td className="tableItem">;</td>
                                        <td className="tableItem">{MORSE_CODE[";"]}</td>
                                        <td className="tableItem">$</td>
                                        <td className="tableItem">{MORSE_CODE["$"]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                    <tr>
                                        <td className="tableItem">/</td>
                                        <td className="tableItem">{MORSE_CODE["/"]}</td>
                                        <td className="tableItem">=</td>
                                        <td className="tableItem">{MORSE_CODE["="]}</td>
                                        <td className="tableItem">@</td>
                                        <td className="tableItem">{MORSE_CODE["@"]}</td>
                                        <td colSpan={2} className="tableItem"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {/* <CollapseInformation name="¿Qué es el código Morse?" id="morse" >
                <p>
                    Originado en el siglo XIX , el código Morse es un sistema de comunicación telegráfica que utiliza combinaciones de puntos y rayas para representar letras, números y caracteres especiales. Cada letra o símbolo se representa mediante una secuencia única de puntos (representados como cortos pulsos) y rayas (representadas como largos pulsos).
                    <br />
                    <br />
                    Este sistema de código permitía a los operadores enviar mensajes codificados a través de líneas telegráficas y, más tarde, a través de señales de radio. Aunque ha perdido gran parte de su uso práctico con el avance de las tecnologías de comunicación modernas, el código Morse sigue siendo relevante en algunas áreas, como la navegación marítima y aérea, así como en situaciones de emergencia, donde puede ser utilizado como una forma de comunicación de respaldo.
                </p>
            </CollapseInformation> */}
        </div>

    )
}
