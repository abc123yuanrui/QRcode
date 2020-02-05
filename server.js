var express = require('express');
var app = express();
const AgentCheck = 'user-agent';
const payMap = {aliPay:'AlipayClient', wechatPay:'MicroMessenger'};
app.get('/',function(req,res)
{
    const header = JSON.stringify(req.headers);
    headerObj = JSON.parse(header);
    const Agent = headerObj[AgentCheck];
    console.log(Agent);
    console.log(Agent.search('hello'));
    if(Agent.search(payMap.aliPay)>0){
        res.send('Show AliPay QRcode');
    }else if(Agent.search(payMap.wechatPay)>0){
        res.send('Show Wechat QRcode');
    }else{
        res.send('Web');
    }
    // user-agent
});
var server=app.listen(3000,function() {});