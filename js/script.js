// Creazione variabili
const immagini = document.getElementsByClassName("image");
var indiceImg;


document.getElementById("btnNext").addEventListener("click", function() {
    //Operazione deselezione
    for (let i = 0; i < immagini.length; i++) {
        const img = immagini[i]; 
        if (img.classList.contains("active")==true) {
            indiceImg = i;
            img.classList.remove("active");
        };
    };
    
    //Selezione immagine seguente
    indiceImg++;
    //Condizione di ultima immagine
    if (indiceImg==immagini.length) {
        indiceImg=0;
    }
    immagini[indiceImg].classList.add("active");
})