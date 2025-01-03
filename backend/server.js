const express = require("express");

const app = express();
const dbconfig = require('./db')
const cors = require("cors");
const camplocationsRoute = require('./routes/camplocationsRoute')
const bookingsRoute = require('./routes/bookingsRoute')
const reservationRoutes = require('./routes/reservationRoutes');

app.use(cors(
    {
        origin: ["https://camp-site-booking-frontend.vercel.app/"],
        methods: ["POST", "GET", "PUT"],
        credentials: true
    }
));

// app.use(cors());
app.use(express.json())

app.use('/api/camplocations' , camplocationsRoute)
app.use('/api/bookings' , bookingsRoute)
app.use('/api/reservations', reservationRoutes);

// Load environment variables from the .env file
//dotenv.config();

// Start the server
const PORT = process.env.PORT || 8070;

app.listen(PORT, () => 
    console.log('Node server started'));