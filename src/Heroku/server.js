// Import npm packages
const isLoadedProducts = require('isLoadedProducts');
const isLoadedAvailability = require('isLoadedAvailability');
const availabilities = require('availabilities');
const products= require('products');

const ApiProducts= isLoadedProducts();
const ApiAvailability = isLoadedAvailability();

const PORT = process.env.PORT || 8080; //Finding the port available

const routes = require('./routes/API/ApiProducts');

const routes = require('./routes/API/ApiAvailability');

// Connecting APIs with User interface
availabilities.connect('http://localhost:3000/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
availabilities.connection.on('connected', () => {
    console.log('ApiAvailability is connected');
});
products.connect('http://localhost:3000/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

products.connection.on('connected', () => {
    console.log('ApiProducts is connected');
});

// Data parsing
ApiProducts.use(isLoadedProducts.json());
ApiProducts.use(products.urlencoded({ extended: false }));
ApiAvailability .use(availabilities.json());
ApiAvailability .use(isLoadedAvailability.urlencoded({ extended: false }));

// creating custom variables in heroku

if (process.env.NODE_ENV === 'production') {
    ApiProducts.use(isLoadedProducts.static('public/src'));
}
 else {
     ApiAvailability.use(isLoadedAvailability.static('public/src'));
}

// HTTP request logger
app.use('/API/ApiAvailability', routes);
app.use('/API/ApiProducts', routes);



app.listen(PORT, console.log(`Server is starting at ${PORT}`));