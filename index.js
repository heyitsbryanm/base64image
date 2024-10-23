const express = require('express');
const app = express();

// Use Heroku's dynamic port or fallback to 3000
const port = process.env.PORT || 3000;

app.get('/image', (req, res) => {
    
    // Get the base64 string from query parameter, decode it, and fix spaces
    // the `/image` endpoint expects a query parameter named `base64` with the base64 image data, and a `type` query parameter with the image type (e.g. `image/png`).
    // Example: https://a4e9-156-39-127-29.ngrok-free.app/image?type=image/png&base64=iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAACeElEQVR4nO2VQYrEQAwD8/9P795nIEZIcnpICXJqtyy7GnJd1/W3/H1qOp/q2/fX9wMQgNwOPAkg6YbDwJNeByQtd2HTeftBrO8HIACx6gGSbmjWvx7I0wOn+7fz2/6nDdTuD5DDBgbIYQMDZDh369t+ABHr234AEevbfgAR69t+AAnnUfO284z+ANnNM/oDZDfP6A+Q3TyjvxpQVRtYesFuvSqAlOtVAaRcrwog5XpVI5D2NwY6/Ly+H4AApLqw9jlADjvf3s/jchc41f/cQp4WQA4TQA7T64GkFzDdby9A7ecCduu/zgECEIDcnQPkx4CoDbf9pvqn88h+AOnmkf0A0s0j+wGkm8f1iy8gvWBXab/J3wUIkLA/QAYBxAz4OiDbC1QXkvZPPyB3Pjuget8NDBAxEEC8+eyA6n03MEDKA7UfQHqBrr/cHyAAAchdf4AcBiQdQB3Q7e/m2wYi+wHEq0/3B4hZn+4PELPe7j8VpAfeXnD7gal5Rn+AaP5untEfIJq/m2f0B4jm7+Zx/eMN2sDVPKrSwOMBpnrXr51HFUDKeVQBpJxHVR1Iu0EaQLqfOn99HoAABCB39QA5DMjTevoBpPtt348LIAC5rXf7bd+PCyAf99WflvtNgVw/VS4wgJgLmPqnz+X+AAHIbSCAmIZyQ7HevZ/2V/vJ/QECEKkeIGEBROzvDqDeVwO386Q/WwAByFF5AHJYHoCYedz66X77AcUNAaL1B4gogJh53Prp/uuBpBeyvWB3H1/1AMnmBYiZL50XIGa+dN46EFftBacfhJvPFkAAItUDJCyAiHIX8GsLS+eL1wMEINIAACl/6gCvAvIPOGEs7R2WrtAAAAAASUVORK5CYII=

    const base64Image = decodeURIComponent(req.query.base64).replace(/ /g, '+');
    const type = decodeURIComponent(req.query.type);

    // debugging
    console.log('====================================');
    console.log('base64Image: ', base64Image);
    console.log('====================================');
    console.log('type: ', type);
    console.log('====================================');
    
    if (!base64Image) {
        return res.status(400).send('No image data provided');
    }

    try {
        // Remove potential "data:image/png;base64," prefix if it exists
        
        console.log('base64Image:', base64Image);
        // Convert base64 to buffer
        const imageBuffer = Buffer.from(base64Image, 'base64');
        
        // Set response headers
        res.set({
            'Content-Type': type,
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
