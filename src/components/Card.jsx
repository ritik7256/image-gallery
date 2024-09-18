import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

function Card() {
  const { images} = useContext(ImageContext);
  

 

  return (
    <div>
      <div className="flex ml-20 mr-20 gap-8 mt-10 flex-wrap">
        {images.map((image) => (
          <div className="card h-[300px] w-[250px] bg-gray-300 rounded-md flex flex-col" key={image.id}>
            <div className="bg-zinc-300 h-[50%] w-full">
              <img
                src={image.largeImageURL}
                alt={image.tags || "Image"}
                className="h-full w-full object-cover rounded-t-md"
              />
            </div>
            <div className="mt-2">
              <div className="flex flex-col text-sm ml-2 mt-2 gap-2">
                <h1>Photo by {image.user}</h1>
                <p>Views:{image.views}</p>
                <p>Downloads:{image.downloads}</p>
                <p>Likes:{image.likes}</p>
              </div>
              <div className="flex gap-2 ml-2 mt-2 text-sm">
                <button className="bg-zinc-600 rounded-lg px-2">{`#${image.tags}`}</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
