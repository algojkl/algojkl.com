import { useContentfulData } from '../../services/useContentfulData'

/**
 * useHallitusHaku
 * 
 * Hook hakee hallitushaku-dataa ja jakaa hakemukset kategorioihin:
 *  - puheenjohtajisto
 *  - muut hallituspestit
 */
export const useHallitusHaku = () => {
  const { data, isLoading, error } = useContentfulData()

  const hallitushaku = data?.hallitushaku || []

  const puheenjohtajisto = hallitushaku.filter(
    (haku) =>
      haku.pesti?.toLowerCase().includes('puheenjohtaja') ||
      haku.pesti?.toLowerCase().includes('varapuheenjohtaja')
  )

  const muutPestit = hallitushaku.filter(
    (haku) =>
      !(
        haku.pesti?.toLowerCase().includes('puheenjohtaja') ||
        haku.pesti?.toLowerCase().includes('varapuheenjohtaja')
      )
  )

  return { isLoading, error, puheenjohtajisto, muutPestit }
}
