import type { NextPage } from 'next'
import Time from 'components/Time'
import TimelineDescription from 'components/TimelineDescription'
import TimelineHeader from 'components/TimelineHeader'
import TimelineItem from 'components/TimelineItem'
import Navbar from '../components/Navbar'
import SocialActivities from '../components/SocialActivities'
import Tracks from '../components/Tracks'
import KeynoteDescription from '../components/KeynoteDescription'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  dark:bg-gray-800 ">
      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <Navbar />
        <span className=" text-gray-500 dark:text-gray-400">
          Sist oppdatert {process.env.BUILD_TIME}
        </span>
        <h1 className="my-4 text-2xl font-bold md:my-8 lg:my-12 lg:text-4xl">
          <span className="dark:text-white">Program</span>
        </h1>
        <div className="dark:text-white" id="friday">
          <h2 className="mb-4 text-lg">Frivillig Fredag</h2>
          <ol className="relative ml-2 border-l border-gray-200 dark:border-gray-700 sm:ml-0">
            <TimelineItem>
              <Time>17:00</Time>
              <TimelineHeader>Avreise Miles</TimelineHeader>
              <TimelineDescription>
                Bussen går presis! Det blir litt å drikke og snacks ombord i
                bussen.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>~19:45</Time>
              <TimelineHeader>Ankomst Flåm</TimelineHeader>
              <TimelineDescription>
                Vi legger til rette for en mest mulig smidig innsjekk ved
                ankomst.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>20:30</Time>
              <TimelineHeader>Middag</TimelineHeader>
              <TimelineDescription>I hotellrestauranten</TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
        <div className=" dark:text-white" id="saturday">
          <h2 className="mb-4 mt-10 text-lg">Lørdag</h2>
          <ol className="relative ml-2 border-l border-gray-200 dark:border-gray-700 sm:ml-0">
            <TimelineItem>
              <Time>06:30</Time>
              <TimelineHeader>Avreise Miles</TimelineHeader>
              <TimelineDescription>
                For de som reiser om lørdagen
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>08:00</Time>
              <TimelineHeader>Frokost</TimelineHeader>
              <TimelineDescription>
                Lurt å stå tidlig opp siden det er hotellfrokost!
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>09:15</Time>
              <TimelineHeader>Ankomst Flåm</TimelineHeader>
              <TimelineDescription>
                Endelig er lørdagsgjengen fremme!
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>09:30</Time>
              <TimelineHeader>Velkommen | Blåskavlen</TimelineHeader>
              {/*  <TimelineDescription>I den store salen</TimelineDescription> */}
            </TimelineItem>
            <TimelineItem>
              <Time>09:45</Time>
              <TimelineHeader>Fagspor</TimelineHeader>
              <Tracks />
            </TimelineItem>
            <TimelineItem>
              <Time>12:30</Time>
              <TimelineHeader>Lunsj</TimelineHeader>
              <TimelineDescription>I hotellrestauranten</TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>13:30</Time>
              <TimelineHeader>Fagspor fortsetter</TimelineHeader>
              <TimelineDescription>
                Gå tilbake dit du var før lunsj
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>15:30</Time>
              <TimelineHeader>Fagspor slutt</TimelineHeader>
            </TimelineItem>
            <TimelineItem>
              <Time>16:00</Time>
              <TimelineHeader>Sosiale Aktiviter</TimelineHeader>
              <SocialActivities />
            </TimelineItem>
            <TimelineItem>
              <Time>19:30</Time>
              <TimelineHeader>Aperitif | Ægir Bryggeripub</TimelineHeader>
              <TimelineDescription>
                Cirka 50 meter og gå fra hotellet. Her blir det to smaksglass
                med øl, eller alkoholfritt alternativ.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>20:00</Time>
              <TimelineHeader>
                Ægir Vikinggilde| Peisestuen til Ægir
              </TimelineHeader>
              <TimelineDescription>
                Peisestuen finner du midt mellom puben og hotellet. Dette er et
                vikinginspirert måltid, der vi i ekte vikingstil får all mat
                servert på bordet i skåler og på fat.
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
        <div className="dark:text-white" id="sunday">
          <h2 className="mb-4 mt-10 text-lg">Søndag</h2>
          <ol className="relative ml-2 border-l border-gray-200 dark:border-gray-700 sm:ml-0">
            <TimelineItem>
              <Time>09:30</Time>
              <TimelineHeader>God morgen | Blåskavlen</TimelineHeader>
              <span className="text-sm font-normal italic dark:text-white">
                Kate
              </span>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>09:45</Time>
              <TimelineHeader>Lyntaler | Blåskavlen</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>11:00</Time>
              <TimelineHeader>Pause</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>

            <TimelineItem>
              <Time>11:30</Time>
              <TimelineHeader>
                Keynote Neuro/technology - From foundations to the future |
                Blåskavlen
              </TimelineHeader>
              <span className="text-sm font-normal italic dark:text-white">
                Hannah og Marius Gerdes
              </span>
              <KeynoteDescription />
            </TimelineItem>

            <TimelineItem>
              <Time>12:30</Time>
              <TimelineHeader>Lunsj</TimelineHeader>
            </TimelineItem>
            <TimelineItem>
              <Time>13:30</Time>
              <TimelineHeader>Avslutning | Blåskavlen</TimelineHeader>
            </TimelineItem>
            <TimelineItem>
              <Time>13:45</Time>
              <TimelineHeader>Buss hjem</TimelineHeader>
              <TimelineDescription>
                Ankomst Bergen cirka 16:30-17:00
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
      </main>

      <footer className="border-slate-60 mx-auto mt-24 flex h-24 w-full max-w-7xl items-center justify-center border-t px-2 text-center text-sm text-gray-500 dark:text-gray-400 dark:text-white sm:px-6 lg:px-8 ">
        Laget med ❤️ av komitéen. Neste år ønsker vi oss gjerne en designer med
        på laget!
      </footer>
    </div>
  )
}

export default Home
