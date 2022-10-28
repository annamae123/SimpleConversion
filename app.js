const kilometers = document.getElementById('kilometers')
    const miles = document.getElementById('miles')

    kilometers.addEventListener('input', () =>{
        value = parseFloat(kilometers.value) / 1.609344
        miles.value =  value 
    })
    miles.addEventListener('input', () =>{
        value = parseFloat(miles.value) * 1.609344
        kilometers.value =  value 
    })


    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')

    hours.addEventListener('input', () =>{
        value = parseFloat(hours.value) * 60
        minutes.value =  value 
    })
    minutes.addEventListener('input', () =>{
        value = parseFloat(minutes.value) /  60
        hours.value =  value 
    })

    const kilogram = document.getElementById('kilogram')
    const gram = document.getElementById('gram')

    kilogram.addEventListener('input', () =>{
        value = parseFloat(kilogram.value) * 1000
        grams.value =  value 
    })
    grams.addEventListener('input', () =>{
        value = parseFloat(kilograms.value) /  1000
        kilograms.value =  value 
    })