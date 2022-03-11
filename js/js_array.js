'use strict';

// 배열 선언방법1
// const arr1=[];

// 위를 초기화는 어떻게?
// 10,20,30  -> 0번지, 1번지, 2번지

// const arr1=[10,20,30];
// 값을 선언하자마자 ▲ 초기화한 것
// 값을 선언 =>  const arr1=[];
// 초기화 => const arr1=[10,20,30];
// 배열 선언과 동시에 초기화

const arr1=[10,20,30];
console.log(`배열의 길이 -> ${arr1.length}`);


// 호출은 어떻게?
console.log(arr1[0]);  // 배열 arr1의 0번지 호출
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);  // -> 값이 없으면 undefined로 나옴





// 배열의 선언▼
const arr2=[];
// 배열의 0~2번지까지 초기화(저장)▼
arr2[0]=10;
arr2[1]=20;
arr2[2]=30;

// arr2배열의 3,4번지에 100,200으로 초기화▼
arr2[3]=100;
arr2[4]=200;

// 배열의 총 갯수를 콘솔에 출력▼
console.log(`배열의 길이 : ${arr2.length}`);




// Q : 배열 arr3을 선언하고 0~9까지 초기화
// 0번지는 0, 1번지는 1, .... 9번지는 9로 초기화
const arr3=[0,1,2,3,4,5,6,7,8,9];

// 0~9번지까지 콘솔에 출력
for(let i=0; i<10; i++){
  console.log(`arr3[i] = ${arr3[i]}`);
}



console.clear();

// Q : 5개의 .gallery>ul>li에 배경이미지를 저장

const arrBg=[];
arrBg[0]=`url(img/0.jpg) no-repeat 50%/cover`;         // url(img/0.jpg) no-repeat 50%/cover;
arrBg[1]=`url(img/1.jpg) no-repeat 50%/cover`;
arrBg[2]=`url(img/2.jpg) no-repeat 50%/cover`;
arrBg[3]=`url(img/3.jpg) no-repeat 50%/cover`;
arrBg[4]=`url(img/4.jpg) no-repeat 50%/cover`;




console.clear();

// Q : 배열 arrBg에 img/0.jpg  ~  img/4.jpg   0번지~4번지까지 배경이미지 형식으로 저장
// for 문 이용

// A : 내 답 = 
// const arrBg2=[];
// for(let j=0; j<5; j++){
//   arrBg2[0]=`url(img/0.jpg) no-repeat 50%/cover`;
//   arrBg2[1]=`url(img/1.jpg) no-repeat 50%/cover`;
//   arrBg2[2]=`url(img/2.jpg) no-repeat 50%/cover`;
//   arrBg2[3]=`url(img/3.jpg) no-repeat 50%/cover`;
//   arrBg2[4]=`url(img/4.jpg) no-repeat 50%/cover`;
// }

// A : 선생님 답 = 
const arrBg2=[];
for(let j=0; j<5; j++){
  // arrBg[j]=`url(img/"+j+".jpg) no-repeat 50%/cover`;  // <- 이렇게 쓰는 게 틀린 건 아닌데 아래처럼 쓰는게 요즘 트렌드><
  arrBg2[j]=`url(img/${j}.jpg) no-repeat 50%/cover`;
  console.log(`arrBg2[${j}]=${arrBg2[j]}`);
}
console.clear();






// document.querySelectorAll('.gallery>ul>li');
const galleryLi=document.querySelectorAll('.gallery>ul>li');

// galleryLi[0].style.background=`url(img/0.jpg) no-repeat 50%/cover`;
// galleryLi[1].style.background=`url(img/1.jpg) no-repeat 50%/cover`;
// galleryLi[2].style.background=`url(img/2.jpg) no-repeat 50%/cover`;
// galleryLi[3].style.background=`url(img/3.jpg) no-repeat 50%/cover`;
// galleryLi[4].style.background=`url(img/4.jpg) no-repeat 50%/cover`;


// 배열 arrBg3 만들어서 url(img/0.jpg) no-repeat 50%/cover;를 저장해보세요
// const arrBg3=[];
// arrBg3[0]=`url(img/0.jpg) no-repeat 50%/cover`;

// const arrBg3=[];
// for(let k=0; k<5; k++){
//   arrBg3[k]=`url(img/${k}.jpg) no-repeat 50%/cover`;
// }
// arrBg3.length가 아니라 galleryLi.length이다 , 의미는 galleryLi갯수 만큼..
const arrBg3=[];
for(let k=0; k<galleryLi.length; k++){
  arrBg3[k]=`url(img/${k}.jpg) no-repeat 50%/cover`;
  galleryLi[k].style.background=arrBg3[k];
}

console.log(`=====================================`)
// 배열 선언 방법2
const arr22=new Array();
for(let i=0; i<5; i++){
  arr22[i]=`url(img/${i}.jpg) no-repeat 50%/cover`;
  console.log(`arr22[${i}]=${arr22[i]}`);
}

console.log(`=====================================`)
// 배열 선언 방법3
const arr33=new Array(1,2,3);
for(let i=0; i<arr33.length; i++){
  //arr33[i]=i;
  console.log(`arr33[${i}]=${arr33[i]}`);
}