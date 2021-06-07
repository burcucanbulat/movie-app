const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('seat:not(.reserved)');


// container a click event i ekledik ve click yapıldıgında gerceklesecek olayları fonksiyonun içine yazdık. 
 
container.addEventListener('click', function(e) {
 if(e.target.classList.contains('seat')  && !e.target.classList.contains('reserved') ) {
     e.target.classList.toggle('selected');

// container içerisinde class ı seat olup reserve edilmemiş koltukların üzerine geldiğimizde selected işlemi gerçekleştirdik.
// selected classı olanı siler,olmayana ekler. 
   calculateTotal();
 }
});

select.addEventListener('change',function(e) {
   calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    console.log(seats);
    console.log(selectedSeats);
    let selectedSeatCount = selectedSeats.length;
    //seat ve selected classına sahip elemanların sayısını aldık. selectedSeatCount değişkenine atadık.
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;
}
