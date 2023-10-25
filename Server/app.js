import  express  from "express";
import cors from "cors";
import userRoutes from "./Routes/users.routes.js";
import ageRoutes from "./Routes/age.routes.js";
import productsRoutes from "./Routes/products.routes.js"
import authRoutes from "./Routes/auth.routes.js"
import rolesRoutes from "./Routes/roles.routes.js"
import bodyParser from "body-parser"
export const app = express()

app.get('/', (req , res) =>{
    res.send('<h1>Hola Backend</h1>')
})

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())



app.use("/playmontessori/users", userRoutes);
app.use("/playmontessori/ages", ageRoutes);
app.use("/playmontessori/products", productsRoutes);
app.use("/playmontessori", authRoutes);
app.use("/playmontessori/roles", rolesRoutes);
