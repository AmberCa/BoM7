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
let NdateMoth = dateMonth;
let NdateYear = dateYear;
let Bback = document.getElementById("js--back");
let Bnext = document.getElementById("js--next");
Bback.onclick = function(){
    NdateMoth-=1;
    if (NdateMoth==0){
        NdateMoth = 12;
        NdateYear = dateYear-=1;
    }
    month.innerText= NdateMoth;
    year.innerText= NdateYear;
    FillDatum(NdateMoth, NdateYear);
};
Bnext.onclick = function(){
    NdateMoth = dateMonth+=1;
    if (NdateMoth==13){
        NdateMoth = 1;
        NdateYear = dateYear+=1;
    }
    month.innerText= NdateMoth;
    year.innerText= dateYear;
    FillDatum(NdateMoth, NdateYear);
};

//alles maken van kaartjes en berekenenen
function MakeAgenda(){
   for(let y = 1; y <36; y++){
        makeCard(y);
    };
}

//datum dagen infullen
function FillDatum(dateMonth, dateYear){
    

    for (let i = 1; i <= new Date(dateYear, dateMonth, 0).getDate(); i++) {
        let p =document.getElementsByClassName("datum");
        //werkt niet bij andere maanden omdat ie van vandaag altijd pakt met dateToday.getDay() werkt dus ook niet met begin van maand
        let datumStart= new Date(dateYear, dateMonth, 0).getDate()-1;
        let x = datumStart +=i;
        console.log(i);//tot 6?!!
        p[x].innerText=i;   
    };
    console.log("vuld de datum in");
    console.log(new Date(dateYear, dateMonth, 0).getDate());
}

//35x een kaartje maken
MakeAgenda();
FillDatum(NdateMoth, dateYear);