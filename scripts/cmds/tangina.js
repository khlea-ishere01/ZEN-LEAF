module.exports = {
 config: {
	 name: "tanginamo",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "tangina") {
 return message.reply({
 body: "aba tangina mo rin, minumura mo na ako ah? can't you see pinapasaya kita tapos gaganiyanin mo ako? 🤨",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9bNeakd.gif")
 });
 }
 }
}
