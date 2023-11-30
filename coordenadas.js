const axios = require('axios');

async function Coordenadas(cidade, apiKey){
    try{
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${apiKey}&lang=pt_br&units=metric`);
        return response.data
    }
    catch(err){
        console.error("Encontrado um erro ao tentar obter coordenadas:", err.message)
    }
}

module.exports = Coordenadas;