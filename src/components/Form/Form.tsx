import { useState } from "react"
import './Form.scss'

const TYPES = ['general', 'dad', 'knock-knock', 'programming']

export interface FormDataStructure {
    name: string;
    type: string;
    count: number;
}

interface FormProps {
    onSubmitData: (data: FormDataStructure) => void
}

export const Form: React.FC<FormProps> = ({ onSubmitData }) => {

    const [formData, setFormData] = useState<FormDataStructure>({
        name: "",
        type: "",
        count: 0,
    })

    console.log(typeof (formData.count))

    const options = []
    for (let i = 0; i < 10; i++) {
        options.push(i + 1)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmitData(formData)
    }

    return (

        <form className="form" onSubmit={handleSubmit}>
            <label className="form__label">
                Your name
                <input
                    className="form__input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className="form__label">
                Select type of Jokes
                <select
                    className="form__input"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select one</option>
                    {TYPES.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </label>

            <label className="form__label">
                Select count of Jokes
                <select
                    className="form__input"
                    name="count"
                    value={formData.count}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select one</option>
                    {options.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </label>

            <button className="form__button" type="submit">Submit</button>
        </form>

    )
}


