export interface SendMailData {
  subject: string
  body: string
}

export interface MailAdaptor {
  sendMail: (data: SendMailData) => Promise<void>
}
