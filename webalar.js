
    let currentIndex = 0;

    function scrollCards(direction) {
        const cardContainers = document.querySelectorAll('.card-container');
        const totalCards = cardContainers.length;
        
        if (direction === 'right') {
            currentIndex = (currentIndex + 3) % totalCards;
        } else if (direction === 'left') {
            currentIndex = (currentIndex - 3 + totalCards) % totalCards;
        }

        updateCardVisibility(cardContainers);
    }

    function updateCardVisibility(cardContainers) {
        cardContainers.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + 3) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Initially show the first three cards
    document.addEventListener('DOMContentLoaded', () => {
        const cardContainers = document.querySelectorAll('.card-container');
        updateCardVisibility(cardContainers);
    });

    $(document).ready(function () {
        $(".input-field").focusout(function () {
          // Make Floating Label More Accurate
          var inputValue = $(this).val();
          if (inputValue === "") {
            $(this).removeClass("has-value");
          } else {
            $(this).addClass("has-value");
          }
        });
      });

      
const imgbox=document.querySelectorAll('.imgbox');

const contentbox=document.querySelectorAll('.contentbox');

for(let i=0;i<imgbox.length;i++){
    imgbox[i].addEventListener('mouseover',function(){
        for(let i=0;i<contentbox.length;i++){
            contentbox[i].className='contentbox';
        }
        document.getElementById(this.dataset.id).className='contentbox active';

        for(let i=0;i<imgbox.length;i++){
            imgbox[i].className='imgbox';
        }
        this.className='imgbox active';
    })
}
