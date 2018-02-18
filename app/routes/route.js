module.exports = function(app, ) {
  var TextMessage=require('../models/textMessage.js')
  app.post('/webhooks/inbound-sms',function(req,res){
    var textMessage=new TextMessage()
    textMessage.msisdn=req.msisdn
    textMessage.to=req.to
    textMessage.messageId=req.messageId
    textMessage.text=req.text
    textMessage.type=req.type
    textMessage.keyword=req.keyword
    textMessage.message=req.message
    textMessage.timestamp=req.timestamp
    textMessage.nonce=req.nonce
    textMessage.concat=req.concat
    textMessage.data=req.data
    textMessage.udh=req.udh
    textMessage.save(function(err){
      if(err){
        console.log(err)
      }
      res.send(200)
    })
})
}
