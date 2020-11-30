import PropTypes from 'prop-types'
import React from 'react'

class defaultButton extends React.Component {
   checkVariant(type) {
      const availableVariant = {
         primary: {
            classes: 'bg-blue-700 text-white font-semibold'
         },
         default: {
            classes: 'bg-gray-200'
         }
      }
      if (availableVariant[type] !== undefined) return availableVariant[type]
      else return availableVariant.default
   }
   render() {
      const variant = this.checkVariant(this.props.variant)
      return (
         <button
            className={`px-5 py-1 transition-all duration-200 rounded-3xl ${variant.classes} ${this.props.className}`}
            onClick={this.props.onClick}>
            {this.props.children}
         </button>
      )
   }
}

defaultButton.propTypes = {
   variant: PropTypes.string.isRequired,
   className: PropTypes.string
}

export default defaultButton
