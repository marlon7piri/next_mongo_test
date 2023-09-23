import mongoose from 'mongoose';
import {MONGO_URL_ATLAS ,DB_URI} from './config.js';

const connectionDB = ()=>{

  try {
    const db = mongoose.connect(MONGO_URL_ATLAS)
  console.log("Conectando a la base de datos");
  } catch (error) {
    console.log(error);
  }
}

export default connectionDB