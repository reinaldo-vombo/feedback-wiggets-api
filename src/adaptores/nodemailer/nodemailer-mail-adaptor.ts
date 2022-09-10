import nodemailer from 'nodemailer'
import { MailAdaptor, SendMailData } from '../mail-adptore'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '6b65597bbd497e',
    pass: '07efb9463b8d3f'
  }
})

export class NodemailerMailAdapter implements MailAdaptor {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Reinaldo Vombo <reinaldo.vombo@gmail.com>',
      subject: subject,
      html: body
    })
  }
}
