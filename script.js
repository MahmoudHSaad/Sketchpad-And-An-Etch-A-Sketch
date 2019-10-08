var numberOfElements; 

function randomColor() {

    return 'rgb(' +
        ((Math.random() * 255))
        + ',' + ((Math.random() * 255))
        + ',' + ((Math.random() * 255))
        + ')';;
}

function randomColorBlue() {

    return 'rgb(' +
        ((Math.random() * 0))
        + ',' + ((Math.random() * 0))
        + ',' + (( 255))
        + ')';;
} 

 function randomColorBlack() {

    return 'rgb(' +
        ((0))
        + ',' + ((0))
        + ',' + ((0))
        + ')';;
}




function createElementOfGrid(number){
    let parent = document.getElementById('grid');
    let count = 1;
    
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            let div = document.createElement('div');
            div.setAttribute('id', `item-${count}`);

            parent.appendChild(div);
            count++;
        }
    }}

function removeAllElements(){
    let grid =document.getElementById('grid');
    let number =grid.children.length;
    for(let i=1;i<=number;i++){
        grid.removeChild(document.getElementById(`item-${i}`));
    }
    
}

function adjustDimensions(numberOfElements){
    let grid = document.getElementById('grid');

    grid.style.gridTemplateColumns = ` repeat(${numberOfElements},` + ((581/numberOfElements))+`px)`;
    grid.style.gridTemplateRows = ` repeat(${numberOfElements},` + ((581 / numberOfElements)) + `px)`;
    for(let i=0;i<item.length;i++){
        item[i].style.width = '' + ((581 / numberOfElements) ) + 'px';
        item[i].style.height = '' + ((581 / numberOfElements) ) + 'px';
        
    }

        
    console.log("adjust");
}
function addHoverrandomColor(number){
    for (let item = 1; item <= number; item++) {
        document.getElementById(`item-${item}`).addEventListener('mouseenter', function () {
            this.classList.add("hover");
            this.style.backgroundColor = randomColor();
            console.log("hover");
        });
        }
}
function addHoverBlueColor(number){
    for (let item = 1; item <= number; item++) {
        document.getElementById(`item-${item}`).addEventListener('mouseenter', function () {
            this.classList.add("hover");
            this.style.backgroundColor = randomColorBlue();
            console.log("hover");
        });
        }
}

function addHoverBlackColor(number){
    for (let item = 1; item <= number; item++) {
        document.getElementById(`item-${item}`).addEventListener('mouseenter', function () {
            this.classList.add("hover");
            this.style.backgroundColor = randomColorBlack();
            console.log("hover");
        });
        }
}



 

document.getElementById('add').addEventListener('click',function(){
     
        removeAllElements();
        let message = prompt("Please, Enter Number Element Of Grid");
        while(!Number.isInteger(parseInt(message))){
            message = prompt("Please,How many squares per side?");
        }
        numberOfElements = parseInt(message);
        document.getElementById("iNum").innerHTML=  " <br /> Now Number OF grid Items is " + "<br />" + numberOfElements + " X " + numberOfElements ;
        createElementOfGrid(numberOfElements);
        adjustDimensions(numberOfElements);

});


function clearNum(){
    document.getElementById("iNum").innerHTML= "<br /> Now Number OF grid Items is " + "<br /><br />"  + numberOfElements * 0 + " X " + numberOfElements  * 0 ;
}

document.getElementById('blue').addEventListener('click',function(){
        addHoverBlueColor(numberOfElements * numberOfElements );
         document.getElementById("iNum").innerHTML=  " <br /> Now Number OF grid Items is " + "<br />" + numberOfElements + " X " + numberOfElements +"<br /><br /> Color IS BLUE";
});

document.getElementById('black').addEventListener('click',function(){
        addHoverBlackColor(numberOfElements * numberOfElements );
        document.getElementById("iNum").innerHTML=  " <br /> Now Number OF grid Items is " + "<br />" + numberOfElements + " X " + numberOfElements +"<br /><br /> Color IS black";
});
document.getElementById('randCOL').addEventListener('click',function(){
        addHoverrandomColor(numberOfElements * numberOfElements );
        document.getElementById("iNum").innerHTML=  " <br /> Now Number OF grid Items is " + "<br />" + numberOfElements + " X " + numberOfElements +"<br /><br /> Color IS random";
});