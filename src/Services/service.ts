import axios from "axios";
import { Reminder } from "../Models/models";

// class FetchingAPI {
//     http = axios.create({
//         baseURL : "https://jsonplaceholder.typicode.com"
//     })

//     getReminder = async() =>{
//         const response = await this.http.get<Reminder[]>('/todos')
//         return response.data
//     }

//     postReminder = async(data : string) =>{
//         const response = await this.http.post<Reminder>('/todos' , {data})
//         return response.data
//     }

//     deleteReminders = async(id : number) =>{
//         const response = await this.http.delete('/todos/' + id)
//         return response.data
//     }
// }

class FetchingAPI{
    getReminder = async() =>{
        const response = await axios.get<Reminder[]>('https://jsonplaceholder.typicode.com/todos')
        return response.data
    }

    postReminder = async(title : string) =>{
        const response = await axios.post<Reminder>('https://jsonplaceholder.typicode.com/todos' , {title})    
        return response.data
    }

    deletReminder = async(id : number) =>{
        const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
        return response.data
    } 
}

export default new FetchingAPI()