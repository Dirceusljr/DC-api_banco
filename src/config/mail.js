import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "57e2da876c2bf2",
        pass: "b6c2b714b16988"
    },
},
{
    from: "Banco API <banco@api.com>",
}
);

async function enviarEmail(forma_pagamento, conta_id, valor, saldoAtualizado) {
    const info = await transporter.sendMail({
        to: "email@cliente.com", // list of receivers
        subject: "Transação Realizada com Sucesso", 
        html: `
        <h1>Comprovante de pagamento</h1>
        <p>Caro cliente <strong>${conta_id}</strong>, </p>
        <p>Sua transação foi realizada com sucesso!</p>
        <p>Detalhes da transação:</p>
        <ul>
            <li>Forma de pagamento: ${forma_pagamento}</li>
            <li>Conta ID: ${conta_id}</li>
            <li>Valor: ${valor}</li>
            <li>Saldo atualizado: ${saldoAtualizado}</li>
        </ul>
        `, // html body
    })
}

export { enviarEmail}