const btns=document.querySelectorAll('button')
const ulTag=document.querySelector('ul')

const _url='https://api.sampleapis.com/movies/'
const endpoinst={
    animation:'animation',
    classic:'classic',
    comedy:'comedy',
    drama:'drama',
    horror:'horror',
    family:'family',
    mystery:'mystery',
    western:'western'
}

function getAnimationMovies(){
    fetch(_url+endpoinst.animation)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}

function getClassicMovies(){
    fetch(_url+endpoinst.classic)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}

function getComedyMovies(){
    fetch(_url+endpoinst.comedy)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}

function getDramaMovies(){
    fetch(_url+endpoinst.drama)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}
function getFamilyMovies(){
    fetch(_url+endpoinst.family)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}
function getHorrorMovies(){
    fetch(_url+endpoinst.horror)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}
function getMysteryMovies(){
    fetch(_url+endpoinst.mystery)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}
function getWesternMovies(){
    fetch(_url+endpoinst.western)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        showMovies(data)
     })
}

function showMovies(arr){
    ulTag.innerHTML='';
    for (const obj of arr){
        ulTag.innerHTML += `
        <h1>${obj.title}</h1>
        <img width='20%' src=${obj.posterURL} />
        `
    }
}

btns[0].onclick=()=>{
    getAnimationMovies()
};
btns[1].onclick=()=>{
    getClassicMovies()
};
btns[2].onclick=()=>{
    getComedyMovies()
};
btns[3].onclick=()=>{
    getDramaMovies()
};
btns[4].onclick=()=>{
    getFamilyMovies()
};
btns[5].onclick=()=>{
    getHorrorMovies()
};
btns[6].onclick=()=>{
    getMysteryMovies()
};
btns[7].onclick=()=>{
    getWesternMovies()
};
