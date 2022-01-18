function fetchdata(){
    fetch("https://api.nasa.gov/EPIC/api/natural/images?api_key=RzuJuaNCpoiAXpt5HRDYfZj49dxsVJMFQsbWNE1s")
    .then(response => {
        return response.json();
    })
    .then(data => {
        
       const html = data.map(data => {
          let myDate = new Date(data.date);
          let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          let year = myDate.getFullYear();
          let month = months[myDate.getMonth()];
          let day = myDate.getDate();

          return `
            <div class="info1">
                <p><img style="width: 500px;"src="https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${data.image}.png?api_key=RzuJuaNCpoiAXpt5HRDYfZj49dxsVJMFQsbWNE1s" alt="${"Image"}"/></p>
                <p>${data.date}</p>
                <p>${data.caption}</p>
                <button class="btn" onclick="btn1(this)">Like</button>
            </div>
           `;
  
       }).join(" ");
       console.log(html);
       document
       .querySelector("#nasa")
       .insertAdjacentHTML("afterbegin", html);
    })
    
   
    
}
fetchdata();

function btn1(info) {
if(info.innerHTML == "Like") {
info.innerHTML = "❤️"

}
else if(info.innerHTML == "❤️"){
info.innerHTML = "Like"
}
}

