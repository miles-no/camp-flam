import Accordion from './Accordion'

const ActivityTitle = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <h4 className="text-md mb-2 mt-2 font-bold uppercase text-gray-700 dark:text-white lg:text-sm">
      {children}
    </h4>
  )
}

const ActivityDescription = ({
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-300 lg:text-base">
      {children}
    </p>
  )
}

const Participant = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return <li className="">{children}</li>
}

const SocialActivities = () => {
  return (
    <div
      id="sosiale-aktiviteter"
      className="mb-2 grid grid-cols-1 gap-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:grid-cols-2 md:grid-cols-2 lg:text-base"
    >
      <div>
        <ActivityTitle>
          RIB og ostesmaking | OBS! Oppmøte <strong>15:50</strong>
        </ActivityTitle>
        <ActivityDescription>
          Dere får utdelt overlevelsesdrakt, men husk å kle dere etter vær og
          vind.
        </ActivityDescription>
        <ol>
          <Participant>Wenche</Participant>
          <Participant>Krister</Participant>
          <Participant>Teis</Participant>
          <Participant>Malin</Participant>
          <Participant>Robert</Participant>
          <Participant>Frode</Participant>
          <Participant>Thomas Hatlebrekke</Participant>
          <Participant>Lene</Participant>
          <Participant>Richard</Participant>
          <Participant>Shangavi</Participant>
          <Participant>Anders</Participant>
          <Participant>Vegard</Participant>
          <Participant>Thomas Fauskanger</Participant>
          <Participant>Ann Kristin</Participant>
          <Participant>Vermund</Participant>
          <Participant>Olav</Participant>
          <Participant>Knut</Participant>
          <Participant>Clementine</Participant>
          <Participant>Lars Eirik</Participant>
          <Participant>Jan-Helge</Participant>
        </ol>
      </div>
      <div>
        <ActivityTitle>Badstu</ActivityTitle>
        <ActivityDescription>
          Husk badetøy!
          <br />
          Det er ikke garderobe ved badstuen, så ha på deg noe over badetøyet
          når vi går.
        </ActivityDescription>
        <ol>
          <Participant>Alexander</Participant>
          <Participant>Julian</Participant>
          <Participant>Martin</Participant>
          <Participant>Dag Erik</Participant>
          <Participant>Petter</Participant>
          <Participant>Paal</Participant>
          <Participant>Stian Fauskanger</Participant>
          <Participant>Kate</Participant>
        </ol>
      </div>
      <div>
        <ActivityTitle>Kajakk</ActivityTitle>
        <ActivityDescription>Kle dere etter vær og vind.</ActivityDescription>
        <ol>
          <Participant>Ken-Thomas</Participant>
          <Participant>Arvid</Participant>
          <Participant>Stian Skauge</Participant>
          <Participant>Håvard</Participant>
          <Participant>Yngve Aas</Participant>
          <Participant>Karoline</Participant>
          <Participant>Birte</Participant>
          <Participant>Øyvind Almli</Participant>
          <Participant>Øyvind Johannessen</Participant>
          <Participant>Marius - Miles Venn</Participant>
          <Participant>Hannah - Miles Venn</Participant>
          <Participant>Frank</Participant>
        </ol>
      </div>
      <div>
        <ActivityTitle>Egentid</ActivityTitle>
        <ol>
          <Participant>Jan Frode</Participant>
          <Participant>Joseph</Participant>
        </ol>
      </div>
    </div>
  )
}

export default SocialActivities
