const { Router } = require('express');
const router = Router();
const TableItem = require('../model/requisitionModel');

router.get('/getAll', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: 'Не получилось достать все заявки' })
    }
})

router.post('/requisition', async (req, res) => {

    try {
        const { companyName, FullName, contactPhone, comment, ati } = req.body
        console.log(companyName, FullName, contactPhone, comment, ati)
        const Data = new Date();
        const Year = Data.getFullYear();
        const Month = Data.getMonth();
        const Day = Data.getDate();
        const Hour = Data.getHours();
        const Minutes = Data.getMinutes();
        const time = `${Hour}+${Minutes}  ${Day}:${Month}:${Year}`

        new TableItem({ companyName, FullName, contactPhone, comment, ati, time })
        res.status(201).json({ message: 'Заявка создана' })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Не получилось добавить заявку' })
    }
})

router.put('/requisition', async (req, res) => {
    try {

    } catch (e) {

    }
})

router.delete('/requisition', async (req, res) => {
    try {

    } catch (e) {

    }
})
module.exports = router;