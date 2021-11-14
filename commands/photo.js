/*CMD
  command: photo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// see all parameters in https://core.telegram.org/bots/api#sendphoto
Api.sendPhoto({
  photo: "https://cataas.com/cat", // it is picture!
  caption: "Test photo",

  reply_markup: { inline_keyboard: [
    // line 1
    [
      // open the link on button pressing
      { text: "button1", url: "http://example.com" },
      // run command /onButton2 on button pressing
      { text: "button2", callback_data: "/onButton2" }
    ],
    // line 2
    [
       // see all params in
       // https://core.telegram.org/bots/api#inlinekeyboardbutton
       { text: "button3", callback_data: "/onButton3" }
    ]
  ]}
});
