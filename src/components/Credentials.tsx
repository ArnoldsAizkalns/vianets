import React, { useState } from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Credentials = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const address = 'Imantas 8. līnija 11, Rīga'

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="mx-auto max-w-md">
      <div className="flex justify-between">
        <h3 className="font-medium">Телефон</h3>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/+37129716973">
            <FaWhatsapp className="text-xl duration-100 hover:scale-125" />
          </a>
          <a href="https://web.telegram.org/k/#@tinyhouseeu">
            <FaTelegram className="text-xl duration-100 hover:scale-125" />
          </a>
          <a href="tel:+37129716973">
            <p className="duration-100 hover:scale-110">+371 29716973</p>
          </a>
        </div>
      </div>
      <div className="border-t mx-auto border-[#45464c] w-full "></div>
      <div className="flex text-right mt-3 justify-between">
        <h3 className="font-medium">Имейл</h3>
        <div>
          <a href="mailto:info@leh.lv">
            <h3 className="duration-100 hover:scale-110">info@leh.lv</h3>
          </a>
        </div>
      </div>
      <div className="flex text-right justify-end mt-3">
        <a href="mailto:info@lehin.eu">
          <h3 className="duration-100 hover:scale-110">info@lehin.eu</h3>
        </a>
      </div>
      <div className="border-t mx-auto border-[#45464c] w-full "></div>
      <div className="flex  mt-3 justify-between">
        <h3 className="font-medium">Адресс</h3>
        <h3
          className="duration-100 hover:scale-110"
          style={{ cursor: 'pointer' }}
          onClick={() => setModalOpen(true)}
        >
          {address}
        </h3>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-52  mx-auto p-5 border w-96 shadow-lg rounded-xs bg-white">
            <div className="mt-3 text-center">
              <span className="block text-xl font-medium text-gray-900">
                Open address in:
              </span>
              <div className="mt-2 px-7 py-3">
                <button
                  className="bg-neutral-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-sm"
                  onClick={() =>
                    openInNewTab(`https://maps.google.com/?q=${address}`)
                  }
                >
                  Google Maps
                </button>
                <button
                  className="bg-neutral-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-sm ml-4"
                  onClick={() =>
                    openInNewTab(`https://waze.com/ul?q=${address}`)
                  }
                >
                  Waze
                </button>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  className="px-4 py-2 bg-[#45464c] text-white text-base font-medium  w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="border-t mx-auto border-[#45464c] w-full "></div>
    </div>
  )
}

export default Credentials
