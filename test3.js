
var restart = document.querySelector("#b")
var sq= document.querySelectorAll('td')

function clearBoard(){
    for(var i=0;i<sq.length;i++){
        sq[i].textContent = '';
    }
}

    
restart.addEventListener('click',clearBoard);

function Change(){
    if(this.textContent === '')
        this.textContent = 'X';
    else if(this.textContent === 'X')
        this.textContent = 'O';
    else
        this.textContent = ''        
}

for(var i=0;i<sq.length;i++){
    sq[i].addEventListener('click',Change);
}