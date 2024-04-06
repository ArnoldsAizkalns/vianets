import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, name, message, phone, countryCode, specialOffer } =
    await request.json()
  const subject = specialOffer
    ? 'СПЕЦПРЕДЛОЖЕНИЕ'
    : `Message from ${name} (${email})`
  console.log(`Отправка письма с темой: ${subject}`)
  console.log('Received specialOffer:', specialOffer)

  const transport = nodemailer.createTransport({
    service: 'gmail',

    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,

    subject: subject,
    html: `
    <div style="width: 450px; margin: 0 auto;">
    <div style="text-align: center; font-size: 24px;">Lovely Eco House</div>
    <div style="font-family: Arial, sans-serif; color: #333; border: 2px solid #45464c; padding: 10px;">
      <h2 style="color: #45464c;">Вам написали!!</h2>
      <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
      <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
      <p style="margin-bottom: 10px;"><strong>Email:</strong> ${countryCode} ${phone}</p>
      <p><strong>Message:</strong></p>
      <p style="margin-top: 0;">${message}</p>
    </div>
  </div>

  `,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise() // Send email
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
