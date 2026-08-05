import React from 'react'
import { useTranslation } from 'react-i18next'
import FooterNavSection from './FooterNavSection1'
/**
 * FooterNav
 *
 * Tämä komponentti vastaa footerin navigaatiosta.
 * Se renderöi useita FooterNavSection-komponentteja,
 * jotka sisältävät otsikon ja linkit eri osioille.
 *
 * Footerin osiot:
 * 1. NAVIGAATIO – pääsivujen linkit
 * 2. TOIMIHENKILÖT – hallitus ja aktiiviset jäsenet
 * 3. VIRALLISET DOKUMENTIT – säännöt ja ohjesäännöt
 * 4. JÄSENILLE – jäsenetuun ja kerhotoimintaan liittyvät linkit
 *
 * Mikäli halutaan lisätä linkkejä, niin lisää vain uusia to ja label osioita samaan tyyliin oikean titlen alle.
 *
 */
const FooterNav = () => {
  const { t } = useTranslation('common')

  return (
    <nav className="footer-nav">
      <ul>
        <FooterNavSection
          title={t('nav.menu')}
          links={[
            { to: '/', label: t('nav.links.home') },
            { to: '/tapahtumat', label: t('nav.events') },
            { to: '/yhteistyot', label: t('nav.collaboration') },
            { to: '/fuksit', label: t('nav.fuksit') },
            { to: '/hakijalle', label: t('nav.applicants') },
          ]}
        />
      </ul>
      <ul>
        <FooterNavSection
          title={t('nav.sections.staff')}
          links={[
            { to: '/hallitus', label: t('nav.links.board') },
            { to: '/aktiivit', label: t('nav.links.active') },
          ]}
        />
      </ul>
      <ul>
        <FooterNavSection
          title={t('nav.sections.officialDocuments')}
          links={[
            { to: '/saannot', label: t('nav.links.rules') },
            { to: '/ohjesaannot', label: t('nav.links.guidelines') },
            { to: '/seloste', label: t('nav.links.privacy') },
            { to: '/dokumentit', label: t('nav.links.documents') },
            { to: '/kunniagalleria', label: t('nav.links.honours') },
            { to: '/periaatteet', label: t('nav.links.principles') },
          ]}
        />
      </ul>
      <ul>
        <FooterNavSection
          title={t('nav.sections.members')}
          links={[
            { to: '/jasenedut', label: t('nav.links.benefits') },
            { to: '/kerhotoiminta', label: t('nav.links.clubs') },
            { to: '/rekryt', label: t('nav.links.recruitment') },
            { to: '/lomakkeet', label: t('nav.links.formsShort') },
            { to: '/kansainvalisyys', label: t('nav.links.international') },
            {
              to: 'https://kattila.linkkijkl.fi/',
              label: t('nav.links.kattila'),
            },
            { to: '/salaisuudet', label: t('nav.links.secrets') },
            { to: 'https://ritmi.algojkl.com/', label: t('nav.links.songbook') },
          ]}
        />
      </ul>
    </nav>
  )
}

export default FooterNav
