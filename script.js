const gifCount = 10;
const gifContainer = document.getElementById('gifContainer');

function getRandomGIFs() {
  for (let i = 0; i < gifCount; i++) {
    const img = new Image();
    img.src = `https://gif.squirrelcom.repl.co/${i + 1}.gif`; // Change the path and filenames according to your folder structure
    
    // You can set additional attributes or styles for the images here if needed
    img.style.width = '200px';
    img.style.height = 'auto';
    img.style.margin = '5px';
    
    gifContainer.appendChild(img);
  }
}

getRandomGIFs();
