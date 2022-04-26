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
  return null
  /*
    Do we need this?
    return (
        <p className="text-sm font-normal dark:text-white">{children}</p>
    )
     */
}

const Participant = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return <li className="">{children}</li>
}

const SocialActivities = () => {
  return (
    <div
      id="sosiale-aktiviteter"
      className="mb-2 grid grid-cols-1 gap-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:grid-cols-2 md:grid-cols-4 lg:text-base"
    >
      <div>
        <ActivityTitle>RIB og ostesmaking</ActivityTitle>
        <ActivityDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus
          enim. In auctor dolor vel purus mollis, nec porttitor velit varius. Ut
          ultrices dapibus massa, sit amet varius sapien pretium a. Phasellus
          tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
          neque est, maximus eu diam non, lacinia mollis libero. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Maecenas vulputate lacus eget velit molestie, imperdiet porttitor
          massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo
          dapibus eget. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Curabitur et lacinia erat. Fusce ultrices risus magna, eget
          euismod nisl sollicitudin id.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus
          enim. In auctor dolor vel purus mollis, nec porttitor velit varius. Ut
          ultrices dapibus massa, sit amet varius sapien pretium a. Phasellus
          tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
          neque est, maximus eu diam non, lacinia mollis libero. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Maecenas vulputate lacus eget velit molestie, imperdiet porttitor
          massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo
          dapibus eget. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Curabitur et lacinia erat. Fusce ultrices risus magna, eget
          euismod nisl sollicitudin id.
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
        <ActivityDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus
          enim. In auctor dolor vel purus mollis, nec porttitor velit varius. Ut
          ultrices dapibus massa, sit amet varius sapien pretium a. Phasellus
          tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
          neque est, maximus eu diam non, lacinia mollis libero. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Maecenas vulputate lacus eget velit molestie, imperdiet porttitor
          massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo
          dapibus eget. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Curabitur et lacinia erat. Fusce ultrices risus magna, eget
          euismod nisl sollicitudin id.
        </ActivityDescription>
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
        <ActivityDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus
          enim. In auctor dolor vel purus mollis, nec porttitor velit varius. Ut
          ultrices dapibus massa, sit amet varius sapien pretium a. Phasellus
          tellus mi, porttitor vitae dignissim sed, tempor sed elit. Suspendisse
          neque est, maximus eu diam non, lacinia mollis libero. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Maecenas vulputate lacus eget velit molestie, imperdiet porttitor
          massa imperdiet. Donec facilisis dui neque, fermentum iaculis leo
          dapibus eget. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Curabitur et lacinia erat. Fusce ultrices risus magna, eget
          euismod nisl sollicitudin id.
        </ActivityDescription>
        <ol>
          <Participant>Jan Frode</Participant>
          <Participant>Joseph</Participant>
        </ol>
      </div>
    </div>
  )
}

export default SocialActivities
