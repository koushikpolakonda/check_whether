Cities = {

    "Kolkata": ["22.57","88.36"],
    "Hyderabad":["17.36","78.47"],
    "Chennai":["13.08","80.27"],
    "Mumbai":["19.08","72.88"],
    "New Delhi":["28.62","77.17"],
    "Bengaluru":["12.97","77.59"] 
}


window.onload = function() {
    var citySelect = document.getElementById("citySel");
    for(var city in Cities){
        console.log(city);
        citySelect.options[citySelect.options.length] = new Option(city, city);
    }

}
let lat, lon;
 citySel.onchange = function() {
    var x = Cities[this.value];
    lat = Cities[this.value][0] ;
    lon = Cities[this.value][1] ;
    console.log("selected value is " + x);
    console.log("selected latitude value is " + lat);
    console.log("selected longitude value is " + lon);
    checkweather();
 }
    
 const apiUrl = " http://www.7timer.info/bin/api.pl?output=json&product=civil";
 //const apiUrl= "http://www.7timer.info/bin/api.pl?product=civil&output=json&lon=80.3&lat=13.1";
 async function checkweather(){
    //console.log(lon);
    const response = await fetch(apiUrl +`&lon=${lon}&lat=${lat}`);
    // const response = await fetch(apiUrl).then(function(response){
    //     response.json().then(function(data) {
    //         console.log(data);
    //     });
    // }).catch(function(error) {
    //     console.log('Fetch Error:', error);
    // });
   var data= await response.json();
  
  
  console.log(data);
    var cloudcoverday1 = data.dataseries[0].cloudcover;
    var cloudcoverday2 = data.dataseries[1].cloudcover;
    var cloudcoverday3 = data.dataseries[2].cloudcover;
    var cloudcoverday4 = data.dataseries[3].cloudcover;
    var cloudcoverday5 = data.dataseries[4].cloudcover;
    var cloudcoverday6 = data.dataseries[5].cloudcover;
    var cloudcoverday7 = data.dataseries[6].cloudcover;

    // console.log(cloudcoverday1);
    // console.log(cloudcoverday2);
    // console.log(cloudcoverday3);
    // console.log(cloudcoverday4);
    // console.log(cloudcoverday5);
    // console.log(cloudcoverday6);
    // console.log(cloudcoverday7);

    var cloudcover;
   
    for (var i=0; i<=6; i++){
        
        cloudcover = data.dataseries[i].cloudcover;
        console.log(cloudcover);
        var icons = document.querySelectorAll(".icon");
        var descs = document.querySelectorAll(".weather-desc");
        console.log(icons);
        if(cloudcover == 1 || cloudcover == 2 ){
            alert('#day' + i);
           
             icons[i].innerHTML = "<img src=\"images/clear.png\" ></img>";
             descs[i].innerHTML = "clear";
            // document.querySelector("#day'+ i + '").innerHTML = "clear";            
        }
        else if(cloudcover == 3 || cloudcover == 4 || cloudcover == 5 ){
           icons[i].innerHTML = "<img src=\"images/pcloudy.png\" ></img>";
             descs[i].innerHTML = "partially cloudy";            
        }
        else if(cloudcover == 6 || cloudcover == 7 ){
            icons[i].innerHTML = "<img src=\"images/cloudy.png\" ></img>";
            descs[i].innerHTML = "cloudy";                
        }
        else if(cloudcover == 8 || cloudcover == 9 ){
            icons[i].innerHTML = "<img src=\"images/mcloudy.png\" ></img>";
             descs[i].innerHTML = "very cloudy";                 
        }   
        
        

    }
 }