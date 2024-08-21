import express from 'express'
import con from "../utils/db.js";

const router = express.Router()

router.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee where category_id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
  })

  router.get('/name/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM category where id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
  })

  export {router as CategoryRouter}