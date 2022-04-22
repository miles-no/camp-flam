import type { NextPage } from 'next'
import Head from 'next/head'
import Time from 'components/Time'
import TimelineDescription from 'components/TimelineDescription'
import TimelineHeader from 'components/TimelineHeader'
import TimelineItem from 'components/TimelineItem'
import Navbar from '../components/Navbar'
import SocialActivities from '../components/SocialActivities'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  dark:bg-gray-800 ">
      <Head>
        <title>Camp Flåm 2022 | Miles</title>
        <link rel="icon" type="image/gif" href="/favicon.gif" sizes="32x32" />
      </Head>

      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <Navbar />
        <h1 className="my-4 text-2xl font-bold lg:text-4xl">
          <span className="dark:text-white">Program</span>
        </h1>
        <div className="dark:text-white" id="friday">
          <h2 className="text-lg">Frivillig Fredag</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem>
              <Time>17:00</Time>
              <TimelineHeader>Avreise Miles</TimelineHeader>
              <TimelineDescription>
                Bussen går presis! Det blir litt å drikke og snacks ombord i
                bussen
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>20:30</Time>
              <TimelineHeader>Ankomst Flåm</TimelineHeader>
              <TimelineDescription>
                Innsjekking på rommene, hipp hurra
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>21:00</Time>
              <TimelineHeader>Middag</TimelineHeader>
              <TimelineDescription>
                Hvor skal middagen være mon tro?
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
        <div className=" dark:text-white" id="saturday">
          <h2 className="text-lg">Lørdag</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem>
              <Time>06:30</Time>
              <TimelineHeader>Avreise Miles</TimelineHeader>
              <TimelineDescription>
                For de som kommer om lørdagen
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
              <TimelineHeader>Velkommen</TimelineHeader>
              <TimelineDescription>I den store salen</TimelineDescription>
            </TimelineItem>
            <div id="fag" />
            <TimelineItem>
              <Time>09:45</Time>
              <TimelineHeader>Fagspor</TimelineHeader>
              <TimelineDescription>TODO</TimelineDescription>
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
              <TimelineDescription>
                <SocialActivities />
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>19:30</Time>
              <TimelineHeader>Aperitif i Ægir Bryggeripub</TimelineHeader>
              <TimelineDescription>
                Cirka 50 meter og gå fra hotellet
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>20:00</Time>
              <TimelineHeader>Vikingfestmiddag</TimelineHeader>
              <TimelineDescription>
                I peisestuen til Ægir, midt mellom puben og hotellet :)
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
        <div className="dark:text-white" id="sunday">
          <h2 className="text-lg">Søndag</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem>
              <Time>09:30</Time>
              <TimelineHeader>God morgen v/Kate</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>09:45</Time>
              <TimelineHeader>Lyntaler</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>11:00</Time>
              <TimelineHeader>Pause</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>11:30</Time>
              <TimelineHeader>Pause</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>12:00</Time>
              <TimelineHeader>
                Keynote Neuro/technology - From foundations to the future |
                <span className=""> Hannah og Marius</span>
              </TimelineHeader>
              <TimelineDescription>
                The brain is a fascinating organ, it is the literal mastermind
                of ourselves. But how is it built, how it is interconnected with
                the rest of our body, and how does it communicate within itself?
                In this keynote, you will get a first glimpse of the basic
                anatomy and organization of the brain, as well as insights in
                neurophysiology in light of examples from the emerging field of
                research in neurology. By explaining the basic dynamics of
                neuronal signaling and information processing, you will develop
                a basic understanding on which to build an appreciation of how
                the mechanisms of neuroplasticity, adaptation and learning work.
                The keynote furthermore will highlight the implications of those
                principles in our everyday performance and further research.
              </TimelineDescription>
              <TimelineDescription>
                With knowledge in neuropsychology and the underlying process, we
                will assert what information we can draw directly from the
                brain. The devices used are called brain-computer-interfaces
                (BCIs). While the origin of BCIs range back into the early 19th
                century, they have gathered new attention lately, e.g. by
                Neuralink's, one of Musk's startups. But the world of BCIs is
                much larger than that tip of the iceberg: from medical imaging,
                to giving blind people the ability to see with the use of their
                tongue, all the way to controlling robotic arms with cortical
                implants; These are possible now and has been achieved, with the
                future holding promises of giving paraplegics the ability to
                walk again, and letting networks of biological neurons control
                tasks.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time>12:30</Time>
              <TimelineHeader>Lunsj</TimelineHeader>
            </TimelineItem>
            <TimelineItem>
              <Time>13:30</Time>
              <TimelineHeader>Avslutning</TimelineHeader>
            </TimelineItem>
            <TimelineItem>
              <Time>13:45</Time>
              <TimelineHeader>Buss hjem</TimelineHeader>
              <TimelineDescription>
                Ha det bra og takk for nå
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
      </main>

      <footer className="text-gray:700 mx-auto flex h-24 w-full max-w-7xl items-center justify-center border-t px-2 text-sm dark:text-white sm:px-6 lg:px-8 ">
        Laget med ❤️ av komitéen. Neste år ønsker vi oss gjerne en designer med
        i på laget!
      </footer>
    </div>
  )
}

export default Home
