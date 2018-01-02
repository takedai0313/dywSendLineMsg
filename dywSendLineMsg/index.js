'use strict';


const webclient = require("request");
const fs = require("fs");
const url = "https://api.line.me/v2/bot/message/reply";
const authorization = (JSON.parse(fs.readFileSync(process.env.setting, 'utf8'))).bearer;

exports.handler = (event, context, callback) => {
    console.log(event);
    // TODO implement
    var param = {
        "replyToken": event.replyToken,
        "messages": [
            {
                "type": "text",
                "text": event.msg
            }
        ]
    };
    
    webclient.post({
        url: url,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": authorization
        },
        body: JSON.stringify(param)
    }, (err, response, body) => {
        if(err) console.log(err);
        else console.log("response success" + body);
    });
    callback(null);
};