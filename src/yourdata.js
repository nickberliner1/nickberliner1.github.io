export default
    {
        //Change The Website Template
        name :'',
        headerTagline: [//Line 1 For Header
                        'Hi there, I\'m Nick.',
                        //Line 2 For Header
                        'Front end developer, surfer, ',
                        //Line 3 For Header
                        'snowboarder, guitarist, and globetrotter.'
    ],
        //Contact Email
        contactEmail: 'nickberliner1@gmail.com',



        // Add Your About Text Here
        aboutTextOne: "I'm originally from Denver, Colorado but now residing in Northern Italy. I started developing websites for myself and friends and family in high school, just simple sites on WordPress, but got progressively better. ",
        aboutTextTwo: "After high school, I wasn't sure what I wanted to do, so I traveled the world. I spent a lot of time in Europe, and then Central America as well. When I returned to the states, I jumped into the startup/tech world. I started an app that failed tremendously, and then began to do marketing which became a full fledged agency. ",
        aboutTextThree: "We did content creation and campaigns for a multitude of companies, including Uber and RedBull, but after awhile I realized I wasn't happy with the 120 hour weeks of paperwork; my passion was in the tech side of it all. I eventually quit the business, and went back to school to get a degree in software engineering.",




        // aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        aboutImage: 'https://i.imgur.com/xtodfP8.jpg',
        //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Project One', //Project Title - Add Your Project Title Here
             service:'UI/UX Design', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL - Add Your Project Url Here
            //  url:'http://chetanverma.com/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Caveman Game',
                service: '2 player game built with OOP VanillaJS',
                imageSrc: "https://i.imgur.com/xjuTazY.jpg",
                url: 'http://nickberliner1.github.io/cavemen-game'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                // url: 'http://chetanverma.com/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                // url: 'http://chetanverma.com/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/nickberliner1'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/nickberliner1'
            },
            

        ]
    }