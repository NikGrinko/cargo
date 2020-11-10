const { Router } = require('express');
const router = Router();
const TableItem = require('../model/requisitionModel');

function timeNow() {
    const Data = new Date();
    const Year = Data.getFullYear();
    const Month = Data.getMonth();
    const Day = Data.getDate();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();
    const time = `${Hour}:${Minutes}  ${Day}:${Month}:${Year}`
    return time;
}

router.get('/getAll', async (req, res) => {
    try {
        const allRequisition = await TableItem.find();
        res.status(200).json({ allRequisition })


    } catch (e) {
        res.status(500).json({ message: 'Не получилось достать все заявки' })
    }
})

router.post('/requisition', async (req, res) => {


    try {

        const { companyName, FullName, contactPhone, comment, ati } = req.body
        const time = timeNow();
        const newRequisition = new TableItem({ companyName, FullName, contactPhone, comment, ati, time });
        await newRequisition.save()
        res.status(201).json({ companyName, FullName, contactPhone, comment, ati, time, message: 'Заявка создана' })
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