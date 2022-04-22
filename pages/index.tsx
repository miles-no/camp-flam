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
    <div className="flex min-h-screen flex-col items-center  py-2 dark:bg-gray-800">
      <Head>
        <title>Camp Flåm 2022 | Miles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <h1 className="text-6xl font-bold">
          <span className="dark:text-white">Velkommen til </span>
          <span className="text-red-600">Miles Camp Flåm!</span>
        </h1>
        <div className="text-2xl dark:text-white" id="friday">
          <h2>Frivillig Fredag</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem>
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                17:00
              </Time>
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
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                21:00
              </Time>
              <TimelineHeader>Middag</TimelineHeader>
              <TimelineDescription>
                Hvor skal middagen være mon tro?
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
        <div className="text-2xl dark:text-white" id="saturday">
          <h2>Lørdag</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem>
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                06:30
              </Time>
              <TimelineHeader>Avreise Miles</TimelineHeader>
              <TimelineDescription>
                For de som kommer om lørdagen
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                08:00
              </Time>
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
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                09:30
              </Time>
              <TimelineHeader>Velkommen</TimelineHeader>
              <TimelineDescription>I den store salen</TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                16:00
              </Time>
              <TimelineHeader>Sosiale Aktiviter</TimelineHeader>
              <TimelineDescription>
                <SocialActivities />
              </TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
        <div className="text-2xl dark:text-white" id="sunday">
          <h2>Søndag</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem>
              <Time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                --:--
              </Time>
              <TimelineHeader>TBA</TimelineHeader>
              <TimelineDescription></TimelineDescription>
            </TimelineItem>
          </ol>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t dark:text-white">
        Laget med ❤️ av komitéen. Neste år ønsker vi oss gjerne en designer med
        i på laget!
      </footer>
    </div>
  )
}

export default Home
