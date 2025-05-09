// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|lud|nega|Nega|Lud|Gostaria)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(1000); //delay de 1 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //Delay de 1000 milisegundos mais conhecido como 1 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + 'Seja muito bem-vinda(o) ao Studio Ludmilla Cristina! Eu sou a Lu, sua assistente virtual – mas aqui a gente conversa como amigas, tá? Me conta: você está procurando maquiagem para qual tipo de evento?:\n\n1 -👰 Casamento (sou a noiva!)\n2 -👭 Casamento (sou madrinha/convidada)\n3 -🎓 Formatura\n4 - 🎉 Festa ou evento especial\n5 - 🎓Cursos'); //Primeira mensagem de texto
        await delay(1000); //delay de 1 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //Delay de 1 segundos
        
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Ai que emoção! 😍 Toda noiva merece se sentir incrível! Me fala uma coisinha:\n\n📅 Qual a data do seu casamento?\n\n🕐 Já sabe o horário da cerimônia?\n\n👗 Vai querer teste de maquiagem antes do grande dia?\n\nSe sim:Perfeito! Vamos garantir que tudo esteja do jeitinho que você sonhou.Agora, só preciso do seu nome completo e um telefone para contato.\n\nDepois:Prontinho, já anotei tudo! Em breve, nossa equipe vai entrar em contato para agendar direitinho com você. 💖');
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Quero te mostrar um pouquinho do nosso trabalho pra você se inspirar::https://centernoivas.com.br/colecoes/vestido-de-noiva-center-noivas-erva-doce-ed013/');
    }

     if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
         const chat = await msg.getChat();
    
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Que honra! Madrinhas e convidadas também merecem brilhar! ✨Me conta rapidinho:\n\n📅 Qual o dia do casamento?\n\n⏰ Você já sabe o horário que precisa estar pronta?\n\n💄Tem alguma inspiração de make que você já viu e gostou?\nSó preciso do seu nome e telefone pra finalizar o agendamento.💖');
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
    
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
   
       await delay(2000); //delay de 2 segundos
       await chat.sendStateTyping(); // Simulando Digitação
       await delay(2000);
       await client.sendMessage(msg.from, 'Uau! Parabéns pela conquista! Vamos deixar você maravilhosa pra esse momento especial! 🎉Me ajuda com essas infos rapidinho:\n\n📅 Qual o dia da sua formatura?\n\n⏰ É colação, baile ou os dois?\n\n💄Você já tem alguma ideia do estilo de maquiagem que quer?\n\nSe ainda não sabe:\nSem problemas! Podemos te ajudar com sugestões incríveis. 😍 Agora me passa seu nome e telefone que nossa equipe entra em contato, tá bom?');
       await delay(3000); //delay de 3 segundos
       await chat.sendStateTyping(); // Simulando Digitação
       await delay(3000);
   
   }

   if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();

      await delay(2000); //delay de 2 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(2000);
      await client.sendMessage(msg.from, 'Obaaa! Qualquer festa merece uma produção linda! 💃Me diz aí:\n\n📅Que dia é a festa?\n\n⏰ Qual o tipo de evento (aniversário, balada, jantar, outro)?\n\n💋 Tem alguma ideia de maquiagem que você ama?\n\nFinalização:\nArrasou! Agora só preciso do seu nome e telefone pra garantir o agendamento. 💬');
      await delay(3000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(3000);

}

if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();

      await delay(2000); //delay de 2 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(2000);
      await client.sendMessage(msg.from, 'Obaaa! aqui estão os modulos dos curso:\n\n1-Minha Make Perfeita\n\n2-Make Up Profissional: Do Zero ao Brilho\n\n💋3-Pronta em 30 minutos!\n\n4-Automaquiagem Corporativa\n\n5-Make Expert\n\n6-Make Perfeita no Dia a Dia.💬');
      await delay(3000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(3000);
      await client.sendMessage(msg.from, 'Quero te mostrar um pouquinho do nosso trabalho pra você se inspirar:: https://centernoivas.com.br/colecoes/vestido-de-noiva-center-noivas-erva-doce-ed013/');

}

});