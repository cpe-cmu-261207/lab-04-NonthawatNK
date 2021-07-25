

const input = document.querySelector('input')


const mainDiv = document.querySelector('#center')
const doneDiv = document.querySelector('#done')


let todolist = []
let donelist = []
todolist = JSON.parse(localStorage.getItem('todolist'))
donelist = JSON.parse(localStorage.getItem('donelist'))
if(todolist === null) todolist = []
if(donelist === null) donelist = []


const loadlist = (text, value) => {
    if (text != '') {
        const divTask = document.createElement('div')
        divTask.setAttribute("class","flex justify-between py-2 px-3 bg-white rounded-lg placeholder-gray-400 text-gray-900 inline-block focus:ring-blue-600 border-b-2 border-indico-100 font-mono")
        const div = document.createElement('div')
        div.innerHTML = text
        divTask.append(div)

        const divTasknew = document.createElement('div')
        divTasknew.setAttribute("class", "flex ")
        divTask.append(divTasknew)
        divTasknew.style.visibility = 'hidden'
        divTask.addEventListener('mouseenter', () => {
            if (value === 0) {
                divTasknew.style.visibility = 'visible'
            }
            else if (value === 1) {
                divTasknew.style.visibility = 'hidden'
            }
        })
        divTask.addEventListener('mouseleave', () => {
            divTasknew.style.visibility = 'hidden'

        })


        const doneBtn = document.createElement('button')
        doneBtn.setAttribute("Class","py-2 px-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none border-2 font-mono")
        doneBtn.innerHTML = 'Done'
        if (value === 1) div.style.textDecoration = 'line-through'
        doneBtn.addEventListener('click', () => {
            div.style.textDecoration = 'line-through'
            divTask.remove()
            doneDiv.insertBefore(divTask, doneDiv.firstChild)
            divTasknew.remove()
            donelist.push(div.innerHTML)
            todolist.splice(todolist.findIndex(x => (x === div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
            localStorage.setItem('donelist', JSON.stringify(donelist))
        })
        const delBtn = document.createElement('button')
        delBtn.setAttribute("class","py-2 px-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none border-2 font-mono")
        delBtn.innerHTML = 'Delete'
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(divTask)
            todolist.splice(todolist.findIndex(x => (x === div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
        })

        divTasknew.append(doneBtn)
        divTasknew.append(delBtn)
        if(value === 0) mainDiv.insertBefore(divTask, mainDiv.firstChild)
        else if(value === 1) doneDiv.insertBefore(divTask, doneDiv.firstChild)
    }
     else alert("Task cannot be empty")
}  
for (let i = 0; i < todolist.length; i++) {
    loadlist(todolist[i], 0)
}
for (let j = 0; j < donelist.length; j++) {
    loadlist(donelist[j], 1)
}


const btn = document.querySelector('button')
btn.innerHTML = "+"


const addlist = (event) => {
    if (input.value != '') {
        const divTask = document.createElement('div')
        divTask.setAttribute("class","flex justify-between py-2 px-3 bg-white rounded-lg placeholder-gray-400 text-gray-900 inline-block focus:ring-blue-600 border-b-2 border-indico-100 font-mono")
        const div = document.createElement('div')
        div.innerHTML = input.value
        todolist.push(input.value)
        localStorage.setItem('todolist', JSON.stringify(todolist))
        divTask.append(div)

        const divTasknew = document.createElement('div')
        divTasknew.setAttribute("class", "flex")
        divTask.append(divTasknew)
        divTasknew.style.visibility = 'hidden'
        divTask.addEventListener('mouseenter', () => {
            divTasknew.style.visibility = 'visible'
        })
        divTask.addEventListener('mouseleave', () => {
            divTasknew.style.visibility = 'hidden'
        })


        const doneBtn = document.createElement('button')
        doneBtn.setAttribute("Class","py-2 px-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none border-2 font-mono")
        doneBtn.innerHTML = 'Done'
        doneBtn.addEventListener('click', () => {
            div.style.textDecoration = 'line-through'
            divTask.remove()
            doneDiv.insertBefore(divTask, doneDiv.firstChild)
            divTasknew.remove()
            donelist.push(div.innerHTML)
            console.log(todolist.findIndex(x => (x === div.innerHTML)))
            todolist.splice(todolist.findIndex(x => (x === div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
            localStorage.setItem('donelist', JSON.stringify(donelist))
        })
        const delBtn = document.createElement('button')
        delBtn.setAttribute("class","py-2 px-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none border-2 font-mono")
        delBtn.innerHTML = 'Delete'
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(divTask)
            todolist.splice(todolist.findIndex(x => (x = div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
        })

        divTasknew.append(doneBtn)
        divTasknew.append(delBtn)
        mainDiv.insertBefore(divTask, mainDiv.firstChild)
        
    } else 
        alert("Task cannot be empty")
    
}
btn.addEventListener('click', addlist)


input.addEventListener('keyup', (ev) => {
    if (ev.key === "Enter") {
        ev.preventDefault()
        addlist(ev)
    }
})



