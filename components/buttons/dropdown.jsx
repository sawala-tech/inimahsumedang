import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from '@headlessui/react'

class Dropdown extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         active: false
      }
   }
   toggleState() {
      const currentState = this.state.active
      this.setState({ active: !currentState })
   }
   render() {
      return (
         <div className="relative inline-block text-left">
            <div onClick={() => this.toggleState()} aria-hidden="true">
               {this.props.children[0]}
            </div>
            <Transition
               show={this.state.active === true}
               enter="transition-opacity duration-75"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="transition-opacity duration-150"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
               className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
               <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  {this.props.children[1]}
               </div>
            </Transition>
         </div>
      )
   }
}

const DropdownItem = (props) => {
   return (
      <button
         onClick={props.onClick}
         className={`flex items-center px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${props.className}`}
         role="menuitem">
         {props.children}
      </button>
   )
}

Dropdown.propTypes = {
   title: PropTypes.string
}

export { Dropdown, DropdownItem }
