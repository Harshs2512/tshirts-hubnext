import connectDB from "@/db/newdb";
import Curriculum from '@/models/productModel';

const handler = (req, res) => {
    if (req.method === 'GET') {
        return getHandler(req, res);
    }
    if (req.method === 'DELETE') {
        return deleteHandler(req, res);
    }
    else {
        return res.status(400).send("Method not allow")
    }
};

const getHandler = async (req, res) => {
    await connectDB();
    try {
        const records = await Curriculum.findById(req.query.id);
        console.log(records)
        if (records) {
            res.status(200).json(records)
        } else {
            res.status(404).send({ message: 'No data found' });
        };
    }
    catch (error) {
        res.status(500).send(error)
    };
};

const deleteHandler = async (req, res) => {
    await connectDB();
    try {
        const record = await Curriculum.findById(req.query.id);
        if (!record) {
            return res.status(404).json({ message: 'No record found' });
        };
        await Curriculum.findByIdAndDelete(req.query.id);
        res.status(200).json({ success: true, message: 'Record successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

export default handler;