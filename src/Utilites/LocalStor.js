const getStorBook= () =>{
    const bookStor=localStorage.getItem('book');

    if(bookStor){
      return JSON.parse(bookStor);
    }else{
        return [];
    }
}

const addBookLT= id =>{
   const bookStoring=getStorBook();
   const bookIdMs=bookStoring.find(booking => booking == id);

   if(!bookIdMs){
       bookStoring.push(id);
       localStorage.setItem('book', JSON.stringify(bookStoring));
   }
}

export {addBookLT, getStorBook}