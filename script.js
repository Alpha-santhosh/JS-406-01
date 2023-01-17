const countries_name = []
countries_data.map(e=>{
    countries_name.push(e.name.toLocaleLowerCase())
})

const numberofcountries = document.getElementById("numberofcountries")
numberofcountries.innerText = `Total Number of countries : ${countries_name.length}`

const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")

function startingword(){
    b1.classList.add("focus")
    b2.classList.remove("focus")
    b3.classList.remove("focus")
    const inputkey = document.getElementById("key")
    inputkey.setAttribute("onkeyup","startingword()")
    const key = document.getElementById("key").value 
    console.log(key)
    var matchedcountries = []
    const  content = document.getElementById("content")
    content.innerHTML = ""
    var countriesResults = document.getElementById("countriesResults")
    countriesResults.innerText=""
    for(let i=0;i<countries_name.length;i++)
    {
        var True = (countries_name[i].startsWith(key.toLowerCase()))
        var countriesResults = document.getElementById("countriesResults")
        
        if(True){
            matchedcountries.push(countries_name[i])
            content.innerHTML += `<div style ="
        width:140px;
        height:145px;
        display:flex;
        justify-content:center;
        align-items: center;
        margin:2%;
        font-weight: bold;
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 84, 117, 0.529)),url(https://p4.wallpaperbetter.com/wallpaper/370/608/909/background-earth-continents-world-map-hd-wallpaper-preview.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px;
        color:white;
        ">
                <p style="padding:10px;width:100%;text-align: center;">${countries_name[i].toUpperCase()}</p>
            </div>`
        }
    }
    countriesResults.innerText =`Countries starts with ${key} are ${matchedcountries.length}.`
    console.log(matchedcountries.length)
}

function searchwithanyword() {
    b1.classList.remove("focus")
    b2.classList.add("focus")
    b3.classList.remove("focus")
    const inputkey = document.getElementById("key")
    inputkey.setAttribute("onkeyup","searchwithanyword()")
    const key = document.getElementById("key").value 
    console.log(key)
    var matchedcountries = []
    const  content = document.getElementById("content")
    content.innerHTML = ""
    var countriesResults = document.getElementById("countriesResults")
    countriesResults.innerText=""
    for(let i=0;i<countries_name.length;i++)
    {
        var True = (countries_name[i].includes(key.toLowerCase()))

        if(True){
            matchedcountries.push(countries_name[i])
            content.innerHTML += `<div style ="
        width:140px;
        height:145px;
        display:flex;
        justify-content:center;
        align-items: center;
        margin:2%;
        font-weight: bold;
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 84, 117, 0.529)),url(https://p4.wallpaperbetter.com/wallpaper/370/608/909/background-earth-continents-world-map-hd-wallpaper-preview.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px;
        color:white;
        ">
                <p style="padding:10px;width:100%;text-align: center;">${countries_name[i].toUpperCase()}</p>
            </div>`
        }
    }
    countriesResults.innerText =`Countries containin ${key} are ${matchedcountries.length}.`
    console.log(matchedcountries.length)
}

function allcountries() {
    b1.classList.remove("focus")
    b2.classList.remove("focus")
    b3.classList.add("focus")
    content.innerHTML = ""
    var countriesResults = document.getElementById("countriesResults")
    countriesResults.innerText=""
    for(let i=0;i<countries_name.length;i++){
        content.innerHTML += `<div style ="
        width:140px;
        height:145px;
        display:flex;
        justify-content:center;
        align-items: center;
        margin:2%;
        font-weight: bold;
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 84, 117, 0.529)),url(https://p4.wallpaperbetter.com/wallpaper/370/608/909/background-earth-continents-world-map-hd-wallpaper-preview.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px;
        color:white;
        ">
                <p style="padding:10px;width:100%;text-align: center;">${countries_name[i].toUpperCase()}</p>
            </div>`
    }
}

function intialstage() {
    const  content = document.getElementById("content")
    content.innerHTML = ""
    for(let i=0;i<countries_name.length;i++){
        content.innerHTML += `<div style ="
        width:140px;
        height:145px;
        display:flex;
        justify-content:center;
        align-items: center;
        margin:2%;
        font-weight: bold;
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 84, 117, 0.529)),url(https://p4.wallpaperbetter.com/wallpaper/370/608/909/background-earth-continents-world-map-hd-wallpaper-preview.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px;
        color:white;
        ">
                <p style="padding:10px;width:100%;text-align: center;">${countries_name[i].toUpperCase()}</p>
            </div>`
    }
}

intialstage()