const router = require('express').Router()
const Todo = require("../modals/Todo")

//routes
router.post("/add/todo", (req,res)=> {
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    newTodo.save()
        .then(()=> {
            console.log("Success")
            res.redirect("/")
        })
        .catch((err)=> console.error(err))
})

.get("/delete/todo/:id", (req,res)=> {
    const {_id} = req.params;
    Todo.deleteOne({_id})
        .then(()=>{
            console.log("Deleted Todo Successfully!")
            res.redirect("/")
        })
        .catch((err)=> console.error(err))
})

module.exports = router;

