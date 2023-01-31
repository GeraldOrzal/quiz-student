export const formatDate = (oldDate) =>{
    const date = new Date(oldDate);

    return `${date.getMonth()+1<10? "0"+(date.getMonth()+1).toString():date.getMonth()+1}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
      
}


