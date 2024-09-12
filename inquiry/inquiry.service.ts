import { InquiryModel } from '@/models'
import { InquiryAdapter } from '@/adapters'
import { AppError, privateInstance, publicInstance } from '@/helpers'

const collection = '/inquiry'

export const getPending = async () => {
  const response = await privateInstance.get(`${collection}`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = InquiryAdapter.getPending.output(response.data)
  return adaptedResponse
}

export const create = async (data: InquiryModel.CreateData) => {
  const adaptedInput = InquiryAdapter.create.input(data)

  const response = await publicInstance.post(collection, adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}

export const Answer = async (params: { id: number }) => {
  const { id } = params

  const response = await privateInstance.get(`${collection}/${id}`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = InquiryAdapter.answer.output(response.data)
  return adaptedResponse
}
