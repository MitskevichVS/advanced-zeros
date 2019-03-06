module.exports = function getZerosCount(number, base) {
    let base_multipliers = [];
    let variable = 0; 
    let ans = [];
    let mass_w = [];
    let count1 = 0;
    let count2 = 0;
    let answer = [];
    let count3 = 0;
    let sqares = [];
    let corr_arr = [];
   zeros = 0;


//          разложение базы на простые множители
    for (let i = 2; i <= base; i++){
        while (base % i == 0){
                base_multipliers.push(i);
                base = base / i;
        }
    }
       
//          массив вхождений множителей в число
for (j = 0; j < base_multipliers.length; j++){
    let w = base_multipliers[j];
    variable = 0;
    for (let k = 0; k <= base_multipliers.length; k++){
        while (w <= number){
            ans.push(Math.floor(number / w));
            variable += (Math.floor(number / w));
            w *= base_multipliers[j];
            mass_w.push(w);
            count1++;
        }
    }
            answer.push(variable);
}        

count1 = count1/base_multipliers.length;
//      находим показатель степени для каждого элемента массива простых чисел
for (let l = 0; l < base_multipliers.length; l++){
    count2 = base_multipliers[l];
    count3 = 0;
    for (let m = 0; m <= base_multipliers.length; m++){
        if (count2 == base_multipliers[m]){
            count3++;
        }
    }
        sqares.push(count3);
}

//      корректируем массив вхождения множителей в число
for (let n = 0; n < base_multipliers.length; n++){
    corr_arr.push(Math.floor(answer[n]/sqares[n]));
}

for (let p = 1; p < corr_arr.length; p++){
    zeros = corr_arr[0];
    if (zeros > corr_arr[p]){
        zeros = corr_arr[p];
    }
    }
   return zeros;
}