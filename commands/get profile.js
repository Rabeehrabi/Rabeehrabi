/*CMD
  command: get profile
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send you're user name.
  keyboard: 
  aliases: 
CMD*/

Api.getUserProfilePhotos({
    user_id: user.telegramid,
    
    // this command will be executed after getting photos
    on_result: "onGetProfilePhotos"
});
