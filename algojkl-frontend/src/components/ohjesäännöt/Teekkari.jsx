import React from 'react'
import lakki from '../../images/lakki.jpg'

export const Teekkari = () => {
  return (
    <div>
      <img
        src={lakki}
        alt="Jyväskylän 8-kulmainen teekkarilakki"
        className="lakki"
      />
      <h1>Teekkarilakki</h1>
      <p>
        Jyväskylän teekkarilakki on kahdeksankulmainen, Jyväskylän kävelykadun
        Kompassin muodon mukaan. Lakin sisäpuoli on Jyväskylän yliopiston värien
        mukainen sini-oranssi. Lakin kokardissa yhdistyy Jyväskylä sekä
        tekniikka, kun kokardista löytyy JYY:n soihtu, jota ympäröi tekniikan
        ratas.
        <br />
        <br />
        Ensimmäisen vuoden diplomi-insinööriopiskelijoista eli fukseista tulee
        teekkareita vappuna, jolloin kasteen jälkeen lakin saa painaa päähänsä.
        Lakin kantoaika alkaa siis vapun kasteesta ja päättyy syyskuun
        viimeisenä päivänä pidettäviin lakinlaskijaisiin.
        <br />
        <br />
        <a href="https://jytyjkl.fi/">Jyväskylän teekkariyhdistys</a> hallinnoi Jyväskylässä teekkarilakkia koskevia lakinkäyttösääntöjä. Jyväskylän teekkariyhdistyksen kautta voidaan hakea <a href="https://jytyjkl.fi/lakkiohjesaanto">lakinkäyttölupaa</a> lakinkantoajan ulkopuolella.
      </p>
    </div>
  )
}

export default Teekkari
