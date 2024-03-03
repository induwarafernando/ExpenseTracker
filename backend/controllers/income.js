const IncomeModel = require("../models/IncomeModel");

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
