const IncomeSchema = require("../models/IncomeModel");
const { param } = require("../routes/transactions");

exports.addIncome = async (req, res) => {
    const { title, amount, date, category, description } = req.body;

    const income = new IncomeSchema({
        title,
        amount,
        date,
        category,
        description
    });

    try {
        // Validation
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ message: "Amount must be a positive number" });
        }

        await income.save();
        res.status(200).json({ message: "Income added successfully" });
    } catch (error) {
        console.error("Error adding income:", error);
        res.status(500).json({ message: "Server error" });
    }
    console.log(income);
};

exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(income);
    } catch (error) {
        console.error("Error getting income:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    console.log(params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: "Income deleted successfully" });
        })
        .catch((error) => {
            console.error("Error deleting income:", error);
            res.status(500).json({ message: "Server error" });
        });

}