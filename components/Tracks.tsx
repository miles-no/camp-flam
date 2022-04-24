const TrackTitle = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <h3 className="text-md font-bold dark:text-white lg:text-lg">{children}</h3>
  )
}

const TrackDescription = ({
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  return null
  /*
    Do we need this?
    return (
        <p className="text-sm font-normal dark:text-white">{children}</p>
    )
     */
}

const TrackPresenter = ({
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
    return (
        <p className="text-sm font-normal dark:text-white italic">{children}</p>
    )
}

const Participant = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return <li className="">{children}</li>
}

const Tracks = () => {
  return (
    <div id="fag" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 text-sm font-normal text-gray-500 dark:text-gray-400 lg:text-base">
      <div>
        <TrackTitle>Presentasjonsteknikk</TrackTitle>
        <TrackPresenter>Hanne Riege</TrackPresenter>
        <TrackDescription>
          Har du et ønske om å bli mer bevisst på hvordan blant annet kroppsspråk og stemmebruk kan gjøre deg til en stjerne på scenen? Da er dette fagsporet for deg!
          Fasilitator Hanne Riege har over 40 års erfaring fra Teaterhøgskolen, og vil gjerne lære deg sine beste triks.
          Hanne har vært med på flere camper tidligere og fått gode tilbakemeldinger, her er det bare å hive seg med!
        </TrackDescription>
        <ol>
          <Participant>Santa</Participant>
        </ol>
      </div>
      <div>
        <TrackTitle>Et teknisk dypdykk i hjernen</TrackTitle>
        <TrackPresenter>Marius Gerdes</TrackPresenter>
        <TrackDescription>
          Ved hjelp av elektroder på hodeskallen (vi sparer borringen til neste camp) skal vi lese ut hjerneaktivitet, analysere den, og kode spennende programmer basert på disse dataene.

          Marius Gerdes har bakgrunn som mekanisk ingeniør fra KIT, og er en av grunderene bak Metis Neurotec som har til formål å ta i bruk nyeste teknologi i kampen mot nevrologiske sykdommer, for å løse mange av problemene alderdom kan medføre.

          Dette fagsporet passer best for teknologer/utviklere. Det vil bli noe utvikling mot utstyret som Marius har med, så PC er nødvendig utstyr.
        </TrackDescription>
        <ol>
          <Participant>Santa</Participant>
        </ol>
      </div>
      <div>
        <TrackTitle>Digitalisering i offentlig sektor</TrackTitle>
        <TrackPresenter>Frank Fardal</TrackPresenter>
        <TrackDescription>
          "Min ambisjon er at Noreg skal være leiande i verda innan digitalisering av offentlege tenester. Målet er at digitalisering skal bidra til betre og meir tilgjengelege offentlege tenester, forenklingar og auka verdiskaping for næringslivet og ein enklare kvardag for folk flest. For å oppnå dette, har regjeringa bestemt at våre spydspissar i digitaliseringsarbeidet – Difi og Altinn – skal samlast i eit nytt digitaliseringsdirektorat."
          - Digitaliseringsminister Nikolai Astrup - https://www.digdir.no/digdir/kva-er-digitaliseringsdirektoratet/703

          Dette er et tverrfaglig tema og passer for alle, fra designere (universell utforming), arkitekter, prosjektledere, salg, til programmere. Frank Fardal som kommer besøk til oss er fagdirektør hos DigDir og har vært instrumentell i utviklingen av ID-porten og de andre tillits-tjenestene.
        </TrackDescription>
        <ol>
          <Participant>Santa</Participant>
        </ol>
      </div>
    </div>
  )
}

export default Tracks
