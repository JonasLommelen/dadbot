const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjkyODA5MjIxNTUyNDcyMTQx.Xn1LKA.Po5QiRAnvKN6uWW2LpMduraRqCw';
var PREFIX = 'ik';

const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.write('Hey');
    res.end();
}).listen(4000);
bot.login(token);

bot.on('ready', () => {
    console.log('Bot is online');
})

bot.on('message', message => {
    if (message.author.username == 'TuurVR') {
        message.channel.send('Tuur ge bent ne fucking retard');
        message.channel.send('En uwe baard trekt op niks!');
    } else if (message.author.username != 'dadbot') {
        var lowerCase = message.content.toLocaleLowerCase();
        console.log(lowerCase);
        var position = lowerCase.search('ik');

        if (position >= 0) {

            rest = message.content.substring(position + PREFIX.length + 1);

            let args = rest.split(" ");

            for (let i = 0; i < args.length; i++) {
                const element = args[i];
                if (element.includes('!') ||
                    element.includes('?') ||
                    element.includes('.') ||
                    element.includes(',') ||
                    element.includes(';') ||
                    element.includes(':') ||
                    element.includes('/')) {
                    //element.slice(0, element.length());
                    args = args.slice(0, i + 1);
                }
            }

            switch (args[0]) {
                case 'ben':
                case 'zen':
                    args.shift();
                    if (args[0] == 'dadbot') {
                        message.channel.send('dag ' + args[0] + ', ik ben ook dadbot!');
                    } else if (args[0].toLocaleLowerCase() == 'jonas') {
                        message.channel.send('Jonas is een programmeerGOD');
                    } else if (args[0].toLocaleLowerCase() == 'jones') {
                        message.channel.send('Jones is een programmeerGOD');
                    } else if (args[0].toLocaleLowerCase() == 'jonaslommelen') {
                        message.channel.send('Jonas is een programmeerGOD');
                    } else if (args[0].toLocaleLowerCase() == 'joneslommelen') {
                        message.channel.send('Jonas is een programmeerGOD');
                    } else if (args[0].toLocaleLowerCase() == 'lommelen') {
                        message.channel.send('Jonas is een programmeerGOD');
                    } else {
                        message.channel.send('dag ' + args.join(" ") + ', ik ben dadbot!');
                    }
                    break;
            }
        }
    }
})