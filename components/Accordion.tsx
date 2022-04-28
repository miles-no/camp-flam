import {Disclosure} from '@headlessui/react'
import {XIcon, PlusIcon} from '@heroicons/react/outline'
import TimelineDescription from 'components/TimelineDescription'

export default function Accordion({children}: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <Disclosure as="div" className="dark:bg-gray-800">
            {({open}) => (
                <>
                    <div>
                        <div className="relative flex h-12 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center ">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md border p-2   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Vis detaljer</span>
                                    {open ? (
                                        <XIcon className="block h-4 w-6" aria-hidden="true"/>
                                    ) : (
                                        <PlusIcon className="block h-4 w-6" aria-hidden="true"/>
                                    )}
                                    {open ? (
                                        <span className="text-sm">Nå har jeg lest</span>
                                    ) : (
                                        <span className="text-sm">Fortell meg mer</span>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel>
                        <div className="px-2 pt-2 pb-3">
                            {children}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
