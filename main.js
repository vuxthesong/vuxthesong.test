const buyBtn = document.querySelector('.js-btn');
const model = document.querySelector('.js-model');
const modelContainer = document.querySelector('.js-model-container');
const modelClose = document.querySelector('.js-model-close');

function showBuyTickets() {
    model.classList.add('open');
}

function closeBuyTickets() {
    model.classList.remove('open');
}

buyBtn.addEventListener('click', showBuyTickets)

modelClose.addEventListener('click', closeBuyTickets)

model.addEventListener('click', closeBuyTickets)

modelContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


var btnPay = document.getElementById("buy-tickets");
btnPay.onclick = function(){
    if (confirm("Sinh nhật vui vẻ nha :))) Chúc ông chủ giày tuổi mới thành buôn may bán đắt chứ tôi không có tiền mua đâu :)))) ") == true )
    {
        // location.href = 'https://www.facebook.com/profile.php?id=100006212522728';
        location.replace(url = 'https://www.facebook.com/profile.php?id=100006212522728');
    }


}


