
const input = document.querySelector('input')
const mainDiv = document.querySelector('div')
const btn = document.querySelector('button')
// divTask

// divTasknew



btn.addEventListener('click', () => {
    if (input.value != '') {
        //Task
        const divTask = document.createElement('div')
        divTask.setAttribute("class","flex bg-gray-200 px-1 justify-between") 
        // ตบเเต่ง
        const div = document.createElement('div')
        div.innerHTML = input.value
        divTask.append(div)
        
        // del 
        const delBtn = document.createElement('button')
        delBtn.setAttribute("class","py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none")
        delBtn.innerHTML = 'delete'
        delBtn.addEventListener('click', () => {
            mainDiv.remove(divTask)
        })

        const doneBtn = document.createElement('button')
        doneBtn.setAttribute("Class","py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 focus:outline-none")
        doneBtn.innerHTML = 'done'
        doneBtn.addEventListener('click',() => {
            div.style.textDecoration = 'line-through'
        })

        divTask.append(delBtn)
        divTask.append(doneBtn)
        divTask.append(document.createElement('br'))
        mainDiv.append(divTask)
    }
    else alert("Task cannot be empty");

})


