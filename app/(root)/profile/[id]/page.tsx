import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = async ({params}: ParamsWithSearch) => {
    const {id} = await params
  return (
    <div className='wrapper page'>
        <Header
            subHeader='admin@gmail.com'
            title='Admin'
            userImg='/assets/images/dummy.jpg'
        />
        <section className="video-grid">
          <VideoCard
            id='1'
            title='Snapchat Message'
            thumbnail='/assets/samples/thumbnail (1).png'
            createdAt={new Date('2025-05-01')}
            userImg='/assets/images/jason.png'
            username='Jason'
            views={10}
            visibility='public'
            duration={156}
          />
        </section>
    </div>
  )
}

export default Page