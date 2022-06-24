fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>myFunc(data))
.catch((err)=>console.log(err))
function myFunc(data){
    const container=document.querySelector(".container");
    data.forEach((v)=>{
        const{login,avatar_url,html_url}=v;
           container.innerHTML+=`
      <h2>${login}</h2>
      <img src="${avatar_url}" width="50%" alt=""/>
      <p>${html_url}</p>`;
    });   
};
