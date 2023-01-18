export const list = document.querySelector('.list')

export const form = document.createElement('form')

const main = document.querySelector('.main')

const inputForTask = document.createElement('input')
inputForTask.name = 'nameInput'

const btn = document.createElement('button')
btn.type = 'submit'
btn.textContent = 'Add'

form.append(inputForTask, btn)

main.append(form)
