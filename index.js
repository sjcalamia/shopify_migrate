const request = require('request')
const Shopify = require('shopify-api-node')

const dev = Shopify({
              shopName : '2betties-dev',
              apiKey : '4f0cc8a711b496c1b0c8b0c6ed5bef90',
              password: '45a4236aadb886183bc2f4a6d4fc6b4e'
  })

const prod = Shopify({
              shopName : '2betties',
              apiKey : 'af985aaf034488a29a6ad1d2ef3d8ef4',
              password: '03ba286dc56065c08a3cab297bad5725'
  })
console.log(prod)

// set some objects to store our data
/*let dev_data = {}
dev.blog.list().then(blogs => {
  dev_data.blogs = blogs
})*/
// Transfer products
/*dev.product.list().then(products=>{
    for (let product of products) {
      prod.product.create(product).then(
        r=>{ console.log(r) },
        err=>{ console.log(err) }
      )
    }
  })*/
/*
dev.customCollection.list().then(coll=>{
  for (let c of coll) {
    prod.customCollection.create(c).then(r=>console.log(r),err=>console.log(err))
  }
})*/

// Transfer blogs & articles
prod.blog.list().then(blogs => {
  for (let blog of blogs) {
    if blog
    body.blog_id = blog.id
    prod.blog.delete(blog.id)
  }
})
let body = { id: 241308234,
  title: 'Why are almonds good for you?',
  created_at: '2017-09-05T05:13:45-04:00',
  body_html: '',
  blog_id: 97042442,
  author: '2 Betties',
  user_id: 109897866,
  published_at: null,
  updated_at: '2017-09-05T05:13:45-04:00',
  summary_html: '',
  template_suffix: null,
  handle: 'why-are-almonds-good-for-you',
  tags: '' }
dev.blog.list()
  .then(blogs => {
    console.log(blogs);
    for (let blog of blogs) {
      console.log(blog)
      prod.blog.create(blog).then(b=>{
        dev.article.list(blog.id).then( articles => {
            console.log(articles);
            for (let article of articles) {
              console.log(article)
              article.blog_id = b.id
              prod.article.create(article)
                .then( art => console.log(art), err => console.log("art",err) )
            }
        }, err => console.log("articles ",err))
      })
    }
  })


/*{ id: 251331658,
  title: 'Our Story',
  shop_id: 20273611,
  handle: 'our-story',
  body_html: '"<p>This mother and daughter duo doesn’t sugar coat anything—especially their products. It’s what started this business in the first place. The snack-food industry, after all, is an overly saturated and sweetened market that masks calories for energy and chemicals for convenience. Nancy and Bridget were fed up. Literally.</p>\\r\\n<p>From frustrated consumers to motivated producers, they put on their thinking caps and their aprons and went to work on a mission to make a naturally grain free product that delivered as much nutrition as it does in flavor. After a year of trial and error, using only all-natural ingredients, something amazing came out of the oven. Friends and family agreed. And the days of settling for artificial snacks disguised in earthy packaging and backed by deceptive marketing were over.</p>\\r\\n<p>2 Betties had emerged—providing hard-working, on-the-go families and individuals with BETTER snack-food options. Better quality, taste, nutrition, and information. <strong>For goodness sake.™</strong></p>"',
  author: '2 Betties',
  created_at: '2017-07-09T02:44:33-04:00',
  updated_at: '2017-09-05T16:48:56-04:00',
  published_at: '2017-07-09T02:35:00-04:00',
  template_suffix: 'ourstory' }*/

// Transfer pages
/*prod.shop.get().then(sho=> {
  let shopid = sho.id
  //request()

  dev.page.list().then(
    (pages,err) => {
      if (err) { console.log(err); return;}
      for (let p of pages) {
        if (p.body_html) {
          p['body_html'] = JSON.stringify(p.body_html)
        }
        p['id'] = shopid
        //console.log(p);
        prod.page.create(p).then( (pg, err)=>console.log(err, pg) )
      }
    }
  )
})
*/

