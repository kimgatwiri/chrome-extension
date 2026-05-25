import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js"
const firebaseConfig={
    databaseURL:"https://leads-tracker-app-83138-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app=initializeApp(firebaseConfig)
const database=getDatabase(app)
console.log(database)


let myLeads=[]
const inputEl=document.getElementById("input-el")
const  inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
const tabs=[{
    url:"https://www.linkedin.com/in/per-harald-borgen"
}]

tabBtn.addEventListener("click",function(){
    
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    })
    
    
})

function render(Leads){
let listItems=""

for(let i=0;i<Leads.length;i++){
       
       listItems+=`
            <li>
                <a target='_blank' href='${Leads[i]}'>
                    ${Leads[i]}
                </a>
            </li>
        `
}
ulEl.innerHTML= listItems
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads) )
    
    
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})