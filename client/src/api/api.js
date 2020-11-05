import axios from 'axios';


export const api = {
    async addRequistion(data) {
        JSON.stringify(data)
        try {
            return await axios.post('/api/requisition', data)
        } catch (error) {
            console.log(error)
        }
    }
}