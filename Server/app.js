import  express  from "express";
import cors from "cors";
import productRoutes from "../Server/Routes/products.routes.js"


export const app = express()
app.get('/', (req , res) =>{
    res.send('<h1>Hola Backend</h1>')
})

app.use(cors());
app.use(express.json())

app.use("/playmontessori/products", productRoutes);
