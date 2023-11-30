const axios = require('axios');

async function Conditions(latitude, longitude, apiKey){
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        return response.data
    }
    catch(err){
        console.error("Encontrado um erro ao tentar obter condições climáticas:", err.message)
    }
}

module.exports = Conditions;