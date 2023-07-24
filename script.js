function volume_sphere() {
              let radius = document.getElementById('radius');
              let volume = document.getElementById('volume');
              let radiusValue = radius.value;
              let volumeValue = (4/3)*Math.PI*radiusValue**3;
              volume.value= volumeValue; 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
