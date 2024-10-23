const handlePng = (req, res) => {
    // Get the base64 string from query parameter, decode it, and fix spaces
    // the `/image` endpoint expects a query parameter named `base64` with the base64 image data, and a `type` query parameter with the image type (e.g. `image/png`).
    // Example: https://a4e9-156-39-127-29.ngrok-free.app/image/png/aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQmtDQVlBQUFCdzRwVlVBQUFBSG5SRldIUlRiMlowZDJGeVpRQmlkMmx3TFdwekxtMWxkR0ZtYkc5dmNpNWpiMjFUbmJpMEFBQUNlRWxFUVZSNG5PMlZRWXJFUUF3RDgvOVA3OTVuSUVaSWNucElDWEpxdHl5N0duSmQxL1czL0gxcU9wL3EyL2ZYOXdNUWdOd09QQWtnNlliRHdKTmVCeVF0ZDJIVGVmdEJyTzhISUFDeDZnR1NibWpXdng3STB3T24rN2Z6Mi82bkRkVHVENUREQmdiSVlRTURaRGgzNjl0K0FCSHIyMzRBRWV2YmZnQVI2OXQrQUFublVmTzI4NHorQU5uTk0vb0RaRGZQNkErUTNUeWp2eHBRVlJ0WWVzRnV2U3FBbE90VkFhUmNyd29nNVhwVkk1RDJOd1k2L0x5K0g0QUFwTHF3OWpsQURqdmYzcy9qY2hjNDFmL2NRcDRXUUE0VFFBN1Q2NEdrRnpEZGJ5OUE3ZWNDZHV1L3pnRUNFSURjblFQa3g0Q29EYmY5cHZxbjg4aCtBT25ta2YwQTBzMGord0drbThmMWl5OGd2V0JYYWIvSjN3VUlrTEEvUUFZQnhBejRPaURiQzFRWGt2WlBQeUIzUGp1Z2V0OE5EQkF4RUVDOCtleUE2bjAzTUVES0E3VWZRSHFCcnIvY0h5QUFBY2hkZjRBY0JpUWRRQjNRN2UvbTJ3WWkrd0hFcTAvM0I0aFpuKzRQRUxQZTdqOFZwQWZlWG5EN2dhbDVSbitBYVA1dW50RWZJSnEvbTJmMEI0am03K1p4L2VNTjJzRFZQS3JTd09NQnBuclhyNTFIRlVES2VWUUJwSnhIVlIxSXUwRWFRTHFmT245OUhvQUFCQ0IzOVFBNURNalRldm9CcFB0dDM0OExJQUM1clhmN2JkK1BDeUFmOTlXZmx2dE5nVncvVlM0d2dKZ0xtUHFueitYK0FBSEliU0NBbUlaeVE3SGV2Wi8yVi92Si9RRUNFS2tlSUdFQlJPenZEcURlVndPMzg2US9Xd0FCeUZGNUFISllIb0NZZWR6NjZYNzdBY1VOQWFMMUI0Z29nSmg1M1BycC91dUJwQmV5dldCM0gxLzFBTW5tQllpWkw1MFhJR2ErZE40NkVGZnRCYWNmaEp2UEZrQUFJdFVESkN5QWlISVg4R3NMUytlTDF3TUVJTklBQUNsLzZnQ3ZBdklQT0dFczdSMldydEFBQUFBQVNVVk9SSzVDWUlJ


    const base64Image = decodeURIComponent(req.url).replace('/png/','').replace(/ /g, '+');

    console.log(req.url.replace('/png/',''))
    // debugging
    
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
            'Content-Type': 'image/png',
            'Content-Length': imageBuffer.length
        });
        
        // Send the image
        res.send(imageBuffer);
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(400).send('Invalid base64 image data');
    }
}

module.exports = handlePng;