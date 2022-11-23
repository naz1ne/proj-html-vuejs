import { reactive } from 'vue'

export const store = reactive({
      speakers: [
            {
                  img: '/images/speaker-1.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-2.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-3.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-4.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-5.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-6.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-7.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-8.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
      ],
      news: [
            {
                  image: '/images/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg',
                  title: 'lorem ipsum',
                  date: '23 December',
                  comments: '0',
                  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis illo nobis eveniet quisquam beatae. Aperiam commodi consequatur'
            },
            {
                  image: '/images/photodune-8522811-speaker-at-business-conference-and-present.jpg',
                  title: 'lorem ipsum',
                  date: '23 December',
                  comments: '2',
                  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis illo nobis eveniet quisquam beatae. Aperiam commodi consequatur'
            },
            {
                  image: '/images/photodune-8797753-multiethnic-people-with-startup-business-t.jpg',
                  title: 'lorem ipsum',
                  date: '23 May',
                  comments: '0',
                  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis illo nobis eveniet quisquam beatae. Aperiam commodi consequatur'
            }
      ],
      tickets: [
            {
                  name: 'one day pass',
                  type: 'free',
                  description: {
                        offer1: 'one day access',
                        offer2: 'coffee break',
                        offer3: 'lunch(international buffet)',
                        offer4: 'documents sheets',
                        offer5: '50usd voucher for next event'

                  },
                  link: 'book now'


            },
            {
                  name: 'four day passes',
                  type: '750.00 usd',
                  description: {
                        offer1: 'four day access',
                        offer2: 'coffee break',
                        offer3: 'lunch(international buffet)',
                        offer4: 'documents sheets',
                        offer5: '100usd voucher for next event'

                  },
                  link: 'book now'


            },
            {
                  name: 'two day passes',
                  type: 'free',
                  description: {
                        offer1: 'two day access',
                        offer2: 'coffee break',
                        offer3: 'lunch(international buffet)',
                        offer4: 'documents sheets',
                        offer5: '70usd voucher for next event'

                  },
                  link: 'book now'


            }
      ],
      twitterFeed: [
            {
                  logo: '/images/twitterLogo.png',
                  feed: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquamcumque quas commodi nam nostrum, @Envato consectetur nesciunt quam Eius illum voluptas autem? Cupiditate maxime animi quisquam voluptate asperiores! Sapiente, maiores.',
                  link: 'https://t.co/GsdBgsa',
                  date: '3 days ago'
            },
            {
                  logo: '/images/twitterLogo.png',
                  feed: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..Cupiditate maxime animi quisquam voluptate asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquamcumque quas commodi nam nostrum',
                  link: 'https://t.co/BsdAxsa',
                  date: '9 days ago'
            },
            {
                  logo: '/images/twitterLogo.png',
                  feed: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..Cupiditate maxime animi quisquam voluptate asperiores! Lorem verded srumLorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquamcumque quas commodi nam nostrum',
                  link: 'https://t.co/BGaHs',
                  date: '11 days ago'
            }
      ],
      sponsors: [
            { image: '/images/banner-1.jpg' },
            { image: '/images/banner-2.jpg' },
            { image: '/images/banner-3.jpg' },
            { image: '/images/banner-4.jpg' },
            { image: '/images/banner-5.jpg' },
            { image: '/images/banner-6.jpg' }
      ]

})