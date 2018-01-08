const arrow = document.querySelector('.arrow');
   const speed = document.querySelector('.speed-value');

   navigator.geolocation.watchPosition((data) => {
     console.log(data);
     speed.textContent = (data.coords.speed * 0.621371);
     arrow.style.transform = `rotate(${data.coords.heading}deg)`;
   }, (err) => {
     console.error(err);
   });
