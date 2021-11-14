/*CMD
  command: Keyboard
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Google", url: "https://google.com"},
    {title: "kadhakal", url: "https://kadhakal.com/" },
    {title: "KAMBI KADHAKAL", url: "https://kambistories.com/"}
];

Bot.sendInlineKeyboard(buttons, "hai this KADHAKALS keyboards ");
