// Kenny monte
document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    zoneRouge();

    if (document.getElementById('kenny').style.top === "0px") {
    }
    else {
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

// Kenny descend
document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    zoneRouge();

    if (document.getElementById('kenny').style.top === "470px") {
    }
    else {
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

// Kenny vas a gauche
document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    zoneRouge();

    if (document.getElementById('kenny').style.left === "10px") {
    }
    else {
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});

// Kenny vas a droite
document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    zoneRouge();

    if (document.getElementById('kenny').style.left === "470px") {
    }
    else {
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});

//Zone rouge:
function zoneRouge (){

    if (document.getElementById('kenny').style.top === "20px" && document.getElementById('kenny').style.left === "50px") {
        document.getElementById('kenny').style.left === "200px";
        document.getElementById('kenny').style.top === "200px";

        alert("Kenny est mort");
    }
}