import blog from '../styles/projects/blog.jpg'

export const custom_blogs = [
    // please add only upto 6 blogs for maintaining the ui
    {
        title: 'Letter 1', //blog title
        description: 'What I love about you and why I\'m grateful to have you in my life', //blog decription
        link: '/extraone', //link your blog here
        thumbnail: blog, //blog image, can be an import or link
        categories: ['jim', 'pam', 'dwight'] //eg. web developement, prgramming, lifestyle etc.
    },
    {
        title: 'Letter 2',
        description: 'Memories we have shared together and how they\'ve impacted me.',
        link: '/extraone',
        thumbnail: blog,
        categories: ['jim', 'pam', 'dwight']
    },
    {
        title: 'Letter 3',
        description: 'Challenges we have faced and how we have grown as a couple.',
        link: 'www.google.com',
        thumbnail: blog,
        categories: ['jim', 'pam', 'dwight']
    },
    {
        title: 'Letter 4',
        description: 'How you have supported me and made a positive impact on my life.',
        link: 'www.google.com',
        thumbnail: blog,
        categories: ['jim', 'pam', 'dwight']
    },
]

// uncomment the following code if you want to fetch your medium articles and comment out the custom blogs code above
// export const medium_blogs = { username: 'yourusername'}

// uncomment the following code if you want to fetch your devto articles and comment out the custom blogs code above
// export const dev_to = { username: 'yourusername'}