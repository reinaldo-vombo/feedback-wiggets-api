import { prisma } from '../../prisma'
import { FeedbackCreateData, FeedbacksRepository } from '../feedacks-repo'

export class PrismaFeedacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
