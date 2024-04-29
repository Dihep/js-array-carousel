// Creazione variabili
const immagini = document.getElementsByClassName("image");
var indiceImg;

//Operazione deselezione
for (let i = 0; i < immagini.length; i++) {
    const img = immagini[i]; 
    console.log(i)
    if (img.classList.contains("active")==true) {
        console.log("Active");
        indiceImg = i;
        img.classList.remove("active");
    };
};
console.log(immagini)

//Selezione immagine seguente
indiceImg++;
immagini[indiceImg].classList.add("active");