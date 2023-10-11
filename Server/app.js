import  express  from "express";
import cors from "cors";
import "./models/Users.js";
import "./models/products.js";
import "./models/age_filter.js";

export const app = express()
app.get('/', (req , res) =>{
    res.send('<h1>Hola Backend</h1>')
})

app.use(cors());
app.use(express.json())
