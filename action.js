function fetchSpacePhoto(){
    fetch("https://api.nasa.gov/EPIC/api/natural/images?api_key=RzuJuaNCpoiAXpt5HRDYfZj49dxsVJMFQsbWNE1s")
    .then(response => {
        return response.json();
    })
    .then(data => {
        
       const html = data.map(data => {

          //extract date fields to build api url for nasa photo   
          let myDate = new Date(data.date); 
          let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          let year = myDate.getFullYear();
          let month = months[myDate.getMonth()];
          let day = myDate.getDate();
          
          // create and set html code for respective space photo
          return `
            <div class="info1">
                <p><img style="width: 500px;"src="https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${data.image}.png?api_key=RzuJuaNCpoiAXpt5HRDYfZj49dxsVJMFQsbWNE1s" alt="${"Image"}"/></p>
                <p>${data.date}</p>
                <p>${data.caption}</p>
                <button class="btn" onclick="toggleLike(this)">Like</button>
            </div>
           `
       }).join(" ");

       //append space photo html to page
       document.querySelector("#nasa").insertAdjacentHTML("afterbegin", html);
   
        var myobj = document.querySelector("#imageLoadSpinner");
    myobj.remove();

    }); 

   
}

function toggleLike(info) {
    if(info.innerHTML == "Like") {
        info.innerHTML = "❤️"
    }
    else if(info.innerHTML == "❤️"){
        info.innerHTML = "Like"
    }
}

fetchSpacePhoto();
