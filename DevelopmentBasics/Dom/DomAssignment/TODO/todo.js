function addtoDo(){
   const input =  document.getElementById("input-text")
   const value = input.value.trim()

   const mList = document.getElementById("myList")

   if(value != ""){
    const list = document.createElement('li')
    list.textContent = value
    mList.appendChild(list)
    input.value=""
   }
}