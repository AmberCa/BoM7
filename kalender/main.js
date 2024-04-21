//jaar en maand berekkenen 
let dateToday = new Date;
let dateYear = dateToday.getFullYear();
let dateMonth = dateToday.getMonth()+ 1;
let dateDay = dateToday.getDate();
let month = document.getElementById("js--month");
let year = document.getElementById("js--year");

//zet de maand in html van vandaag begin
month.innerText= dateMonth;
year.innerText= dateYear;

//maakt kaartjes met plekken voor datum
const ul = document.querySelector("ul");
function makeCard(y){
    let li = document.createElement("li");
    let p = document.createElement("p");
    FillCard(li,p,y);
}
function FillCard(li,p,y){
    //voor de maand maken hoe? 
    p.classList.add("datum")
    li.classList.add(y);

    //Dag van vandaag extra tijd
    // p.style['border-radius']= "2rem";
    // p.style.background= "#EEE3CB";
    PlaceCard(li,p);
}
function PlaceCard(li,p){
    li.appendChild(p);
    ul.appendChild(li);
}

//buttons werkend van maanden bijhouden
let NdateMonth = dateMonth;
let NdateYear = dateYear;
let Bback = document.getElementById("js--back");
let Bnext = document.getElementById("js--next");
Bback.onclick = function(){
    NdateMonth-=1;
    if (NdateMonth==0){
        NdateMonth = 12;
        NdateYear = dateYear-=1;
    }
    console.log(NdateMonth);
    month.innerText= NdateMonth;
    year.innerText= NdateYear;
    FillDatum(NdateMonth, NdateYear);
};
Bnext.onclick = function(){
    NdateMonth = dateMonth+=1;
    if (NdateMonth==13){
        NdateMonth = 1;
        NdateYear = dateYear+=1;
    }
    console.log(NdateMonth);
    month.innerText= NdateMonth;
    year.innerText= dateYear;
    FillDatum(NdateMonth, NdateYear);
};

//alles maken van kaartjes en berekenenen
function MakeAgenda(){
   for(let y = 1; y <36; y++){
        makeCard(y);
    };
}

//datum dagen infullen
function FillDatum(NdateMonth, NdateYear){
    console.log(NdateMonth);
    let p =document.getElementsByClassName("datum");
    let firstDay = new Date(NdateYear, NdateMonth, 1);
    console.log(firstDay);
    for (let i = 1; i <= new Date(NdateYear, NdateMonth, 0).getDate(); i++) {
        p[i].innerText= "";
    }
    for (let i = 1; i <= new Date(NdateYear, NdateMonth, 0).getDate(); i++) {
        let x = firstDay.getDay() + i -1;
        if(x > p.length-1){
            continue;
        }
        p[x].innerText=i;   
    }
}

//35x een kaartje maken
MakeAgenda();
FillDatum(NdateMonth, dateYear);