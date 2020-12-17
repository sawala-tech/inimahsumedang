import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'

const mdParser = new MarkdownIt(/* Markdown-it options */)

const Editor = (props) => {
   const [content, setContent] = useState('')
   const handleEditorChange = ({ html }) => {
      setContent(html)
   }
   return (
      <>
         <input type="hidden" name={props.name || 'content'} value={content} />
         <MdEditor
            style={{ height: '300px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
         />
      </>
   )
}

export default Editor
