import React from 'react'
import Head from 'next/head'
import { userinfo } from '../Constants/userinfo'

const HeadTag = ({page}) => {
    return (
        <Head>
            <title>{userinfo.logoText}</title>
            <link rel="icon" href="/cap.png" />
            <meta name="title" content={userinfo.logoText} />
{/* 
            <meta property="og:type" content="website" />
            <meta property="og:title" content={userinfo.logoText} />
            <meta property="og:description" content={userinfo.greeting.subtitle} />
            <meta property="og:image" content="" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={userinfo.logoText} />
            <meta property="twitter:description" content={userinfo.greeting.subtitle} />
            <meta property="twitter:image" content="" /> */}
        </Head>
    )
}

export default HeadTag
