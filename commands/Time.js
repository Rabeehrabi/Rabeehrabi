/*CMD
  command: Time
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var date = new Date(); 

var time = "Time: " + 
   + date.getHours() + ":"  
   + date.getMinutes() + ":" 
   + date.getSeconds();

Bot.sendMessage(time);
