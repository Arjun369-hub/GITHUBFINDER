const github=new Github;
const searchUser=document.getElementById('searchUser');
searchUser.addEventListener('keyup',(a)=>{
   const userText=a.target.value;
   if (userText !== ''){
       github.getuser(userText)
       .then(data=>{
           console.log(data);
       })
       
   }
});