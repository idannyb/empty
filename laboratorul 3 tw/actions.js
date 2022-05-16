var firstCol = document.getElementById('firstCol');
var secondCol = document.getElementById('secondCol');
var thirdCol = document.getElementById('thirdCol');
var container = document.getElementById('container');
var flagtxt = document.getElementById('flagtxt');
var Img1 = document.getElementById('Img1');
var Img2 = document.getElementById('Img2');
var Img3 = document.getElementById('Img3');


function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const firstIndex = getActiveIndex(firstCol);
    console.log(firstIndex);
    const red = colors[firstIndex];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (i =0; i< 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});

function updateFlagColoana1(){
    console.log("first log", getActiveIndex(firstCol));
    switch(getActiveIndex(firstCol)){
        case 0:
            Img1.src = "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg";
        break;
        case 1:
            Img1.src =  "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_España.svg";
        break;
        case 2:
            Img1.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
        break;
        case 3:
            Img1.src = "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg";
        break;
        case 4:
            Img1.src = "https://i.redd.it/ema58n5txpb21.png";
        break;
    }
    console.log(Img1.src);
}

function updateFlagColoana2(){
    console.log("second log", getActiveIndex(secondCol));
    switch(getActiveIndex(secondCol)){
        case 0:
            Img2.src = "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg";
        break;
        case 1:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg";
        break;
        case 2:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg";
        break;
        case 3:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg";
        break;
        case 4:
            Img2.src = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg";
        break;
    }
    console.log(Img2.src);
}

function updateFlagColoana3(){
    console.log("third log", getActiveIndex(thirdCol));
    switch(getActiveIndex(thirdCol)){
        case 0:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg";
        break;
        case 1:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Haiti_%281859–1964%29.svg";
        break;
        case 2:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg";
        break;
        case 3:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg";
        break;
        case 4:
            Img3.src = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg";
        break;
    }
    console.log(Img3.src);
}

function setFlagName(name) {
    flagtxt.innerHTML = name;
}

function cola(){
    console.log("cola");

    const flags = [
        'Italy',
        'Spain',
        'Portugal',
        'France',
        'Greece',
    ];

    const activeIndex = getActiveIndex(firstCol);
    setFlagName(flags[activeIndex]);
    
}    

function colb(){
    console.log("colb");

    const flags = [
        'Germany',
        'Lithuania',
        'Netherlands',
        'Hungary',
        'Norway',
    ];

    const activeIndex = getActiveIndex(secondCol);
    setFlagName(flags[activeIndex]);
    
} 

function colc(){
    console.log("colc");

    const flags = [
        'Cuba',
        'Haiti',
        'Jamaica',
        'Mexico',
        'Belize',
    ];

    const activeIndex = getActiveIndex(thirdCol);
    setFlagName(flags[activeIndex]);
    
} 