const Calculate =(dataobject,buttonName)=>{
  if(buttonName==="+"){
    return dataobject.total + dataobject.next
  }
  if(buttonName==="-"){
    return dataobject.total - dataobject.next
  }
  if(buttonName==="*"){
    return dataobject.total * dataobject.next
  }
  if(buttonName==="/"){
    return dataobject.total / dataobject.next
  }
  if(buttonName==="+/-"){
    return  dataobject.next*-1
  }



}