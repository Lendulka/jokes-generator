import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline'
import { useState } from "react"
import './Joke.scss'

interface JokeStructure {
    setup: string;
    punchline: string;
    showRating: boolean;
}

export const Joke: React.FC<JokeStructure> = ({ setup, punchline, showRating }) => {

    const [thumbUp, setThumbUp] = useState<number>(0)
    const [thumbDown, setThumbDown] = useState<number>(0)

    return (
        <div className="joke">
            <div className="joke__body">
                <p className="joke__body__setup">{setup}</p>
                <p className="joke__body__punchline">{`>> ${punchline}`}</p>
            </div>
            {showRating && (
                <div className="joke__rating">
                    <div className="joke__rating__icon"><HandThumbUpIcon
                        onClick={() => { setThumbUp(thumbUp + 1) }} />+ {thumbUp}
                    </div>
                    <div className="joke__rating__icon"><HandThumbDownIcon
                        onClick={() => { setThumbDown(thumbDown + 1) }} />+ {thumbDown}
                    </div>
                </div>
            )}
        </div>
    )
}

