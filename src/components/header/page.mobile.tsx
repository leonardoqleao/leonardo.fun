"use client"

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import MenuItem from './fragments/menu_item'

export default function MobileMenu({ itens }: { itens: MenuItemType[] }): JSX.Element {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className=" flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Transition appear show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="lg:hidden modal-mobile-menu" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-700 px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="h-10 flex items-center justify-between">
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="text-2xl text-slate-700 space-y-2 py-10 flex flex-col items-center justify-center ">
                                        {itens.map((item: MenuItemType): JSX.Element => <div className='py-5'><MenuItem item={item} /></div>)}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div >
    )
}
