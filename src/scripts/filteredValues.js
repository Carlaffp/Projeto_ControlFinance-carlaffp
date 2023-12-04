const sectionCards = document.querySelector('.cards__container')
import { renderValueCards } from "./renderCards.js"
import { totalSumValues } from "./index.js"

export function filteredTypeValues(insertedValues){
  const allButton = document.querySelector('#all')
  const enterButton = document.querySelector('#enter')
  const outButton = document.querySelector('#out')

  enterButton.addEventListener('click',() =>{
    
    let entries = insertedValues.filter((element) =>
      element.categoryID == 0 )
    renderValueCards(entries)
    totalSumValues(entries)
  })

  outButton.addEventListener('click',() =>{
    
    let out = insertedValues.filter((element) => element.categoryID == 1)
    renderValueCards(out)
    totalSumValues(out)
  })

  allButton.addEventListener('click',() =>{
    renderValueCards(insertedValues)
    totalSumValues(insertedValues)
  })
}