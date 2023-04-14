function loadCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data))

}

function showCountries(show) {
    const countries = document.getElementById('showcontries');
    for (const country of show) {
        const contryItem = document.createElement('div');
        contryItem.innerHTML = `
        <div class="col" >

        <div class="card h-100">
                <div class="card-body">
                <h3 class="card-title">${country.name.common}</h3>
                        <h4 class="card-text">Capital: ${country.capital}</h4>
                        <h5>Time Zone: ${country.timezones}</h5>
                        <h6>Region: ${country.region}   ||  Population: ${country.population}</h6>
                    
                    </div>
                    <img src=${country.flags.png} width="60px" height="250px" class="card-img-top" alt="...">
                </div>
                </div>
        `;
        countries.append(contryItem);
    }

}

loadCountries();