const users = [

    {
        name:'bhaskar@1234',
        password:'bhas1234'
    },

    {
        name:'balli@1234',
        password:'balli1234'
    },
    {
        name:'anu@1234',
        password:'anu1234'
    }
]
if(localStorage.getItem('username')==null){

    localStorage.setItem('username',JSON.stringify(users))

}

function checkLogin(e){

    e.preventDefault()
 const form = document.getElementById('form')

 const name = form.login.value
 //console.log(name)
 const password = form.password.value
 //console.log(password)



const users = JSON.parse(localStorage.getItem('username'))
 for(let i = 0;i<users.length;i++){

    if(users[i].name === name && users[i].password === password){
       
        window.location.href ='homie.html'
        break;
    }
   

 }



}
