
/* Desenvolva sua lógica aqui */

import {renderValueCards} from "./renderCards.js"
import { filteredTypeValues } from "./filteredValues.js"
import {insetedNewValue} from "./insertedNewValue.js"

const sectionCards = document.querySelector('.cards__container')

export function totalSumValues(value){
  let totalValues = document.querySelector('.total__valuesSum')
  
  let total = 0
  value.forEach((element) =>{
    if(element.categoryID == 0){
      total += element.value
    } if(element.categoryID == 1){
      total -= element.value
    }
  })

  const divSpan = document.createElement('div')
  divSpan.classList = "divSpan"

  const spanNoValues = document.createElement('h3')
  spanNoValues.classList ="spanNoValue"
  spanNoValues.innerText = 'Nenhum valor cadastrado'
  divSpan.append(spanNoValues)

  const spanRegisterValue = document.createElement('p')
  spanRegisterValue.classList = 'spanRegisterValue'
  spanRegisterValue.innerText = 'Registrar novo valor'
  divSpan.append(spanRegisterValue)
 
 if(total == 0){
  divSpan.style.display = "block"
}else{
  divSpan.style.display = "none"
}
const modalController = document.querySelector('.modal__controller')
spanRegisterValue.addEventListener('click',() =>{
modalController.showModal()

})

    totalValues.innerText = `R$ ${parseFloat(total).toFixed(2)}`
    sectionCards.append(divSpan)   
}

renderValueCards(insertedValues)

filteredTypeValues(insertedValues)

insetedNewValue()


