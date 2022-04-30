const TrackTitle = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <h4 className="mt-2 text-xs font-bold uppercase text-gray-700 dark:text-white lg:text-sm">
      {children}
    </h4>
  )
}

const TrackDescription = ({
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400 lg:text-base">
      {children}
    </p>
  )
}

const TrackPresenter = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <p className="mb-2 text-sm font-normal italic dark:text-white">
      {children}
    </p>
  )
}

const Participant = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return <li className="">{children}</li>
}

const Tracks = () => {
  return (
    <div
      id="fag"
      className="mb-2 grid grid-cols-1 gap-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:grid-cols-2 md:grid-cols-3 lg:text-base"
    >
      <div>
        <TrackTitle>Presentasjonsteknikk | Blåskavlen 2</TrackTitle>
        <TrackPresenter>Hanne Riege</TrackPresenter>
        <TrackDescription>
          Dere må ha forbederedt en kort presentasjon, den trenger ikke være
          helt ferdig.
        </TrackDescription>
        <ol>
          <Participant>Clementine</Participant>
          <Participant>Julian</Participant>
          <Participant>Robert</Participant>
          <Participant>Ken Thomas</Participant>
          <Participant>Kate</Participant>
          <Participant>Martin</Participant>
          <Participant>Jan Frode</Participant>
          <Participant>Thomas Fauskanger</Participant>
          <Participant>Shangavi</Participant>
          <Participant>Anders</Participant>
          <Participant>Ann Kristin</Participant>
          <Participant>Lene</Participant>
        </ol>
      </div>
      <div>
        <TrackTitle>Et teknisk dypdykk i hjernen | Blåskavlen 1</TrackTitle>
        <TrackPresenter>Marius Gerdes</TrackPresenter>
        <TrackDescription>
          Ta med en laptop med Python 3 og Anaconda installert.
        </TrackDescription>
        <ol>
          <Participant>Malin</Participant>
          <Participant>Dag Erik</Participant>
          <Participant>Arvid</Participant>
          <Participant>Petter</Participant>
          <Participant>Øyvind Almli</Participant>
          <Participant>Lars Eirik</Participant>
          <Participant>Krister</Participant>
          <Participant>Richard</Participant>
          <Participant>Stian Skauge</Participant>
          <Participant>Teis</Participant>
          <Participant>Jan-Helge</Participant>
          <Participant>Thomas Hatlebrekke</Participant>
          <Participant>Yngve Aas</Participant>
          <Participant>Håvard</Participant>
          <Participant>Øyvind Johannessen</Participant>
        </ol>
      </div>
      <div>
        <TrackTitle>Digitalisering i offentlig sektor | Rimstigen</TrackTitle>
        <TrackPresenter>Frank Fardal og Malin Rygg</TrackPresenter>
        <TrackDescription>
          Ta med dere selv så har dere alt dere trenger ✨
        </TrackDescription>
        <ol>
          <Participant>Karoline Raudstein</Participant>
          <Participant>Paal</Participant>
          <Participant>Birte</Participant>
          <Participant>Frode</Participant>
          <Participant>Olav</Participant>
          <Participant>Vermund</Participant>
          <Participant>Stian Fauskanger</Participant>
          <Participant>Alexander</Participant>
          <Participant>Wenche</Participant>
          <Participant>Joseph</Participant>
          <Participant>Knut</Participant>
          <Participant>Frank</Participant>
          <Participant>Vegard</Participant>
        </ol>
      </div>
    </div>
  )
}

export default Tracks
