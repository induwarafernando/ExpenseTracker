const ExpenseSchema = require("../models/ExpenseModel");
const { param } = require("../routes/transactions");

exports.addExpense = async (req, res) => {
    const { title, amount, date, category, description } = req.body;

    const expense = new ExpenseSchema({
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

        await expense.save();
        res.status(200).json({ message: "Expense added successfully" });
    } catch (error) {
        console.error("Error adding expense:", error);
        res.status(500).json({ message: "Server error" });
    }
    console.log(expense);
};

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expense);
    } catch (error) {
        console.error("Error getting expense:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: "Expense deleted successfully", deletedExpense: expense });
        })
        .catch((error) => {
            console.error("Error deleting expense:", error);
            res.status(500).json({ message: "Server error" });
        });
}
