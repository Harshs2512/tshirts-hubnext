import connectDB from "@/db/newdb";
import Product from '@/models/productModel';

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
        console.log(req.query)
        const { id } = req.query;
        const resutls = await Product
            .find({
                $or: [
                    { title: { $regex: id, $options: "i" } },
                    { description: { $regex: id, $options: "i" } },
                ],
            })
            // .populate('category')
        res.json(resutls);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error In Search Product API",
            error,
        });
    }
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