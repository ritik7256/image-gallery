
import { useState } from "react";
import { createContext } from "react";
 export const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const[input,setinput]=useState('');
    const [images,setImages]=useState([]);
      const Url=`https://pixabay.com/api/?key=46049076-baecdd11b26d9ba69f84360dc&q=${input}&image_type=photo`
    
   

    const FetchData=async()=>{
        try{
            const data= await fetch(Url)
        const result=await data.json();
        console.log(result)
        setImages(result.hits);
        }catch(error){
           console.log(error)
        }
        
    }
      


    return(
        <ImageContext.Provider value={{FetchData,input,setinput,images,setImages}}>
            {children}
        </ImageContext.Provider>
    )
}