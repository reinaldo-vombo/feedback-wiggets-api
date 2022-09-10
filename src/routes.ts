import express from 'express'
import { NodemailerMailAdapter } from './adaptores/nodemailer/nodemailer-mail-adaptor'
import { PrismaFeedacksRepository } from './repositories/prisma/prisma-feedbacks-repositoiers'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedacksRepository = new PrismaFeedacksRepository()
  const NodemailerMailAdapters = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedacksRepository,
    NodemailerMailAdapters
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})
