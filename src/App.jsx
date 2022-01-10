import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
 const App = () => {
  const [addItem, setAddItem] = useState([]);
   const addNote = (note) => {
         setAddItem((prevData) => {
           return [...prevData,note]
         });
      
   };
   const onDelete = (id) =>{
     setAddItem((olddata) => 
       olddata.filter((currdat, index) => {
         return index !== id;

       })
     );

   };
  return (
    <>
    <Header/>
    <Footer/>
    <CreateNote
       passNote={addNote}
    />
    
   { addItem.map((val,index) => {
      return(
        <Note 
        key= {index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem = {onDelete}
    />
      );
    })}

    </>
  );
};
export default App;

