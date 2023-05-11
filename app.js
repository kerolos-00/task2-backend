// const request = require ("request")
// const url ="http://api.weatherapi.com/v1/current.json?key=8073f468f7524854ab9181145231105&q=egypt&aqi=no"
// request ({url} , (error , Response) =>{
//     const datal =JSON.parse(Response.body)
// console.log(datal)
// console.log(datal.location.name)
// console.log(datal.current.condition.text)
// })
// const request = require ("request")
// const url ="http://api.weatherstack.com/current?access_key=22c437e08af88ea0c08cd38970811a9e&query=New%20York"
// request ({url , json : true} , (error , Response) => {
//     // const datal =JSON.parse(Response.body)
//     console.log(Response.body.location.name)
//     console.log(Response.body.current.weather_descriptions[0]) 
// })
// const request = require ("request")
// const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Vyb2xvcy0wMCIsImEiOiJjbGhqaW1tdjAwaTh2M2VudWNyMGFjYXc1In0.KtyzA32T5I5Lsk7OQRwZQg"
// request ({url , json : true} , (error , Response) =>{
//     if(error){
//         console.log("ERROR HAS OCCURED")
//     }else if (Response.body.error) {
//         console.log(Response.body.error.message)
//     }else {
//         console.log(Response.body.location.name ,Response.body.current.condition.text)
//     }
// })
const request = require ("request")
// const url ="http://api.weatherapi.com/v1/current.json?key=8073f468f7524854ab9181145231105&q=egypt&aqi=no"
// request ({url, json : true} , (error , response) => {  
//     if(error) {
//         console.log("Error has Occurred")
//     } else if(response.body.error){
//         console.log(response.body.error.message)
//     } else {
//         console.log(response.body.location.name , response.body.current.condition.text)
//     }
// })
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Vyb2xvcy0wMCIsImEiOiJjbGhqaW1tdjAwaTh2M2VudWNyMGFjYXc1In0.KtyzA32T5I5Lsk7OQRwZQg'
// request ({url : geocodeUrl , json : true} , (error , response) => {
//     if (error) {
//         console.log("Unable to connect geocode Service")
//     }
//     else if (response.body.message) {
//         console.log(response.body.message)
//     }
//     else if (response.body.features.length == 0){
//         console.log("Unable to find location")
//     } 
//     else {
//         const longtitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude , longtitude)
//     }
// } )
// const forecast = (latitude , longtitude , callback ) => {
// const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Vyb2xvcy0wMCIsImEiOiJjbGhqaW1tdjAwaTh2M2VudWNyMGFjYXc1In0.KtyzA32T5I5Lsk7OQRwZQg"
// request ({url, json : true} , (error , response) => {   
//     if(error) {
//          callback ("Unable to connect weather service" , undefined)
//     } else if(response.body.error){
//          callback (response.body.error.message , undefined)
//     } else {
//             callback (undefined , response.body.location.name + ' It Is  ' + response.body.current.condition.text  )
//     }
// })
// }
 const forecast = require ("./data1.js/forecast")
// forecast(29.871903452398 , 26.4941838299718 , (error , data) => {
//      console.log("ERROR : " , error)
//      console.log("DATA  : " , data)
// } )
// const geocode = (address , callback) => {
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Vyb2xvcy0wMCIsImEiOiJjbGhqaW1tdjAwaTh2M2VudWNyMGFjYXc1In0.KtyzA32T5I5Lsk7OQRwZQg'
// request ({url : geocodeUrl , json : true} , (error , response) => {
//     if (error) {
//         callback ("nable to connect geocode Service" , undefined)
//     }
//     else if (response.body.message) {
//         callback (response.body.message , undefined)
//     }
//     else if (response.body.features.length == 0){
//          callback ("Unable to find location"  , undefined)
//     } 
//     else {
//         callback (undefined , {
//              longtitude :  response.body.features[0].center[0] ,
//              latitude : response.body.features[0].center[1]
//         } )
//     }
// } )
// }
 const geocode = require ('./data1.js/geocode')
//  console.log(process.argv)
const country = process.argv[2]
geocode ( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data)
    if (data) {
        forecast( data.latitude , data.longtitude , (error , data) => {
            console.log("ERROR : " , error)
            console.log("DATA  : " , data)
       } )
    } else {
        console.log("Data Entered have An Error")
    } 
} )