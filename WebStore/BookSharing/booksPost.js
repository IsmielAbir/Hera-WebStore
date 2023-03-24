document.getElementById('post').addEventListener('click', function() {

    const place = document.getElementById('place');
    const placeInput = place.value;

    const intro = document.getElementById('intro');
    const introInput = intro.value;

    const textField = document.getElementById('textEra');
    const textInput = textField.value;



    const containeradd = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card dis3">
            <h5 class="card-header heading">${placeInput}</h5>
            <div class="card-body">
                <h5 class="card-title">${introInput}</h5>
                <p class="card-text">${textInput}</p>
                
            </div>
        </div>
    `;



    containeradd.appendChild(div);

    place.value = '';
    intro.value = '';
    textField.value = '';


});