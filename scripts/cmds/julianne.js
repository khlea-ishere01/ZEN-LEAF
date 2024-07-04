module.exports = {
        config: {
                        name: "julianne",
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
        event,
        message,
        getLang
}) {
        if (event.body && event.body.toLowerCase() == "julianne") return message.reply("uy nanay ko yan");
}
};