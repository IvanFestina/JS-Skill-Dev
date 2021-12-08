//
// document.getElementById('input-btn').onclick = function () {
// console.log("Button clicked!");
// }
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabsFromLocalStorage = JSON.parse(localStorage.getItem("tabs"))
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
   render(myLeads)
   }

function render(leads) {
let listItems = "";
for (let i = 0; i < leads.length; i++) {
   listItems += ` <li> <a target='_blank' href='${leads[i]}'> ${leads[i]} </a></li>`
   // let li = document.createElement('li')
   // li.textContent = myLeads[i]
   // ulEl.append(li)
}
ulEl.innerHTML = listItems
}

inputBtn.addEventListener('click', function () {
   myLeads.push(inputEl.value)
   inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify(myLeads) )
   render(myLeads)
})

deleteBtn.addEventListener('dblclick', function () {
   console.log("double clicked!")
   localStorage.clear()
      myLeads = []
      render(myLeads)
})


tabBtn.addEventListener("click", function () {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   myLeads.push(tabs[0].url)
   localStorage.setItem("myLeads", JSON.stringify( myLeads ))
   render(myLeads)   })
})



