/*CMD
  command: onGetProfilePhotos
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// you can inspect result:
// Bot.inspect(options) 

if(!options.ok){
   return Bot.sendMessage("Error!");
}

if(options.result.total_count==0){
   return Bot.sendMessage("You have no photos in profile")
}

let photos = options.result.photos;
for(let i in photos){
   Api.sendPhoto( { photo: photos[i][0].file_id } );
}
