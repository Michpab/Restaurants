 const router = require('express').Router()
 
 
  // router.get('/', (req, res) => {
  //  res.send('Get /places')
  //  })


//  GET /places
router.get('/new', (req, res) => {
  res.render('places/new',{places})
})

    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: '/images/images.jpeg4.jpeg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/images.jpeg3.jpeg'
    }]
    // res.render('places/index', { places }) 
  //  })


// app.get('/', (req, res) => {
//  res.render('places/index')
//  })


  

module.exports = router

