$(document).ready(function(){
    let h1 = $('h1')
    let button = $('.tombol')
    let input = $('.masuk')
    let p = $('p')
    h1.html("<u>Hallo</u>")
    button.click(function(){
        console.log(input.val())
        input.toggle()
    })
})