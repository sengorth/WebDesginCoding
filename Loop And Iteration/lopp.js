// var step;
// for (step=0; step<10;step++){
//     if(step==3){
//     break; // continue
//     }
//     document.write(`<h1>Hello ${step}</h1>`);
// }
//While
// let i=0;
// while(i<5){
//     document.write(`<h1>Hello ${i}</h1>`)
//     i++;
// }
//do while
// var i=0;
// do{
//     document.write(`<h1>Hello ${i}</h1>`)
//     i++;
// }while(i<5)
//Iteration
// var person = {
//     fname: 'dara',
//     lname: 'loy',
//     age: 30
// } 
// for (p in person) {
//     console.log(person[p])
// }
// var article =[
//     {
//         fname: 'dara',
//         lname: 'loy',
//         age: '30',
//     },
//     {
//         fname: 'dara',
//         lname: 'loy',
//         age: '30',
//     },
//     {
//         fname: 'dara',
//         lname: 'loy',
//         age: '30',
//     }
// ]
// for(k=0 ;k<article.length;k++){
//     console.log(article[k])
// }
var article=[
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    },
    {
        title: 'Harry Potter',
        descrip: 'Adventure',
        image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
        author:'N/A',
        published:'1979',
    }
]
var row=document.getElementById('r')
var content ="";
for(a of article){
    content +=`
    <div class="col-md-4">
    <div class="card">
      <div class="view overlay">
        <img class="card-img-top" src=${a.image} alt="Card image cap">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body">
        <h4 class="card-title">${a.title}</h4>
        <p class="card-text">${a.descrip}</p>
        <a href="#" class="btn btn-primary">${a.published}</a>
      </div>
    </div>
    </div>
        `
}

row.innerHTML = content;