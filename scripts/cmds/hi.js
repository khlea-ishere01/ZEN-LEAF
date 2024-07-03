module.exports = {
	config: {
			name: "hi",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
 let messages = ["hello love", "hi baby", "Hi, good evening"]
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hi") return message.reply(Math.floor(Math.random()messages.length));
}
};