import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../index.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
  },
  {
    id: 2,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rw52nl9NkWjsjr_-EPS3rKEpblG8jn4I3xpXiBTr&s",
  },
  {
    id: 3,
    url:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id), //which image we want to add to board
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id); //filter picture to only include the picture with id equal to id
    setBoard((board) => [...board, pictureList[0]]);  // we want to add new pic that we grab in prev line and grab the first one چیزایی که تو برد ذخیره شد بود را میخواهیم نگه داریم
  }; 
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture 
          url={picture.url} 
           id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => { //board here stores data that we drops in
          return <Picture   
          url={picture.url} 
          id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;