const container=document.querySelector(".container")
const resetButton=document.querySelector("button")

const createRandomRGB=()=>{
   const r =Math.floor(Math.random()*256)
   const g =Math.floor(Math.random()*256)
   const b =Math.floor(Math.random()*256)
   console.log(r);
   return { r, g, b}
}
const createGrid =  (amountOfGrids)=>{
   const wrapper=document.createElement("div")
   wrapper.classList.add("wrapper")


   for(i=0; i<amountOfGrids; i++){
      const row=document.createElement("div")
      row.classList.add("grid-row")
      for (let j=1; j<amountOfGrids; j++){
         const { r, g, b}=createRandomRGB();
         const widthAndHeight=960/amountOfGrids;
         const gridBox = document.createElement("div")
         gridBox.classList.add("grid-box");
         gridBox.style.width=`${widthAndHeight}px`
         gridBox.style.height=`${widthAndHeight}px`
         gridBox.addEventListener("mouseenter", ()=>{
            const bgColor="rgb("+r+","+g+","+b+")"; 
            gridBox.style.background=bgColor;
            console.log(bgColor)
         })
         row.appendChild(gridBox)
      }
      wrapper.appendChild(row)
   }
   container.appendChild(wrapper);
}
resetButton.addEventListener("click", ()=>{
   let userSize=Number(prompt("How many rows do you wish to have?"))
   while (userSize>100){
      userSize = Number(prompt("Pick a number below 100?"))
   }
   const wrapper=document.querySelector(".wrapper")

   if(!wrapper){
      createGrid(userSize)
   }
   else{
      wrapper.remove()
      createGrid(userSize)
   }
})