const sectionCards = document.querySelector('.cards__container')

import { totalSumValues } from "./index.js"

  export function renderValueCards(insertedValues){
  const sectionCards = document.querySelector('.cards__container')

  sectionCards.innerHTML = ''

  insertedValues.forEach((value) =>{
    const card = valueCards(value)
    sectionCards.appendChild(card)
 })
}

function valueCards(value){

  const card = document.createElement('li')
  card.classList = 'card__list'
  
  const divCategoryAndIcon = document.createElement('div')
  divCategoryAndIcon.classList= "CategoryAndIcon"

  const values = document.createElement('p')
  values.className = 'values'
  values.innerText = `R$ ${parseFloat(value.value).toFixed(2)}`

  let category = document.createElement('span')
  category.classList = "categoryValue"
  
  if(value.categoryID == 0){
    
    category.innerText = valuesCategory[0]
    
  }else{
    category.innerText = valuesCategory[1]
 }
  
  const imageButtonDelet = document.createElement('img')
  imageButtonDelet.src = "./src/assets/iconelixeira.svg"
  imageButtonDelet.classList= 'deletValue'
  imageButtonDelet.id =value.id

  imageButtonDelet.addEventListener("mouseover",() =>{
    imageButtonDelet.src = "/src/assets/iconeLixeiraHover.svg"
  })

  imageButtonDelet.addEventListener('mouseout',() =>{
    imageButtonDelet.src = "./src/assets/iconelixeira.svg"
  })

  divCategoryAndIcon.append(category,imageButtonDelet)
   card.append(values, divCategoryAndIcon)

  imageButtonDelet.addEventListener('click',(e) =>{
    let buttonId = e.target.id
    
    let index = insertedValues.findIndex(element => element.id==buttonId)
    
    insertedValues.splice(index, 1)
     
    renderValueCards(insertedValues)
    totalSumValues(insertedValues)  
  })
  
   totalSumValues(insertedValues)

  return card
}
