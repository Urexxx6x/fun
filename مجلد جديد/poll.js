module.exports = (client) => {
  const channelIds = [
    '765940310593241157',"765940310593241156" , "776597894639386656", "765940310940975114", "804239188135641098", "811455847980728342" , "765940310940975117" , "786180417594064896",
    "765940310940975117" // testing
  ]


  const addReactions = (message) => {
    

    setTimeout(() => {
      message.react('781096289706049576')
      message.react('811484584093024276')
      message.react('811484583736115222')
      
    }, 750)
  }

  client.on('message', async (message) => {
    if (channelIds.includes(message.channel.id)) {
      addReactions(message)

    }
  
  })

} 