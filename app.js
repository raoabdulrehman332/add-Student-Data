let userInput = document.getElementById("user-input");
let addUserBtn = document.getElementById("addUser");
let btnText = addUserBtn.innerText;
let recordsDisplay = document.getElementById("records")
let editId = null;

let usersArry = [];

let userId = []


let objStr = localStorage.getItem('users')

if(objStr!=null){
    
    usersArry= JSON.parse(objStr);
}


addUserBtn.addEventListener('click',()=>{
    
    let name = userInput.value;
    let  rollNo = Math.floor(Math.random()*10000 + 9999)
    userId.push(rollNo)

    
  
    if(editId != null){
        //edit
        let num =
        usersArry.splice(editId,1,{'users': name,'rollNo':usersArry[editId].rollNo})
        editId = null;
    }else{
        //insert             
        
        usersArry.push({'users': name,'rollNo': rollNo})
    }
    
    
    saveinfo(usersArry)
    userInput.value='';
    
    addUserBtn.innerText = btnText
})

function saveinfo(usersArry){
  let str =  JSON.stringify(usersArry)

    localStorage.setItem('users', str)
    displayinfo()

}





function displayinfo(){
    let statement = '';
    usersArry.forEach((element,i)=>{
        statement +=`<tr >
                        <th scope="row" class="text-center">${i+1}</th>
                        <td class="text-center">${element.rollNo}</td>
                        <td class="text-center">${element.users}</td>
                        <td class="text-center"><i  onclick="editinfo(${i})" class="fa btn-info btn text-white text-center">&#xf044; </i> <i onclick="deleteinfo(${i})" class="fa btn btn-danger text-white text-center">&#xf014;</i></td>
                      </tr>`
        
    });
    recordsDisplay.innerHTML = statement;  
}

function editinfo(id){
    editId = id;
    // let editArray =JSON.stringify(usersArry)
    userInput.value = usersArry[id].users; 

    addUserBtn.innerText = 'Save Changes'
}

function deleteinfo(id){
    usersArry.splice(id,1);
    saveinfo(usersArry);
    displayinfo()
    


}


// var a = [1,2,3,4,5]
// let element =0

// for(let index = 0 ; index < a.length ; index++){
//     element += a[index]
// }
// console.log(element);


// function foo(a,b,c){
//     console.log(a+b,c);
// }

// foo(5,10,function abc(){

// })