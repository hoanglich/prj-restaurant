const image = {
    logo: require('./logo/logo.svg').default,
    backgroundBlog: require('./logo/paper_bg.png'),
    backgroundNotify: require('./notifyImage/1notify.jpg')
}

const slideImage = [
    {
        src: require('./slideImage/2.jpg'),
        des: '"With the freshest ingredients, it will bring you an unforgettable taste"'
    },
    {
        src: require('./slideImage/3.jpg'),
        des: 'The chain of high-end stores is ready to welcome you'
    },
    {
        src: require('./slideImage/4.jpg'),
        des: 'Hurry up to order food to enjoy!'
    }

]

const blogImage = [
    {
        id: 0,
        src: require('./blogImage/blog1.jpg'),
        des: 'Most of us don’t need to think much further than that – we just know we want to eat it. But what exactly is it about this dish that makes it so enticing? Done properly, deep-frying creates a satisfying contrast between the crispy-crunchy coating and tender chicken. Beyond that simple textural enjoyment, the crispness actually sends our brain a message that the food itself is in good condition.',
        title: 'Hot Chicken - Whole Bird',
        heading: 'fried chicken'
    },
    {
        id: 1,
        src: require('./blogImage/blog2.jpg'),
        des: 'Summer has arrived, and it’s time to fire up the backyard grill. Though many of us are trying to eat less beef for environmental reasons, it’s hard to resist indulging in an occasional steak — and you’ll want to make the most of the experience.',
        title: 'Steaks and Cakes Date Night Dinner for 2',
        heading: 'Steaks'
        
    }
]

const notifyImage=[
    {
        src: require('./notifyImage/saleImage1.jpg'),
        des: 'sale off 50%!!!',
        name: "Gramercy Tavern",
        title: "Delicious, invite you to eat, I'm not waiting for you now I will eat right away"
    },
    {
        src: require('./notifyImage/saleImage3.jpg'),
        des: 'sale off 90%!!!',
        name: "Peter Luger Steak House",
        title: "Delicious, invite you to eat, I'm not waiting for you now I will eat right away"
    }
]

const shopCategory = {
    Burgers:'burgers',
    Breads: 'breads',
    SandWichs: 'sandwiches',
    Drinks: 'drinks',
    Pizzas: 'pizzas'

}

export {image, slideImage,blogImage,notifyImage,shopCategory} 