import { FormEvent, useState } from "react";

interface InputProps {
    onAddReminders : (title : string) => void
}

const Input = ({onAddReminders} : InputProps) => {

    const [title , setTitle] = useState<string>('')

    const hanleForm = (e : FormEvent) =>{
        e.preventDefault()
        if(title.length === 0) return
        onAddReminders(title)
        setTitle('')
    }

    return (
        <>
         <form onClick={hanleForm} >
            <label htmlFor="title">Add</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add something..." />
            <button type="submit">Submit</button>
         </form>
        </>
    );
}
 
export default Input;