import mongoose from "mongoose"
import {Schema}  from "mongoose"



const ProductosSchemma = new Schema({

  nombre:{
    type:String,

  },
  precio:{
    type:Number,
  
  },
  descripcion:{
    type:String,
   
  },
  imagen:{
    type:String

  }

  
})

ProductosSchemma.set("toJSON",{
  transform:(document,returnedObject)=>{
    returnedObject.id=returnedObject._id
  
    delete returnedObject.__v
    delete returnedObject._id
  }
})

export default mongoose.model("Producto",ProductosSchemma)