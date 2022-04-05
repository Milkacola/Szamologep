var eredmeny=osszead(3,4);
console.log(eredmeny);

function osszead(a,b){
    console.log(osszead);
    return a+b;
}

/**Függvénykifejezések*/
var osszeadas=function (a,b) {
    return a+b;
}
console.log(osszeadas(5,6));

function ID(elem){
    return document.getElementById(elem);
}
window.addEventListener("load", init);
function init(){
    ID("szamol1").addEventListener("click", 
        function() {
            osszead(3, 4);
        }
    );
    ID("szamol2").addEventListener("click", 
        function(a,b) {
            osszead(3, 4);
        }
    );
    ID("szamol3").addEventListener("click", 
        (a, b) => {
            osszead(3, 4);
        }
    );

    /**Callback függvény*/
    /* Aszinkron függvény */
    /**settimeout*/
    setTimeout(function udvozles() {console.log("hahó");} ,2000);
    setInterval( ()=> {
        var datumIdo=new Date();
        var ora=datumIdo.getHours();
        var perc=datumIdo.getMinutes();
        var mperc=datumIdo.getSeconds();
        console.log(ora+":"+perc+":"+mperc);
    }, 2000);

    /**setinterval*/
    
}

function udvozles(){
    console.log("hello");
}
function ora(){
    var datumIdo=new Date();
    var ora=datumIdo.getHours();
    var perc=datumIdo.getMinutes();
    var mperc=datumIdo.getSeconds();
    console.log(ora+":"+perc+":"+mperc);
}

/**Névtelen függvények*/
