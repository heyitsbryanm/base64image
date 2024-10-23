const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/image', (req, res) => {
    // Get the base64 string and handle potential URL splitting
    let base64Image;
    if (req.query.base64) {
        // Handle case where URL was split into data=data:image/png&base64=...
        base64Image = `data:image/png;base64,${req.query.base64}`;
    } else {
        // Handle normal case where everything is in the data parameter
        base64Image = decodeURIComponent(req.query.data).replace(/ /g, '+');
    }
    
    if (!base64Image) {
        return res.status(400).send('No image data provided');
    }

    try {
        // Remove data URI prefix if it exists (now handles both cases)
        const base64Data = base64Image
            .replace(/^data:image\/png;base64,/, '')
            .replace(/^data:image\/png&base64,/, '');
        
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
        console.error('Error processing image:', error);
        res.status(400).send('Invalid base64 image data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});