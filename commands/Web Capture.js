/*CMD
  command: Web Capture
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your link you want capture.
  keyboard: 
  aliases: 
CMD*/

function validURL(url) {
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  return regex.test(url)
}

if (validURL(message)) {
  Bot.sendMessage("*Generating , it will take time*")
  Api.sendPhoto({
    photo:
      "https://capture-website-api.herokuapp.com/capture?url=" + message + "",
    caption: "*🆔 Captured By @" + bot.name + ".*",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⏏️Developer", url: "https://telegram.me/trojenstrom" },
          { text: "↩️ Back", callback_data: "/start" }
        ]
      ]
    },
    disable_web_page_preview: true
  })
} else {
  Bot.sendMessage("Wrong URL")
}
