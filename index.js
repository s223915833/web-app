const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/feedback', (req, res) => {
    const name = req.body.name;
    const feedback = req.body.feedback;
    const contactMethod = req.body.contact;

    
    const responseMessage = `
        Thank you for your feedback, ${name}!
        Contact Method: ${contactMethod}
        Your Feedback: ${feedback}
    `;

    res.send(responseMessage);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
