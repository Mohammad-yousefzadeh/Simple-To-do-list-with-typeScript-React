import { useEffect, useState } from "react";
import Train from "./Components/training";
import { Reminder } from "./Models/models";
import API_SERVICES from './Services/service'
import Input from "./Components/input";

const App = () => {

  const [reminders , setReminders] = useState<Reminder[]>([])
  
  useEffect(()=>{
          loadApi()
  } , [])
  
  const loadApi = async() =>{
      const response = await API_SERVICES.getReminder()
      setReminders(response)
  }

  const removeReminder = (id : number) =>{
    const response = reminders.filter((e)=> e.id !== id)
    setReminders(response)
  }

  const addReminder = async(title : string) =>{  
    const response = await API_SERVICES.postReminder(title)
    setReminders([response , ...reminders])   
  }
  
  return (
    <>
      <Input onAddReminders={addReminder}  />
      <Train items={reminders} onRemoveReminder={removeReminder} />   
    </>
  );
}

export default App;
