import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Checkmark from '../../components/icons/checkmark'

const Select = (props) => {
   const lists = props.options
   const [selectedList, setSelectedList] = useState(lists[0])
   return (
      <div className={props.className}>
         {props.label && (
            <span id="listbox-span" className="block mb-2 text-sm font-medium text-gray-700">
               {props.label}
            </span>
         )}
         {/* input hidden */}
         <input
            type="hidden"
            name="kategori"
            value={selectedList.id}
            onChange={props.changeHandler}
         />
         <Listbox value={selectedList} onChange={setSelectedList}>
            {({ open }) => (
               <>
                  <Listbox.Button
                     className={`relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
                     <span className="flex items-center">
                        <span className="block ml-3 truncate">{selectedList.name}</span>
                     </span>
                     <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                        <svg
                           className="w-5 h-5 text-gray-400"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           aria-hidden="true">
                           <path
                              fillRule="evenodd"
                              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </span>
                  </Listbox.Button>
                  {/* Use the Transition + open render prop argument to add transitions. */}
                  <Transition
                     show={open}
                     enter=""
                     enterFrom=""
                     enterTo=""
                     leave="transition ease-in duration-100"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0">
                     <Listbox.Options
                        static
                        className="py-1 overflow-auto text-base rounded-md shadow-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {lists.map((list) => (
                           <Listbox.Option
                              key={list.id}
                              value={list}
                              className={`relative py-2 pl-6 text-gray-900 flex justify-between transition duration-200 cursor-pointer focus:outline-none select-none pr-9 hover:bg-indigo-600 hover:text-white`}
                              disabled={list.unavailable}>
                              {selectedList.id === list.id ? (
                                 <>
                                    {selectedList.name}
                                    <Checkmark className="inline w-4 h-4 mr-3" />
                                 </>
                              ) : (
                                 list.name
                              )}
                           </Listbox.Option>
                        ))}
                     </Listbox.Options>
                  </Transition>
               </>
            )}
         </Listbox>
      </div>
   )
}

export default Select
