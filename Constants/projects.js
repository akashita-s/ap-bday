// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/One1.jpeg';
import PROJECT1_2 from '../styles/projects/One2.jpeg';
import PROJECT1_3 from '../styles/projects/One3.jpeg';
import PROJECT2_1 from '../styles/projects/Two1.jpeg';
import PROJECT2_2 from '../styles/projects/Two2.jpeg';
import PROJECT2_3 from '../styles/projects/Two3.jpeg';
import PROJECT3_1 from '../styles/projects/Three1.jpeg';
import PROJECT3_2 from '../styles/projects/Three2.jpeg';
import PROJECT3_3 from '../styles/projects/Three3.jpeg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Trips', //project name
        description: 'I cannot begin to express how much joy and excitement I feel when we travel together. Exploring new places and experiencing different cultures with you by my side is one of the greatest pleasures of my life. From the moment we step off the plane, I know that we are about to embark on an incredible adventure. Whether we are hiking through scenic landscapes, trying new foods, or simply wandering through the streets of a new city, I feel so grateful to be sharing these experiences with you. There is something truly special about exploring the world with the person you love. I love how we can discover new things together and create unforgettable memories that we will cherish for a lifetime. Thank you for being my travel companion, my partner in adventure, and my best friend. I cannot wait to see where our next journey takes us.', //project description
        githubLink: '', //github repo link
        projectLink: '', //deployed project link
        tech: ['Let\'s Travel the World'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'Kisses',
        description: 'I adore the way your kisses make me feel. Every time your lips touch mine, I feel a rush of warmth and love that fills me from head to toe. Your kisses are like a sweet embrace, a tender reminder of the depth of our connection. I love the way you hold me close, your arms wrapped around me in a warm embrace. I feel so safe and loved in your arms, and I know that nothing can ever come between us. Your kisses are like a secret language, a way for us to express our love without saying a word. With each gentle touch of your lips, I feel our bond growing stronger and deeper. ',
        githubLink: '/',
        projectLink: '/',
        tech: ['Let\s kiss a million times, and then some more!'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Everything',
        description: 'One of the things I love most about our relationship is how we always manage to have fun, no matter what we\'re doing. Whether we\'re trying out a new restaurant, taking a dance class, or simply wandering through the city, every moment with you feels like an adventure. I love how we can embrace spontaneity and try new things without hesitation. With you by my side, I feel like anything is possible. I cherish the memories we\'ve created together, and I look forward to all the new experiences we have yet to discover.',
        githubLink: '/',
        projectLink: '/',
        tech: ['All of me loves all of you.'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
