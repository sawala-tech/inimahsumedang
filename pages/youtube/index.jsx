import React, { useState } from 'react'
import { Masonry } from '../../components/layouts'
import { YoutubeCard as Card } from '../../components/cards'
import { DefaultButton as Button } from '../../components/buttons'
import { YoutubeModal } from '../../components/popups'
import { Transition } from '@headlessui/react'

const url =
   'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDwW-CyNXy6nN_ipxSYW7_aLENfDEsYcYo&channelId=UCqNcDzHw-B7o5MSqJZ_EQhA&part=snippet,id&order=date&maxResults=21'

const href = (url) => {
   window.open(url, '_blank')
}
const youtubePage = ({ videos }) => {
   const [state, ytState] = useState(false)
   const [ytID, ytIdState] = useState('')
   const openYoutube = (ytID) => {
      ytIdState(ytID)
      ytState(!state)
   }
   return (
      <div className="w-4/5 mx-auto my-10">
         <div className="flex items-center justify-between">
            <h1 className="ml-2 text-3xl">Youtube</h1>
         </div>
         <div className="mt-10">
            <Masonry>
               {videos.map(function (video, i) {
                  return (
                     <Card
                        key={i}
                        onClick={() => openYoutube(video.id.videoId)}
                        videoId={video.id.videoId}
                        title={video.snippet.title}
                        date={video.snippet.publishedAt}
                        thumbnail={video.snippet.thumbnails.high.url}></Card>
                  )
               })}
            </Masonry>
            <Transition
               show={state}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0">
               <YoutubeModal close={() => openYoutube(null)} ytId={ytID}></YoutubeModal>
            </Transition>
            <div className="w-full mt-10 text-center">
               <Button
                  variant="primary"
                  onClick={() =>
                     href('https://www.youtube.com/results?search_query=inimahsumedang')
                  }>
                  Selengkapnya
               </Button>
            </div>
         </div>
      </div>
   )
}

export const getStaticProps = async () => {
   const data = await fetch(url).then((data) => {
      return data.json()
   })
   return {
      props: {
         videos: data.items
      }
   }
}

export default youtubePage
