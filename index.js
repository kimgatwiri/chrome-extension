import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js"
import { getDatabase,ref,push,onValue} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js"
const firebaseConfig={
    
    databaseURL:config.DATABASE_URL
}
const app=initializeApp(firebaseConfig)
const database=getDatabase(app)
const referenceInDb=ref(database,"leads")
console.log(firebaseConfig.databaseURL)



const inputEl=document.getElementById("input-el")
const  inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const ulEl=document.getElementById("ul-el")

const tabBtn=document.getElementById("tab-btn")





// tabBtn.addEventListener("click",function(){
    
//     chrome.tabs.query({active:true,currentWindow:true},function(tabs){
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads",JSON.stringify(myLeads))
//     render(myLeads)
//     })
    
    
// })
onValue(referenceInDb, function(snapshot){
    console.log(snapshot.val())
   
   
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

inputBtn.addEventListener("click",async function(){
 try { await push(referenceInDb,inputEl.value)
    inputEl.value=""}
    
    catch(err){
        console.error(err)
    }
    

   
    
})

deleteBtn.addEventListener("dblclick",function(){
    
    
 
})