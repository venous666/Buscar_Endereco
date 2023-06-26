function buscaCep(){
    let cep = document.getElementById('cep').value 
    let endereco = document.getElementById('endereco')
    let address = document.getElementById('address')
    let district = document.getElementById('district')
    let city = document.getElementById('city')
    let state = document.getElementById('state')

    let cepValido = cep.substr(0,5) + "-" + cep.substr(5) + '.json'
    let url = "https://cdn.apicep.com/file/apicep/" +cepValido
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // endereco.innerHTML = data.address + '<br>' + data.district+'<br>' + data.city+'<br>'+ data.state + '<br>Brasil'
        city.value = data.city;
        state.value = data.state;
        district.value = data.district;
        address.value = data.address;
       
       
    })
}