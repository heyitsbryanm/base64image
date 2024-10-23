const express = require('express');
const app = express();
// Use Heroku's dynamic port or fallback to 3000
const port = process.env.PORT || 3000;

app.get('/image', (req, res) => {
    // Get the base64 string from query parameter
    const base64Image = decodeURIComponent(req.query.data);
    
    if (!base64Image) {
        return res.status(400).send('No image data provided');
    }

    try {
        // Remove potential "data:image/png;base64," prefix if it exists
        const base64Data = base64Image.replace(/^data:image\/png;base64,/, '').replaceAll(' ', '+');
        console.log(base64Data);
        
        // Convert base64 to buffer
        const imageBuffer = Buffer.from(base64Data, 'base64');
        
        // Set response headers
        res.set({
            'Content-Type': 'image/png',
            'Content-Length': imageBuffer.length
        });
        
        // Send the image
        res.send(imageBuffer);
    } catch (error) {
        res.status(400).send('Invalid base64 image data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
