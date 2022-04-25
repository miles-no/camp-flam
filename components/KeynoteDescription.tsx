import { Disclosure } from '@headlessui/react'
import { XIcon, PlusIcon } from '@heroicons/react/outline'
import TimelineDescription from 'components/TimelineDescription'

export default function KeynoteDescription() {
  return (
    <Disclosure as="nav" className="dark:bg-gray-800">
      {({ open }) => (
        <>
          <div>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Vis detaljer</span>
                  {open ? (
                    <XIcon className="block h-4 w-6" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="block h-4 w-6" aria-hidden="true" />
                  )}
                  Beskrivelse
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
