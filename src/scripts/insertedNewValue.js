const sectionCards = document.querySelector('.cards__container')
import { renderValueCards } from "./renderCards.js"
import { totalSumValues } from "./index.js"

export function insetedNewValue(){
const modalController = document.querySelector('.modal__controller')
const insertButton = document.querySelector('.insertButton')
const enterButton = document.querySelector('.optionButtonEnter')
const outButton = document.querySelector('.optionButtonOut')
const deletButton = document.querySelector('.deletButton')
let inputValue = document.querySelector('.inputValue')

  insertButton.addEventListener('click',(e) =>{
    e.preventDefault()
    
    if(inputValue.value> 0 && enterButton.classList.contains("active") || outButton.classList.contains("active")){
      
      let newValue ={
        id:insertedValues.length + 1,
        value:Number(inputValue.value),
        categoryID: 0
      }

      if(enterButton.classList.contains("active") == true){
        newValue.categoryID = 0
      }else if(outButton.classList.contains("active") == true){
        newValue.categoryID = 1
      }

      insertedValues.push(newValue)
      renderValueCards(insertedValues)
      totalSumValues(insertedValues)
    
      modalController.close()
      inputValue.value = ''
      enterButton.classList.remove('active')
      outButton.classList.remove('active')
      }else{
         alert('inserir valor e escolher tipo valor ')
      }
    }
  )
  deletButton.addEventListener('click',() =>{
    modalController.close()
    inputValue.value = ''
    enterButton.classList.remove('active')
    outButton.classList.remove('active')
  })
}