/* Desenvolva sua lógica aqui */
function creatModal(){
  const modalController = document.querySelector('.modal__controller')

  const modalContainer= document.createElement('div')
  modalContainer.classList = 'modal__container'

  const divModalCloseButton = document.createElement('div')
  divModalCloseButton.classList ='button'

  const titleModal = document.createElement('h2')
  titleModal.className = 'title__modal'
  titleModal.innerText = 'Registro de Valor'

  const modalCloseButton = document.createElement('button')
  modalCloseButton.classList = 'closeButton'
  modalCloseButton.innerText = "X"
  divModalCloseButton.appendChild(modalCloseButton)

  const descriptionModal = document.createElement('p')
  descriptionModal.className = 'description__modal'
  descriptionModal.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'

  const inputCaption = document.createElement('p')
  inputCaption.className = 'inputCaption'
  inputCaption.innerText = "Valor"

  const inputValue = document.createElement('input')
  inputValue.setAttribute("type", "number")
  inputValue.setAttribute("id", "number")
  inputValue.setAttribute("placeholder", "R$  00,00")
  inputValue.classList = "inputValue"

  const divOptionValue = document.createElement('div')
  divOptionValue.className = 'optionValue__container'

  const optionValeuTitle = document.createElement('p')
  optionValeuTitle.className = 'optionValueTitle'
  optionValeuTitle.innerText = 'Tipo de Valor'
  
  const enterButton = document.createElement('button')
  enterButton.classList = 'optionButtonEnter'
  enterButton.dataset.categoryId = 0
  enterButton.innerText = 'Entrada'
  
  const outButton = document.createElement('button')
  outButton.classList = 'optionButtonOut'
  
  outButton.dataset.categoryId = 1
  outButton.innerText = 'Saída'

  enterButton.addEventListener('click',(e) =>{
    e.preventDefault()
    if(!enterButton.classList.contains("active")){
      enterButton.classList.add('active')
      outButton.classList.remove("active")
    }else{
      enterButton.classList.remove("active")
    } 
  })
  
  outButton.addEventListener('click',(e) =>{
    e.preventDefault()
    if(!outButton.classList.contains("active")){
      outButton.classList.add('active')
      enterButton.classList.remove('active')
    }else{
      outButton.classList.remove("active")
    }
    
  })
  divOptionValue.append(optionValeuTitle, enterButton , outButton)
  
  const divDeletAndInsertButton = document.createElement('div')
  divDeletAndInsertButton.className = 'deletAndInsert__container'

  const deletButton = document.createElement('button')
  deletButton.classList = 'deletButton'
  deletButton.innerText = 'Cancelar'

  const insertButton = document.createElement('button')
  insertButton.classList = 'insertButton'
  insertButton.innerText = 'Inserir Valor'

  divDeletAndInsertButton.append(deletButton, insertButton)

  modalContainer.append(titleModal, divModalCloseButton, descriptionModal,inputCaption,inputValue,divOptionValue,divDeletAndInsertButton)
  modalController.append(modalContainer)

  return modalController
}

function handleModal(){
  const button = document.querySelector('.nav__button')
  const modalController = document.querySelector('.modal__controller')

  button.addEventListener('click', (e) => {
    e.preventDefault()

    modalController.showModal()

    closeModal()   
  })
}

function closeModal(){
  const closeButton = document.querySelector('.closeButton')
  const modalController = document.querySelector('.modal__controller')

  closeButton.addEventListener('click',(e) => {
    e.preventDefault()
    modalController.close()
  })
}

creatModal()
handleModal()


