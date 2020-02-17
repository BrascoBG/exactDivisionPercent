function exactDivisionPercent(args){
    let count = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let percentP1 = 0;
    let percentP2 = 0;
    let percentP3 = 0;

    for(i = 1; i <= count; i++){
        let currentNum = args[i];
        if(currentNum % 2 == 0){
            p1++;
        } 
        if(currentNum % 3 == 0){
            p2++;
        } 
        if(currentNum % 4 == 0){
            p3++;
        }
    }
    percentP1 = ((p1 / count) * 100).toFixed(2);
    percentP2 = ((p2 / count) * 100).toFixed(2);
    percentP3 = ((p3 / count) * 100).toFixed(2);

    console.log(percentP1 + "%");
    console.log(percentP2 + "%");
    console.log(percentP3 + "%");

}
exactDivisionPercent([3, 3, 6, 9]);