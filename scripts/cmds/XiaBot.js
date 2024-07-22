module.exports = {
    config: {
        name: "xiabot", //not a command
        role: 0,
        author: "Annaleiah",
        description: "Call for Xia",
    },
    onStart: async function ({ message, getLang, event }) {
        if (event.body && event.body.toLowerCase() == "xia") {
            return message.reply("I'm here! How may I help you?");
        }
    }
}