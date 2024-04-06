import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../utils/send-emails'
import { useTranslations } from 'next-intl'
import { toast } from 'react-hot-toast'

type Props = {
  locale: string
}

export type FormData = {
  name: string
  email: string
  phone: string
  message: string
  countryCode: string
  specialOffer?: boolean
}

const EuropeanCountryCodes = [
  { name: 'Latvia', code: '+371', countryCode: 'LV' },
  { name: 'Lithuania', code: '+370', countryCode: 'LT' },
  { name: 'Estonia', code: '+372', countryCode: 'EE' },
  { name: 'Norway', code: '+47', countryCode: 'NO' },
  { name: 'Sweden', code: '+46', countryCode: 'SE' },
  { name: 'Denmark', code: '+45', countryCode: 'DK' },
  { name: 'Finland', code: '+358', countryCode: 'FI' },
  { name: 'Iceland', code: '+354', countryCode: 'IS' },
  { name: 'Russia', code: '+7', countryCode: 'RU' },
  { name: 'Belarus', code: '+375', countryCode: 'BY' },
  { name: 'Ukraine', code: '+380', countryCode: 'UA' },
  { name: 'Poland', code: '+48', countryCode: 'PL' },
  { name: 'Germany', code: '+49', countryCode: 'DE' },
  { name: 'France', code: '+33', countryCode: 'FR' },
  { name: 'Italy', code: '+39', countryCode: 'IT' },
  { name: 'Spain', code: '+34', countryCode: 'ES' },
  { name: 'China', code: '+86', countryCode: 'CN' },
  { name: 'India', code: '+91', countryCode: 'IN' },
  { name: 'United States', code: '+1', countryCode: 'US' },
  { name: 'Indonesia', code: '+62', countryCode: 'ID' },
  { name: 'Brazil', code: '+55', countryCode: 'BR' },
]

const ContactForm = ({ specialOffer }: { specialOffer: boolean }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    EuropeanCountryCodes[0]
  )
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [countryCodeSelected, setCountryCodeSelected] = useState(false)
  const { register, handleSubmit } = useForm<FormData>()
  const t = useTranslations('ContactForm')

  function onSubmit(data: FormData) {
    console.log('Form submission with special offer:', specialOffer)
    console.log(
      'Sending email with data:',
      JSON.stringify({ ...data, specialOffer })
    )
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.message ||
      !data.countryCode
    ) {
      toast.error('Please fill in all fields')
      return
    }
    console.log(
      'Sending email with data:',
      JSON.stringify({ ...data, specialOffer })
    )
    sendEmail({ ...data, specialOffer: specialOffer })
      .then((response) => {
        toast.success(t('message_sent'))
      })
      .catch((error) => {
        toast.error(t('error_sending_message'))
      })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(e.target.value)
    const selectedCountry = EuropeanCountryCodes[selectedIndex]
    setSelectedCountry(selectedCountry)
    setCountryCodeSelected(true)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block font-medium text-[#45464c]"
          ></label>
          <input
            type="text"
            placeholder={t('name_placeholder')}
            className="w-full border-b border-[#45464c] font-medium text-[#45464c] outline-none"
            {...register('name', { required: true })}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="block font-medium text-[#45464c]"
          ></label>
          <input
            type="email"
            placeholder={t('email_placeholder')}
            className="w-full border-b border-[#45464c] font-medium text-[#45464c] outline-none"
            {...register('email', { required: true })}
          />
        </div>

        <div className="flex mb-3 w-full">
          <label
            htmlFor="phone"
            className="block font-medium text-[#45464c]"
          ></label>
          <div className="items-center w-full flex">
            <select
              {...register('countryCode', { required: true })}
              onChange={handleSelectChange}
              className="mr-2 border-b border-[#45464c] font-medium text-[#45464c] outline-none"
            >
              {EuropeanCountryCodes.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.countryCode} {country.code}
                </option>
              ))}
            </select>
            <input
              type="phone"
              placeholder="Enter phone number"
              className="flex-1 border-b border-[#45464c] font-medium text-[#45464c] outline-none"
              {...register('phone', { required: true })}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block font-medium text-[#45464c]"
          ></label>
          <textarea
            rows={3}
            placeholder={t('message_placeholder')}
            className="border-b border-[#45464c] w-full font-medium text-[#45464c] resize-none outline-none"
            {...register('message', { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col gap-4">
          <button className="hover:bg-neutral-200 p-1 hover:text-[#45464c] bg-[#45464c] px-8 font-semibold text-white outline-none">
            {t('submit_button')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
