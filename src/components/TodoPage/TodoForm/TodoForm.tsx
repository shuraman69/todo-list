import React, {FC, useState} from 'react'


type PropsType = {
    onAdd: (title: string) => void
}

export const TodoForm: FC<PropsType> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const addHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            onAdd(title)
            setTitle('')
        }
    }
    return (
        <div className="row mtx2">
            <div className="input-field col s12">
                <input value={title} onKeyPress={addHandler} onChange={changeHandler} id="text"
                       type="text"
                       placeholder='Введите заметку'/>
            </div>
        </div>
    )
}