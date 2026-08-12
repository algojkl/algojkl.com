const fiDesktopImages = import.meta.glob('../images/Page_starters/*', {
  eager: true,
  import: 'default',
})

const enDesktopImages = import.meta.glob('../images/page_starters_en/*', {
  eager: true,
  import: 'default',
})

const fiMobileImages = import.meta.glob('../images/mobiili/*', {
  eager: true,
  import: 'default',
})

const enMobileImages = import.meta.glob('../images/mobiili_en/*', {
  eager: true,
  import: 'default',
})

const findImage = (collection, folder, fileName) => {
  if (!fileName) return ''
  return collection[`${folder}/${fileName}`] || ''
}

export const getLocalizedStarterImages = (imageNames, language = 'fi') => {
  const desktopFile = imageNames?.desktop
  const mobileFile = imageNames?.mobile
  const isEnglish = (language || '').toLowerCase().startsWith('en')

  const desktop = isEnglish
    ? findImage(enDesktopImages, '../images/page_starters_en', desktopFile) ||
      findImage(fiDesktopImages, '../images/Page_starters', desktopFile)
    : findImage(fiDesktopImages, '../images/Page_starters', desktopFile) ||
      findImage(enDesktopImages, '../images/page_starters_en', desktopFile)

  const mobile = isEnglish
    ? findImage(enMobileImages, '../images/mobiili_en', mobileFile) ||
      findImage(fiMobileImages, '../images/mobiili', mobileFile)
    : findImage(fiMobileImages, '../images/mobiili', mobileFile) ||
      findImage(enMobileImages, '../images/mobiili_en', mobileFile)

  return {
    desktop,
    mobile,
  }
}
