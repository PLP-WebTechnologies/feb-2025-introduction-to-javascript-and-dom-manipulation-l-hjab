// Change text and style
document.getElementById('changeTextBtn').addEventListener('click', function () {
    const info = document.getElementById('info');
    info.textContent = 'Text has been changed dynamically!';
    info.style.color = 'blue';
    info.style.fontWeight = 'bold';
  });
  
  // Add or remove an element
  document.getElementById('toggleElementBtn').addEventListener('click', function () {
    const container = document.getElementById('dynamicContainer');
    const existing = document.getElementById('newElement');
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newDiv = document.createElement('div');
      newDiv.id = 'newElement';
      newDiv.textContent = 'This element was added dynamically!';
      newDiv.style.marginTop = '10px';
      newDiv.style.padding = '10px';
      newDiv.style.backgroundColor = '#f0f0f0';
      container.appendChild(newDiv);
    }
  });