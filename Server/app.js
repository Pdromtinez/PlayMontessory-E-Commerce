import  express  from "express";
import cors from "cors";
import userRoutes from "./Routes/users.routes.js";
import ageRoutes from "./Routes/age.routes.js";


export const app = express()
app.get('/', (req , res) =>{
    res.send('<h1>Hola Backend</h1>')
})

app.use(cors());
app.use(express.json())

app.use("/toymontessori/users", userRoutes);
app.use("/toymontessori/ages", ageRoutes);
