export default function LocaleSwitcher() {
  const changeLocale = (locale: string) => {
    // Определяем текущий языковой префикс и путь
    const currentLocaleMatch =
      window.location.pathname.match(/^\/(en|lv|ru)(\/|$)/)

    // Удаляем текущий языковой префикс, если он есть
    const newPath = currentLocaleMatch
      ? window.location.pathname.replace(currentLocaleMatch[0], '/')
      : window.location.pathname

    // Обновляем URL, сохраняя текущий путь и добавляя новый языковый префикс
    window.location.href = `/${locale}${newPath}`
  }

  return (
    <div className="flex justify-end gap-3 md:gap-6 text-[20px] md:text-sm">
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
