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
        const item = await TableItem.find({ companyName })
        res.status(201).json(item)
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

router.delete('/requisition/:code', async (req, res) => {

    try {
        const { code } = req.params
        await TableItem.deleteOne({ _id: code });
        res.status(201).json({ message: 'Заявка удалена' });
    } catch (e) {
        res.status(500).json({ message: 'Не удалить заявку' });
    }
})
router.get('/requisition/:code', async (req, res) => {

    try {
        const { code } = req.params
        console.log(code)
        const requisition = await TableItem.findOne({ _id: code });
        res.status(200).json({ requisition, message: 'Заявка открыта' });
    } catch {
        res.status(500).json({ message: 'Не удалось открыть заявку' });
    }
})
module.exports = router;