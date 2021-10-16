const discord = require('discord.js') 
const fetch = require('node-fetch') 

module.exports = {
    config: {
        name: "game-betrayal",
        aliases: ['g-b'],
        category: "core",
        
    },

    run: async (Client, message, args) => {
        let channel = message.member.voice.channel;  
        if(!channel) return message.channel.send("คุณต้องอยู่ใน พูดคุย") 
    
        fetch(`https://discord.com/api/v7/channels/${channel.id}/invites`, { 
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,  
                max_uses: 0, 
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,  
                validate: null 
            }), 
            headers: {
                "Authorization": `Bot ${Client.token}`, 
                "Content-Type": "application/json"  
            }
        })
           
    
        .then(res => res.json())  
        .then(invite => {
            if(!invite.code) return message.channel.send("น่าเศร้าที่ฉันไม่สามารถเริ่มต้น yt ด้วยกัน")
            message.channel.send(`[กดเพื่อเล่น] https://discord.com/invite/${invite.code}`) 
    
        })
    }
};