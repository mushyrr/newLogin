let title = document.getElementById('title');



let myUsers ;

if (localStorage.users){
    myUsers = JSON.parse(localStorage.users)
}else{
    myUsers = []
}


let index = localStorage.getItem('thisUser')

title.innerHTML = ` welcome "${myUsers[index].username}"`


let myImg = document.getElementById('myImg');

let mycrss = ['https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=400',
'https://images.pexels.com/photos/751689/pexels-photo-751689.jpeg?auto=compress&cs=tinysrgb&w=400',
'https://images.pexels.com/photos/539694/pexels-photo-539694.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&w=400'
]


myImg.addEventListener('mouseover',()=>{
    
let randomIndex = Math.floor(Math.random() * mycrss.length)

    myImg.src = mycrss[randomIndex]
})

myImg.addEventListener('mouseout',()=>{
    myImg.src ='https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600'
})












// // this is  counaction  api
// let displayData = document.getElementById("displayData"); // ده يا ريس div  الموجود في html  اللي هيتعمل عليه  loop  تمام 
// let request = new XMLHttpRequest(); 
//     request.open("GET" , "https://jsonplaceholder.typicode.com/posts" );
//     request.send();
//     request.addEventListener("load" , function(){
// let temp = "";
// let posts = JSON.parse(this.responseText);
// for(let i=0 ; i<posts.length ; i++){
//         temp += `
//          <div class="div">
//             <h1 class="heading">${posts[i].id} ${posts[i].title} </h1>
//             <p class="paragraph">${posts[i].body} </p>
//          </div>
//          <hr/>
//          ` ;
//     }
//     displayData.innerHTML = temp ;
// });





let displayData = document.getElementById('displayData')

let request = new XMLHttpRequest()
 request.open('GET', "https://jsonplaceholder.typicode.com/posts")
 request.send()

 request.addEventListener('load',()=>{
    let temp = ''
    let posts = JSON.parse(request.responseText);
    for (let i = 0; i<posts.length;i++){
        temp += `
         <div class="my${i} div">
            <h1 class="heading">${posts[i].id} ${posts[i].title} </h1>
            <p class="paragraph">${i}_ ${posts[i].body} </p>
         </div>
         <hr/>
         ` ;
    } 
    displayData.innerHTML = temp
 })


 const allSkils = document.querySelectorAll('.scroll a');
 allSkils.forEach(e=>{
    e.addEventListener('click', e=>{
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        })
    })
 })

 let toTop = document.querySelector('.toscroll span')


window.onscroll = ()=>{

    if(scrollY >= 350){
        toTop.classList.add('show')
     }else{
        toTop.classList.remove('show')
     }
    
}

toTop.addEventListener('click',()=>{
    scroll({
        top :0,
        behavior : "smooth"
    })
    
})