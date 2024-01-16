// let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)


// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//10) arraydaki en boyuk reqemin ilk indexini tapin
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin.


let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


//                                          Answers                                                
//1.
let fullName='Murad Tahmazli Bashir'
console.log(fullName.split(''));
//2.
let newFullName=[fullName.split(" ")[1],fullName.split(" ")[0],fullName.split(" ")[2]]
console.log(newFullName);
//3.
console.log(newFullName.join());
//4.
let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
let fiveCounter=0
for(let i=0;i<arr.length;i++){
    if(arr[i]==5){
        fiveCounter++;
    }
}
console.log(fiveCounter);
//5.
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
console.log(sum);
//6.
let newArr=[1,2,3,4,5,6,7]
console.log(newArr.sort());
//7.
let maxNum;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        maxNum=Math.max(arr[i],arr[j])
    }
}
let maxNumCounter=0;
for(let i=0;i<arr.length;i++){
    if(maxNum==arr[i]){
        maxNumCounter++;
       
    }
}
console.log(maxNumCounter);
//8.
let myName='Murad'
console.log(arr.includes(myName.length));
//9.arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
let indexArray=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%3==2){
        indexArray.push(arr[i])
    }
}
let firstNumber=indexArray[0];
console.log("Number: "+firstNumber+" Index: "+arr.indexOf(firstNumber));
//10. arraydaki en boyuk reqemin ilk indexini tapin
console.log(arr.indexOf(maxNum));
//11. 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
let indexFour=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]==4){
        indexFour.push(i)
    }
}
console.log(indexFour);
//12. 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let indexFive=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]==5){
        indexFive.push(i)
    }
}
console.log(indexFive[0]+" "+indexFive[indexFive.length-1]);
//13. "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari
//ferqini hesablayin
let higherThanTwo=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>2){
        higherThanTwo.push(arr[i])
    }
}
console.log(arr.length-higherThanTwo.length);
//14. 7 reqeminin indexleri cemini tapin.
let sumSeven=0
for(let i=0;i<arr.length;i++){
    if(arr[i]==7){
        sumSeven=sumSeven+i;
    }
}
console.log(sumSeven);
//15. could not find 15
//16. arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
let startsWithT=[]
for(let i=0;i<arr2.length;i++){
    if(arr2[i].name[0]=='t'){
        startsWithT.push(arr2[i].name)
    }
}
console.log(startsWithT);
//17. arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
let startsWithEndsWithT=[]
for(let i=0;i<arr2.length;i++){
    if(arr2[i].name[0]=='t' && arr2[i].name[arr2[i].name.length-1]=='t'){
        startsWithEndsWithT.push(arr2[i].name)
    }
}
console.log(startsWithEndsWithT);
//18. arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let keySumTT=0;
for(let i=0;i<arr2.length;i++){
    if(arr2[i].name[0]=='t' && arr2[i].name[arr2[i].name.length-1]=='t'){
        keySumTT=keySumTT+arr2[i].key
    }
}
console.log(keySumTT);
//19. arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
for(let i=0;i<arr2.length;i++){
    if(arr2[i].name[arr2[i].name.length-1]=='e'){
       arr2[i].name='SuperDev'
    }
}
console.log(arr2);
//20. arr2 de "name"-i en uzun olan obyektin key-i ni tapin
