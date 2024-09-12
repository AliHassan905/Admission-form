let Students = [];


function Submit() {
    var FirstName = document.getElementById('text').value;
    var SecondName = document.getElementById('text1').value;
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('pass').value;
    var Number = document.getElementById('num').value;
    var City = document.getElementById('City').value;
    var ZipCode = document.getElementById('zip').value;
    if (FirstName && SecondName && Email && Password && Number && City && ZipCode) {

        Students.push({ FirstName, SecondName, Email, Password, Number, City, ZipCode })



        document.getElementById('text').value = '';
        document.getElementById('text1').value = '';
        document.getElementById('email').value = '';
        document.getElementById('pass').value = '';
        document.getElementById('num').value = '';
        document.getElementById('City').value = '';
        document.getElementById('zip').value = '';
        DataDisplay()
    }
    else {
        alert('Not Login')
    }
}
function DataDisplay() {
    let OutPut = document.getElementById('root');
    console.log(Students)
    OutPut.innerHTML = '';

    Students.forEach((index) => {
        OutPut.innerHTML += `<p> First Name :${index.FirstName} <br> Second name :${index.SecondName} <br> Email :,${index.Email} <br> PassWord : ${index.Password} <br> Number :${index.Number} <br> City : ${index.City}<br> ZipCode: ${index.ZipCode} </p>`
    })
}