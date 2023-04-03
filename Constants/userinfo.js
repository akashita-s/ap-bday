//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Happy 25th Birthday", //This text is visible on your navbar and footer like your logo.
    greeting: {
        //this text goes on your landing page
        title: "Hi Cutie.",
        subtitle: "This website is created by me, your baby. And it's is one of the surprises for this birthday. Hope you like it."
    },

    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2023', //timespan
                title: 'Still living with you', //eg. BTech in Compuster Engineering
                organization: 'now can\'t live without you'
            },
            {
                time: '2022',
                title: 'Started Living with you',
                organization: 'and got to learn so much about you '
            },
            {
                time: '2021',
                title: 'I got you',
                organization: 'And Fell in love'
            },
        ],
    },
    experience: {
        visible: false, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Our Paradise',
    workMainPage: 'Galleria',
    capabilities: 'Capabilities',
    about: 'Little Poem',
    education: 'The Love Timeline',
    experience: 'Experiences',
    blogs: 'I wrote this for you!',
    contact: 'Songs that remind me of you',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'See More',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'Read Poem',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}