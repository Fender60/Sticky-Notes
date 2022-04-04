'use strict'
 console.log("");


 const btn = document.querySelector('.header__btn');
 const inpTxt = document.querySelector('.modal__text');
 const stickerItem = document.querySelector('.stickers');

let sizeWidth = document.documentElement.clientWidth;

 let amountSticker = (width) => {
 
 if(width < 1820 && width > 1660) {
   document.querySelector('.item4').remove();
  }else if(width < 1659) {
   document.querySelector('.item4').remove();
   document.querySelector('.item8').remove();
 }
}

amountSticker(sizeWidth);




 let modalActive = ()=>{
  const modal = document.querySelector('.modal');
  if(modal.classList.contains("active") !== true){
  modal.classList.add('active');
 }else {
  modal.classList.remove('active');
 }
}
 btn.onclick = modalActive;

let writeSticker = () => {
 let blankSticker = [];
 let txtSticker = inpTxt.value;
 let allStickers = document.querySelectorAll('.stickers__item');
 let div = document.createElement('div');

 div.className = 'stickers__stick';


 allStickers.forEach(element=>{
  if(element.children.length < 2){
   blankSticker.push(element);
  }
});

 let stikerLength = blankSticker.length;

 if(stikerLength === 0){
  alert("Пустые стикера закончились!");
 }else if(txtSticker !== ""){
 let rand = Math.floor(Math.random() * (stikerLength - 1 + 1));
 div.innerHTML = txtSticker;
 blankSticker[rand].append(div);
 inpTxt.value = '';
 blankSticker[rand].classList.add('active');

 }
};
//========================================================================
inpTxt.addEventListener('keydown', function(e){
 if(e.keyCode === 13){
  writeSticker();
  modalActive();
  }else if(e.keyCode === 27){
   modalActive();
  }
});

//==========================================================================

stickerItem.addEventListener('dblclick', function(e){
 let targStick = e.target;
 e.target.children[0].classList.toggle('active'); 
 delSticker(e.target, targStick);
});

 function delSticker(targ, sticker) {
 const close = targ.children[0];
 const txt = targ.children[1];
 close.onclick = function(e) {
   e.target.classList.remove('active');
   txt.remove();
   sticker.classList.remove('active');
   
  };
};
