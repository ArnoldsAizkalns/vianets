import { FormData } from '../components/ContactForm'

interface EmailResponse {
  message: string
}
export function sendEmail(data: FormData): Promise<EmailResponse> {
  const apiEndpoint = '/api/email'

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json() as Promise<EmailResponse>
  })
}
