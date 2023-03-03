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
        description: 'First of all you\'re the perfect partner as we both like going on trips. We complete each other.', //project description
        githubLink: '', //github repo link
        projectLink: '', //deployed project link
        tech: ['Let\'s Travel the World'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'Kisses',
        description: 'I love that we never get tired of kissing each other. Both are equally clingy.',
        githubLink: '/',
        projectLink: '/',
        tech: ['Let\s kiss a million times, and then some more!'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Everything',
        description: 'I never thought I\'ll spend so much time with a person. But now I start missing you even when you\'re away for some time.',
        githubLink: '/',
        projectLink: '/',
        tech: ['All of me loves all of you.'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
