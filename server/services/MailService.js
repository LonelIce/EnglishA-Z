import nodemailer from 'nodemailer';

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,//логин отправителя
                pass: process.env.SMTP_PASSWORD//пароль
            }
        })
    }

    async sendActivationMail(to, link) {//jnghfdkztn gbcmvj yf gjxne
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,//от кого письмо
            to,//кому письмо
            subject: 'Активация аккаунта' + process.env.API_URL,//тема
            text: '',//основной текст
            html: `
                                <div>
                                   <h1>Для активации перейдите по ссылке</h1>
                                   <a href=\"${link}\">${link}</a>
                              </div>
                              `
        })
    }
}

export default new MailService;