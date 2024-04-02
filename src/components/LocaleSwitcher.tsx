export default function LocaleSwitcher() {
  const changeLocale = (locale: any) => {
    window.location.href = `/${locale}`
  }

  return (
    <div className="flex gap-3 md:gap-6 text-lg md:text-sm">
      <button
        className="text-neutral-500 font-medium leading-3 hover:text-[#211c1d]"
        onClick={() => changeLocale('en')}
      >
        EN
      </button>
      <button
        className="text-neutral-500 font-medium leading-3 hover:text-[#211c1d]"
        onClick={() => changeLocale('lv')}
      >
        LV
      </button>
      <button
        className="text-neutral-500 font-medium leading-3 hover:text-[#211c1d]"
        onClick={() => changeLocale('ru')}
      >
        RU
      </button>
    </div>
  )
}
