import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Time from 'components/Time'
import TimelineDescription from 'components/TimelineDescription'
import TimelineHeader from 'components/TimelineHeader'
import TimelineItem from 'components/TimelineItem'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  py-2 dark:bg-gray-800">
      <Head>
        <title>Camp Flåm 2022 | Miles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Meny</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#friday"
                    className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Fredag
                  </a>
                </li>
                <li>
                  <a
                    href="#saturday"
                    className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Lørdag
                  </a>
                </li>
                <li>
                  <a
                    href="#sunday"
                    className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Søndag
                  </a>
                </li>
                <li>
                  <a
                    href="#saturday"
                    className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Sosiale aktiviteter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
