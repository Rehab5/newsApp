const request = require('request');

const theNews = (country,callback) =>{
    const newsUrl = "https://newsapi.org/v2/top-headlines?country=" + country +" &apiKey=888fcce93cdf457fb90f0b80790e1650";
    request({url:newsUrl,json:true},(error,response)=>{
    if(error){
        callback('Unable to connect to news location',undefined);
    }
    else if(response.body.message){
        callback('Unable to find news location, try again',undefined);
    }
    else if(response.body.reviews == 0){
        callback('Country name is wrong, correct it',undefined);
    }
    else{
        callback(undefined,
            {
            title:response.body.cards[0].title ,
            img:response.body.cards[0].urlToImage,
            description: response.body.cards[0].description,
            time:response.body.cards[0].timeUpdate
            },
            {
            title:response.body.cards[1].title ,
            img:response.body.cards[1].urlToImage,
            description: response.body.cards[1].description,
            time:response.body.cards[1].timeUpdate
            },
            {
            title:response.body.cards[2].title ,
            img:response.body.cards[2].urlToImage,
            description: response.body.cards[2].description,
            time:response.body.cards[2].timeUpdate
            },
            {
            title:response.body.cards[3].title ,
            img:response.body.cards[3].urlToImage,
            description: response.body.cards[3].description,
            time:response.body.cards[3].timeUpdate
            }
        )};
    });  
};

module.exports = theNews;