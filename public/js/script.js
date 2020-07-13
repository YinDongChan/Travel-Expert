// Author: Yin Dong

// Date: July 12, 2020

// Course module: CPRG 210

// Assignment: Assignment #2


 // Menu Toggle button on home page
 
 const button = document.querySelector('.btn-navi');
 const menu = document.querySelector('.menu ul');

 // function statement
 function eventHandler() {
   console.log('Menu is toggled');

   // This line of code runs only when `button` is clicked. The 'visible' class will the removed/added (or toggled) each time this event handler is invoked
   menu.classList.toggle('visible');
 }

 // The code in the `eventHandler` function (defined above) will be run (or "invoked") each time `button` is clicked
 button.addEventListener('click', eventHandler);

 
//  Gallery section on home page

 const imgList = [
   [1000, 'Holy Cross', 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g'],
   [1015, 'river', 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I'],
   [1016,'mountain','https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc'],
   [1032, 'yellow stone', 'https://i.picsum.photos/id/1032/2880/1800.jpg?hmac=5SLBdyPZBMyr5IBkIRfffZV10bP87Y7RrxVZX1vCefA'],
   [1035, 'waterfall', 'https://i.picsum.photos/id/1035/5854/3903.jpg?hmac=DV0AS2MyjW6ddofvSIU9TVjj1kewfh7J3WEOvflY8TM'],
   [1047, 'city', 'https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU']
 ]

// Variable where we will store our img tags
let imgTemplate = '';

// Flex container for images
const gallery = document.querySelector('.gallery-section');

imgList.forEach(function (item) {
  console.log(item);
  imgTemplate += `<a href="${item[2]}"><img src="https://picsum.photos/id/${item[0]}/250/250" alt="${item[1]}"></a>`;
});

// Add HTML img string to gallery container
gallery.innerHTML = imgTemplate;

