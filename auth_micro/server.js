import express from 'express'
import cors from 'cors';

import Routes from "./routes/Routes.js"


const app = express()
const PORT = process.env.PORT || 5001

//middlewares
app.use(express.json);
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(Routes);
app.get('/' , (req, res) =>{
    return res.json({message : "IT's working"})
})

app.listen(PORT , () => console.log(`server is listening on port ${PORT}`));