const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =   'http://api.weatherstack.com/current?access_key=9c13fc462cfdebade641afaaf0828a5a&query=' + latitude + ',' + longitude 
        request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find coordinates. Try another search.', undefined)
        } else {
            callback( undefined, {
                Forecast:  body.current.weather_descriptions[0] +'.' + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain and ' + body.current.humidity + ' humidity.'             
            })
        }} )
    }


module.exports = forecast