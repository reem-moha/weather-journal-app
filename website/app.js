/* Global Variables */

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const baseURL ='http://api.openweathermap.org/data/2.5/forecast?zip='
const apiKey ='&appid=a724ee6e776d5fc1dde0d4aa24c56c1f&units=metric';

document.getElementById('generate').addEventListener('click', getUserCredentials);

function getUserCredentials(e){

    const userZip = document. getElementById('zip'). value;
    const userFav = document. getElementById('feelings'). value;
    getUserTemp(baseURL,userZip,apiKey)
    
    .then((data) => {
        console. log (data);
        const day = data. list[0].dt_txt.slice(0, 10);
        postData('/add', {temp:data.list[0].main.temp, date: day, userRes: userFav})
        updateUI();   
})
}

const getUserTemp = async (baseURL ,userZip ,apiKey) => {
    const res = await fetch(baseURL+userZip+apiKey)
    try{
        const data = await res. json();
        console.log (data)
        return data;
    } catch(error) {
        console. log ("error", error);
    }
}
    
    const postData = async (url,data) =>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
            return response.json();
    }
    
    const updateUI = async () => {
        const res = await fetch('/get')
        try {
            const userData = await res.json();
            document.getElementById('temp').innerHTML = `Your Temprature: ${userData.temp} Celcius`;
            document.getElementById('date').innerHTML = `Your Date: ${userData.date}`;
            document.getElementById('content').innerHTML=`I feel: ${userData.userRes}`;
    
        }catch(error) {
    
    console.log("error", error);
        }
    }