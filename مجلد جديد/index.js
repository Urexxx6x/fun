const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const poll = require('./poll')

var prefix = '='
client.on('ready', () => {
  console.log('The client is ready!')

  poll(client)

})
client.on('message',async message => {
  if(message.content.startsWith(prefix + "فيلم")) {
 
if(!message.channel.guild) return message.reply('');
 

var submite =  message.channel.id === "797384937496903680"
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص الأفلام");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسم الفلم  الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب تقيم الافلام الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من تصنيف الفلم الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;

              let color1;
              msg.edit('🤵 **| من فضلك اكتب درجة لون ألأمبيد ب HX... ✏ **').then(msg => {
 
 
 
                message.channel.awaitMessages(filter, {
   
                  max: 1,
   
                  time: 90000,
   
                  errors: ['time']
   
                })
   
                .then(collected => {
   
                  collected.first().delete();
   
                color1 = collected.first().content;
             
                let sesion1;
                msg.edit('🤵 **| من فضلك اكتب سنة الاصدار ... ✏ **').then(msg => {
   
   
   
                  message.channel.awaitMessages(filter, {
     
                    max: 1,
     
                    time: 90000,
     
                    errors: ['time']
     
                  })
     
                  .then(collected => {
     
                    collected.first().delete();
     
                  sesion1 = collected.first().content;
              
                  let Trailer;
                  msg.edit('🤵 **| من فضلك ضع رابط تريلر الفلم ... ✏ **').then(msg => {
     
     
     
                    message.channel.awaitMessages(filter, {
       
                      max: 1,
       
                      time: 90000,
       
                      errors: ['time']
       
                    })
       
                    .then(collected => {
       
                      collected.first().delete();
       
                    Trailer = collected.first().content;
                   
                    let IMDB;
                    msg.edit('🤵 **| من فضلك ضع رابط الفلم في موقع IMDB ... ✏ **').then(msg => {
       
       
       
                      message.channel.awaitMessages(filter, {
         
                        max: 1,
         
                        time: 90000,
         
                        errors: ['time']
         
                      })
         
                      .then(collected => {
         
                        collected.first().delete();
         
                      IMDB = collected.first().content;   

                      let img;
                      msg.edit('🤵 **|  من فضلك ضع رابط للصوره الفلم  ... ✏ **').then(msg => {
         
         
         
                        message.channel.awaitMessages(filter, {
           
                          max: 1,
           
                          time: 90000,
           
                          errors: ['time']
           
                        })
           
                        .then(collected => {
           
                          collected.first().delete();
           
                        img = collected.first().content;  
         
                        let time1;
                        msg.edit('🤵 **|  من فضلك ضع أكتب مدة الفلم  ... ✏ **').then(msg => {
           
           
           
                          message.channel.awaitMessages(filter, {
             
                            max: 1,
             
                            time: 90000,
             
                            errors: ['time']
             
                          })
             
                          .then(collected => {
             
                            collected.first().delete();
             
                         time1 = collected.first().content; 
                         
                         let stars;
                         msg.edit('🤵 **|  من فضلك أكتب بعض من نجوم الفلم  ... ✏ **').then(msg => {
            
            
            
                           message.channel.awaitMessages(filter, {
              
                             max: 1,
              
                             time: 90000,
              
                             errors: ['time']
              
                           })
              
                           .then(collected => {
              
                             collected.first().delete();
              
                          stars= collected.first().content; 
                          
                          let stors;
                          msg.edit('🤵 **|  من فضلك قصة الفلم  ... ✏ **').then(msg => {
             
             
             
                            message.channel.awaitMessages(filter, {
               
                              max: 1,
               
                              time: 90000,
               
                              errors: ['time']
               
                            })
               
                            .then(collected => {
               
                              collected.first().delete();
               
                           stors= collected.first().content; 
                      
                           let ts1;
                           msg.edit('🤵 **|  من فضلك حدد التصنيف العمري  ... ✏ **').then(msg => {
              
              
              
                             message.channel.awaitMessages(filter, {
                
                               max: 1,
                
                               time: 90000,
                
                               errors: ['time']
                
                             })
                
                             .then(collected => {
                
                               collected.first().delete();
                
                            ts1= collected.first().content; 
                                   
                                 
 
      msg.edit('🛡 **| [ هل انت جاهز للنشر الفلم؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم الافلام**');
 
          collected.first().delete();
          let im = msg.author.tag
          let imp = msg.author.displayAvatarURL({dynamic: true, format: "png"})
let movieCH = message.guild.channels.cache.find(channel => channel.name === '┊افلام')
          let embed = new Discord.MessageEmbed()
          .setTitle(`${thisMessage}`)
          .setColor(color1)
          .setDescription(`\`Links:\` **[Trailer](${Trailer}) | [IMDB](${IMDB}) **`)
          .setAuthor('Fun Bot', 'https://cdn.discordapp.com/avatars/780688969200566332/b1553bc6997a073441ef4be582ecff7b.png?size=1024', 'https://discord.gg/FUNN')
          .setImage(`${img}`)                                                               
          .addField('تقيم الفلم  <:walkoffame:816969927755038731>',  `${boi}/10`   ,true )
          .addField(' تصنيف الفلم   <:cinema:816969927117504524>',  `${boi2}` ,true  )
          .addField(' سنة الاصدار  <:placeholder:816969927940374528>', `${sesion1}` ,true)
          .addField('مدة الفلم   <:popcorn:816969927952171038> ' , `${time1}` ,true)
          .addField('بعض من نجوم الفلم   <:oscar:816969927617282088> ' , `${stars}` ,true ) 
          .addField('التصنيف العمري <:binoculars:816969927226556416>' , `${ts1}` , true)
          .addField('قصة الفلم   <:writer:816969928091500574>          ', `${stors}` ,false)
          .setFooter(['كتابة و تحرير :' + `‎ |‎ ‎  ${im}`], `${imp}`
            )

 


 movieCH.send(embed);
 
 
        }
 
      }
 
  );
              })});
});
 
    });
 
  }
 
    );
 
  });
       
}
 
);

})}) })}) })}) })}) })}) })}) })}) })}) })}});


client.on('message', msg=>{
  var channel =  msg.channel.id === "765940310940975116" 
        if (!channel) return false;


  let btrolie = msg.content.split(" ").slice('').join(" ")
  if(msg.author.bot)return;
  if(msg.content.startsWith(''))
 {
    const Embed = new  Discord.MessageEmbed()

    .setTitle("شكرا لاقتراحك ✅")
    .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: "png"}))
    .addField("أقتراحك "  , ` ${btrolie}  `)
    .setColor("#ffa5a5")
    .setFooter(` سوف يتم مراجعت اقتراحك ` , `https://cdn.discordapp.com/emojis/810423545279938582.png?v=1`)

    msg.author.send(Embed);

   msg.delete()
        

  var embed = new Discord.MessageEmbed()
  
            .setAuthor(`${msg.author.tag}`, msg.guild.iconURL({dynamic: true, format: "png"}))
     
            .setThumbnail(msg.guild.iconURL({dynamic: true, format: "png"}))
            .setImage("https://cdn.discordapp.com/attachments/808918336859406376/809889299645988914/SG.png")
            .setTitle('New suggestion')
            .setDescription(` ${btrolie}  `)
            .setColor("#ffa5a5")
            .setFooter([msg.author.username + `‎ |‎ ‎ ID ${msg.author.id}`], 
            msg.author.displayAvatarURL({dynamic: true, format: "png"})
            )

            // .setFooter(`${msg.author.tag} | ID: ${msg.author.id} أقتراح من`)
            // .setFooter(msg.guild.iconURL())

           


  msg.channel.send(embed).then((message) => {
    message.react('810421496832720927').then(() => {
      message.react('810421497281642496')
      
    })
  })
 }
})



var guilds = {};
client.on('message',async message => {
  if(message.content.startsWith(prefix + "انمي")) {
 
if(!message.channel.guild) return message.reply('');
 

var submite =  message.channel.id === "797384937496903680"
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص ألانمي");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسم الانمي  الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب تقيم الانمي الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من تصنيف الانمي الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;

              let color1;
              msg.edit('🤵 **| من فضلك اكتب درجة لون ألأمبيد ب HX... ✏ **').then(msg => {
 
 
 
                message.channel.awaitMessages(filter, {
   
                  max: 1,
   
                  time: 90000,
   
                  errors: ['time']
   
                })
   
                .then(collected => {
   
                  collected.first().delete();
   
                color1 = collected.first().content;
             
                let sesion1;
                msg.edit('🤵 **| من فضلك اكتب سنة الاصدار ... ✏ **').then(msg => {
   
   
   
                  message.channel.awaitMessages(filter, {
     
                    max: 1,
     
                    time: 90000,
     
                    errors: ['time']
     
                  })
     
                  .then(collected => {
     
                    collected.first().delete();
     
                  sesion1 = collected.first().content;
              
                  let Trailer;
                  msg.edit('🤵 **| من فضلك ضع رابط تريلر الانمي ... ✏ **').then(msg => {
     
     
     
                    message.channel.awaitMessages(filter, {
       
                      max: 1,
       
                      time: 90000,
       
                      errors: ['time']
       
                    })
       
                    .then(collected => {
       
                      collected.first().delete();
       
                    Trailer = collected.first().content;
                   
  

                      let img;
                      msg.edit('🤵 **|  من فضلك ضع رابط للصوره الانمي  ... ✏ **').then(msg => {
         
         
         
                        message.channel.awaitMessages(filter, {
           
                          max: 1,
           
                          time: 90000,
           
                          errors: ['time']
           
                        })
           
                        .then(collected => {
           
                          collected.first().delete();
           
                        img = collected.first().content;  
         
                        let time1;
                        msg.edit('🤵 **|  من فضلك ضع أكتب مدة الانمي  ... ✏ **').then(msg => {
           
           
           
                          message.channel.awaitMessages(filter, {
             
                            max: 1,
             
                            time: 90000,
             
                            errors: ['time']
             
                          })
             
                          .then(collected => {
             
                            collected.first().delete();
             
                         time1 = collected.first().content; 
                         
                         let stars;
                         msg.edit('🤵 **|  من فضلك أكتب بعض من نجوم الانمي  ... ✏ **').then(msg => {
            
            
            
                           message.channel.awaitMessages(filter, {
              
                             max: 1,
              
                             time: 90000,
              
                             errors: ['time']
              
                           })
              
                           .then(collected => {
              
                             collected.first().delete();
              
                          stars= collected.first().content; 
                          
                          let stors;
                          msg.edit('🤵 **|  من فضلك قصة الانمي  ... ✏ **').then(msg => {
             
             
             
                            message.channel.awaitMessages(filter, {
               
                              max: 1,
               
                              time: 90000,
               
                              errors: ['time']
               
                            })
               
                            .then(collected => {
               
                              collected.first().delete();
               
                           stors= collected.first().content; 
                      
                           let ts1;
                           msg.edit('🤵 **|  من فضلك حدد التصنيف العمري  ... ✏ **').then(msg => {
              
              
              
                             message.channel.awaitMessages(filter, {
                
                               max: 1,
                
                               time: 90000,
                
                               errors: ['time']
                
                             })
                
                             .then(collected => {
                
                               collected.first().delete();
                
                            ts1= collected.first().content; 
                                   
                                 
 
      msg.edit('🛡 **| [ هل انت جاهز للنشر الفلم؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم الافلام**');
 
          collected.first().delete();
          let im = msg.author.tag
          let imp = msg.author.displayAvatarURL({dynamic: true, format: "png"})
let movieCH = message.guild.channels.cache.find(channel => channel.name === '┊انمي')
          let embed = new Discord.MessageEmbed()
          .setTitle(`${thisMessage}`)
          .setColor(color1)
          .setDescription(`\`Links:\` **[Trailer](${Trailer}) **`)
          .setAuthor('Fun Bot', 'https://cdn.discordapp.com/avatars/780688969200566332/b1553bc6997a073441ef4be582ecff7b.png?size=1024', 'https://discord.gg/FUNN')
          .setImage(`${img}`)         
    
          .addField('تقيم الأنمي  <:walkoffame:816969927755038731>',  `${boi}/10`   ,true )
          .addField(' تصنيف ألانمي   <:cinema:816969927117504524>',  `${boi2}` ,true  )
          .addField(' سنة ألانمي  <:placeholder:816969927940374528>', `${sesion1}` ,true)
          .addField('مدة ألانمي   <:popcorn:816969927952171038> ' , `${time1}` ,true)
          .addField('شخصيات ألانمي   <:oscar:816969927617282088> ' , `${stars}` ,true ) 
          .addField('التصنيف العمري <:binoculars:816969927226556416>' , `${ts1}` , true)
          .addField('قصة ألانمي   <:writer:816969928091500574>          ', `${stors}` ,false)
          .setFooter(['كتابة و تحرير :' + `‎ |‎ ‎  ${im}`], `${imp}`
            )

 


 movieCH.send(embed);
 
 
        }
 
      }
 
  );
              })});
});
 
    });
 
  }
 
    );
 
  });
       
}
 
);

})}) })}) })}) })})  })}) })}) })}) })}});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(2000, () => {
  console.log('Bot started');
});
client.login(config.token)