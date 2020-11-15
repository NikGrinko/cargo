import axios from 'axios';
export const api = {
    async addRequistion(data) {
        JSON.stringify(data)
        try {
            return await axios.post('/api/requisition', data)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteRequistion(id) {
        try {
            return await axios.delete(`/api/requisition/${id}`)
        } catch (error) {
            console.log(error);
        }
    },
    async getAllRequistion() {
        try {
            return await axios.get('/api/getAll')
        } catch (error) {
            console.log(error);
        }
    },
    async openRequistion(id) {
        try {
            return await axios.get(`/api/requisition/${id}`)
        }
        catch (error) {
            console.log(error);
        }
    }
}