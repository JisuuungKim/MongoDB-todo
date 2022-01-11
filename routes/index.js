const router = require("express").Router();
const Todo = require("../modals/Todo")

const attachAsyncErrorHandler = (fn) => {
    const newFn = async (...params) => {
        try {
            return await fn(...params);
        } catch (error) {
            const [req, res] = params;
            console.error(error);
            res.status(400).send({errorMessage: "무언가가 엄청 잘못되었습니다."});
        }
    };
    return newFn;
};

//routes
const endpointBody = attachAsyncErrorHandler(async (req,res)=> {
    const allTodo = await Todo.find();
    throw new Error();
    res.render("index", {todo: allTodo});
});
// const endpointBody = (async (req,res)=> {
//     const allTodo = await Todo.find();
//     res.render("index", {todo: allTodo});
// });
router.get("/", endpointBody);

module.exports = router;
