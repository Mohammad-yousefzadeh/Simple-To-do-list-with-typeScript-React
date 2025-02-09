import { Reminder } from "../Models/models";


interface ReminderProps{
    items : Reminder[] ,
    onRemoveReminder : (id : number) => void
}

const Train = ({items , onRemoveReminder} : ReminderProps) => {
    return (
        <ul>
            {items.map((item) =>(
                <li key={item.id}>{item.title} <button onClick={()=>onRemoveReminder(item.id)}>Delete</button></li>
            ))}
        </ul>
    );
}
 
export default Train;