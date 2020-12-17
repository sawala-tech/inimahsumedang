const input = (props) => {
   return (
      <>
         <input
            type={props.type || 'text'}
            name={props.name || 'input'}
            placeholder={props.placeholder || ''}
            autoComplete="given-name"
            className={`block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${props.className}`}></input>
      </>
   )
}
export default input
