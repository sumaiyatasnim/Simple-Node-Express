const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.port || 3001;

app.get('/', (req, res) => {
    res.send('Wow i am excited to learn node and express')
})

const users = [
    { id: 0, name: "Chhowa", email: "chhowa@gmailcom", Phone: "01874145443" },
    { id: 1, name: "Mehedi", email: "mehedi@gmailcom", Phone: "01874145443" },
    { id: 2, name: "Walid", email: "walid@gmailcom", Phone: "01874145443" },
    { id: 3, name: "Farida", email: "farida@gmailcom", Phone: "01874145443" },
    { id: 4, name: "Ashraf", email: "ashraf@gmailcom", Phone: "01874145443" },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResults = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResults)
    }
    else {
        res.send(users)
    }

});


//app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits/mangoes/himshagor', (req, res) => {
    res.send('himshagor moja')
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'malta'])
})

app.listen(port, () => {
    console.log('listening to port', port);
});
// const handler = (req, res) => {
//     res.send('Hello from node');
// }

// app.get('/', handler);