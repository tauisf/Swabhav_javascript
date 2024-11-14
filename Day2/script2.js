taskArray = []
// CompleteTask =[]

let headerRef = document.body.appendChild(document.createElement("h2"))
headerRef.innerText=" Task List"
let ulRef = document.body.appendChild(document.createElement("ul"))

let header2ref = document.body.appendChild(document.createElement("h2"))
header2ref.innerText="Complete Task List"
let ulCompleteRef = document.body.appendChild(document.createElement("ul"))

let inputRef = document.querySelector("#input")

function AddTask(){
    
    if(taskArray.includes(inputRef.value)){
        alert("Already Added to list")
        return
    }
    taskText=inputRef.value;
    taskArray.push(inputRef.value)

    let liRef = ulRef.appendChild(document.createElement("li"));
   

    let spanRef= liRef.appendChild(document.createElement("span"))
    spanRef.innerText = taskText;

    let CompleteButtonRef = liRef.appendChild(document.createElement("button"))
    CompleteButtonRef.innerText= "Complete"
    let DeleteButtonRef =  liRef.appendChild(document.createElement("button"))
    DeleteButtonRef.innerText = "Delete";

    CompleteButtonRef.addEventListener('click',()=>{
        taskTextinner = taskArray.filter(task=> task == spanRef.innerText )
        taskArray = taskArray.filter(task=> task !== spanRef.innerText)
        console.log(spanRef.innerText);
        
        // CompleteTask.push(spanRef.innerText)

        let CompliRef = ulCompleteRef.appendChild(document.createElement("li"));
        CompliRef.innerText = taskTextinner;
        liRef.remove()
        let taskCompleteButtonRef = CompliRef.appendChild(document.createElement("button"))
        taskCompleteButtonRef.innerText= "task Completed"
       


        taskCompleteButtonRef.addEventListener('click',()=>{
            CompliRef.remove()
        })

    })

    DeleteButtonRef.addEventListener('click',()=>{
        liRef.remove()

        taskArray = taskArray.filter(task=> task !== taskText)
    })

   


}

