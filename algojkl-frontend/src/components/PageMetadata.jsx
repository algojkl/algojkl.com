import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pageRoutes } from '../pageRoutes'

const setMetaContent = (attribute, key, value) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

const PageMetadata = () => {
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation('common')
  const route =
    pageRoutes.find(({ path }) => path === pathname) ||
    pageRoutes.find(({ path }) => path === '*')
  const seoKey = route?.seoKey || 'notFound'
  const title = t(`seo.pages.${seoKey}.title`, {
    defaultValue: t('seo.defaultTitle'),
  })
  const description = t(`seo.pages.${seoKey}.description`, {
    defaultValue: t('seo.defaultDescription'),
  })
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'fi'

  useEffect(() => {
    const canonicalUrl = new URL(pathname, window.location.origin).href
    const imageUrl = new URL('/favicon.jpeg', window.location.origin).href
    let canonical = document.head.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    document.title = title
    document.documentElement.lang = language
    canonical.href = canonicalUrl
    setMetaContent('name', 'description', description)
    setMetaContent('name', 'robots', route?.noIndex ? 'noindex, nofollow' : 'index, follow')
    setMetaContent('property', 'og:type', 'website')
    setMetaContent('property', 'og:site_name', 'Algo ry')
    setMetaContent('property', 'og:title', title)
    setMetaContent('property', 'og:description', description)
    setMetaContent('property', 'og:url', canonicalUrl)
    setMetaContent('property', 'og:image', imageUrl)
    setMetaContent('name', 'twitter:card', 'summary')
    setMetaContent('name', 'twitter:title', title)
    setMetaContent('name', 'twitter:description', description)
  }, [description, language, pathname, route?.noIndex, title])

  return null
}

export default PageMetadata