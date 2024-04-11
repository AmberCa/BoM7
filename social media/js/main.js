let date = document.getElementById("js--date");
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};
const dateObj = new Date();
const month   = dateObj.getMonth() + 1; // months from 1-12
const day     = dateObj.getDate();
const year    = dateObj.getUTCFullYear();

const newDate =month + "/" + day + "/" + year;
date.innerHTML=newDate;
let post__number = 0; 
let main = document.querySelector("main");
let elements = document.getElementById("js--content");

function ContentPost(data, post__number){
    for (let i = 0; i < 11; i++) {
        let post = data[i+post__number];
        let fname = post.first_name;
        let lname = post.last_name;
        let ptitle = post.title;
        Posten(fname, lname, ptitle); 
    }
}

function Posten(fname, lname, ptitle){
    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.innerText = ptitle;
    article.appendChild(title);

    const datePost = document.createElement('h6');
    date.innerText = 'date';
    article.appendChild(datePost);

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae numquam nobis non fuga, eligendi sint quae! Sequi quis quod perspiciatis incidunt eaque dolorem sint unde itaque, asperiores hic eius voluptatem!';
    article.appendChild(paragraph);

    const name = document.createElement('h4');
    name.innerText = fname + ' ' + lname;
    article.appendChild(name);

    main.appendChild(article);
}
function FetchPosts(){
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        ContentPost(data, post__number);
        post__number += 11;
        const lastPost = elements.lastElementChild;
        observer.observe(lastPost);
    });    
}

 const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
     if (entry.isIntersecting) {
     FetchPosts();
     } else {
     }
     });
     });
FetchPosts();