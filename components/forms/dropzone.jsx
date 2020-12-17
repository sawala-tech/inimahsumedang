import { useState } from 'react'

const Dropzone = (props) => {
   const [image, setImage] = useState(null)
   const loadFile = (event) => {
      setImage({ imgs: event.target.files })
   }
   const deleteImage = () => {
      setImage({ imgs: null })
   }
   return (
      <div>
         <span className="block mt-3 text-sm font-medium text-gray-700">Thumbnail</span>
         <div className="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
               {image?.imgs ? (
                  [...image.imgs].map((file) => (
                     <div key={file} className="relative">
                        <img
                           alt="preview"
                           className="mb-3 transition-opacity duration-200 opacity-50 hover:opacity:25"
                           src={URL.createObjectURL(file)}
                        />
                        <button
                           onClick={() => deleteImage()}
                           className="absolute px-5 py-2 text-white bg-red-500 rounded-md"
                           style={{ top: '50%', left: '50%', transform: 'translate(-50%)' }}>
                           Hapus
                        </button>
                     </div>
                  ))
               ) : (
                  <>
                     <svg
                        className="w-12 h-12 mx-auto text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                           d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </>
               )}
               <div className="flex justify-center text-sm text-gray-600">
                  <label
                     htmlFor="file-upload"
                     className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                     <span>Upload a file</span>
                     <input
                        id="file-upload"
                        name={props.name || 'file-upload'}
                        type="file"
                        onChange={loadFile}
                        className="sr-only"
                     />
                  </label>
                  <p className="pl-1">or drag and drop</p>
               </div>
               <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
         </div>
      </div>
   )
}

export default Dropzone
