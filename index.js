const axios = require('axios');
const apiKey = 'ef0b0973b783e0614ac87612ec04344b';
const Coordenadas = require('./coordenadas');
const Conditions = require('./conditions');

async function main(){
    const cidade = 'London'

    const response1 = await Coordenadas(cidade, apiKey)
    const latitude = response1[0].lat
    const longitude = response1[0].lon
    
    const response2 = await Conditions(latitude, longitude, apiKey)
    const descricao = response2.weather[0].description
    const sensacaoKelvin = response2.main.feels_like
    const sensacaoGraus = Math.round(sensacaoKelvin-273.15)

    console.log()
    console.log(`Cidade: ${cidade}`)
    console.log(`Latitude: ${latitude}`)
    console.log(`Longitude: ${longitude}`)
    console.log(`Sensação Térmica em Kelvins: ${sensacaoKelvin} K`)
    console.log(`Sensação Térmica em Graus Celsius: ${sensacaoGraus} Cº`)
    console.log(`Descrição: ${descricao}`)
    console.log()
}

main()