import { InquiryModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const getPending: {
  output: OutputAdapter<any[], InquiryModel.Data[]>
} = {
  output: response => {
    const convertedResource: InquiryModel.Data[] = response.map(item => ({
      id: item.id,
      name: item.name,
      lastName: item.lastName,
      phone: item.lastName,
      email: item.email,
      desc: item.description,
    }))

    return convertedResource
  },
}

export const answer: {
  output: OutputAdapter<any[], InquiryModel.ResponseData[]>
} = {
  output: response => {
    const convertedResource: InquiryModel.ResponseData[] = response.map(
      item => ({
        id: item.id,
        response: item.response,
      })
    )

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<InquiryModel.CreateData, InquiryModel.CreateBody>
} = {
  input: data => {
    const convertedResource: InquiryModel.CreateBody = {
      name: data.name,
      lastname: data.lastName,
      email: data.email,
      description: data.desc,
    }
    return convertedResource
  },
}
