var btn = document.getElementById("btn");
var searchQuery = document.getElementById('input');
var intro = document.getElementById('boxIntro');
var mobileButton = document.getElementById("mobileButton");

function ourRequest() {
  var searchQuery = document.getElementById('input').value;
  var container = document.getElementById('canvas');
  $.getJSON('https://api.instagram.com/v1/tags/' + encodeURI(searchQuery) + '/media/recent?access_token=640264369.ba4c844.20a62d124d39411a820b4e110baa3f3a&callback=?').then(function(response){
    while(container.hasChildNodes()) container.removeChild(container.firstChild);
    intro.style.display = "none";
    loadImage(response);
    document.getElementById('footer').setAttribute('position', 'static');
  })
}

function ourMobileRequest() {
  var searchQuery = document.getElementById('mobileInput').value;
  var container = document.getElementById('canvas');
  $.getJSON('https://api.instagram.com/v1/tags/' + encodeURI(searchQuery) + '/media/recent?access_token=640264369.ba4c844.20a62d124d39411a820b4e110baa3f3a&callback=?').then(function(response){
    while(container.hasChildNodes()) container.removeChild(container.firstChild);
    intro.style.display = "none";
    loadImage(response);
    document.getElementById('footer').setAttribute('position', 'static');
  })
}
  
//btn.addEventListener("click", ourRequest);

btn.addEventListener("click", function(event) {
    event.preventDefault();
    ourRequest();
});

mobileButton.addEventListener("click", function(event) {
    event.preventDefault();
    ourMobileRequest();
});

searchQuery.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        btn.click();
    }
});

function loadImage(e) {
  for(var i=0; i<20; i++){
  var image = e.data[i].images.standard_resolution.url;
  var newDiv = document.createElement('div');
  var newElement = document.createElement('img');
  var canvas = document.getElementById('canvas');
  newElement.className = "instaImage";
  canvas.appendChild(newElement);
  document.getElementsByClassName('instaImage')[i].setAttribute('src',image);
  
  }
}

function displayMobileSearch() {
  var mobForm = document.getElementById("mobileForm");
  mobForm.style.display = "block";
}

function closeMobileSearch() {
  var mobForm = document.getElementById("mobileForm");
  mobForm.style.display = "none";
}
