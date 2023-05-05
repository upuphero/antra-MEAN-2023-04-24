function helloPrint(){
    if(!helloPrint.count){
        helloPrint.count=0;
    }
    helloPrint.count ++;
    if (helloPrint.count<=5){
        console.log("Congrats you earn the chance!");
    }
    else{
        console.log("Sorry you missed the chance!");
    }

}
for(let i=0;i<10;i++){
    helloPrint();
}
