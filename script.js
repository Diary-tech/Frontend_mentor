let panierCounter = 0 ;
const plus = document.getElementsByClassName(plus);
const moin = document.getElementsByClassName(moin);

plus.addEventListener('click', () => {
    panierCounter++;
});
moin.addEventListener('click', () => {
    panierCounter--;
});
