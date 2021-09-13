let myTasks = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"));
// const tabBtn = document.getElementById("tab-btn")

if (tasksFromLocalStorage) {
  myTasks = tasksFromLocalStorage;
  render(myTasks);
}

// tabBtn.addEventListener("click", function(){
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

function render(tasks) {
  let listItems = "";
  for (let i = 0; i < tasks.length; i++) {
    let char = `${i + 1}`;
    listItems += `
            <li>
                    ${char + ". " + tasks[i]}
                    
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myTasks = [];
  render(myTasks);
});

inputBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    // console.log(inputEl.value)
    myTasks.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
    render(myTasks);
  }
});
