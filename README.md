# Overview

This is a demo repo that takes the `base64image` and `type` query values from a URL to render a base64 image.

Example path:

```
https://www.hosted_url.com/image?type=image/png&base64=iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAACeElEQVR4nO2VQYrEQAwD8/9P795nIEZIcnpICXJqtyy7GnJd1/W3/H1qOp/q2/fX9wMQgNwOPAkg6YbDwJNeByQtd2HTeftBrO8HIACx6gGSbmjWvx7I0wOn+7fz2/6nDdTuD5DDBgbIYQMDZDh369t+ABHr234AEevbfgAR69t+AAnnUfO284z+ANnNM/oDZDfP6A+Q3TyjvxpQVRtYesFuvSqAlOtVAaRcrwog5XpVI5D2NwY6/Ly+H4AApLqw9jlADjvf3s/jchc41f/cQp4WQA4TQA7T64GkFzDdby9A7ecCduu/zgECEIDcnQPkx4CoDbf9pvqn88h+AOnmkf0A0s0j+wGkm8f1iy8gvWBXab/J3wUIkLA/QAYBxAz4OiDbC1QXkvZPPyB3Pjuget8NDBAxEEC8+eyA6n03MEDKA7UfQHqBrr/cHyAAAchdf4AcBiQdQB3Q7e/m2wYi+wHEq0/3B4hZn+4PELPe7j8VpAfeXnD7gal5Rn+AaP5untEfIJq/m2f0B4jm7+Zx/eMN2sDVPKrSwOMBpnrXr51HFUDKeVQBpJxHVR1Iu0EaQLqfOn99HoAABCB39QA5DMjTevoBpPtt348LIAC5rXf7bd+PCyAf99WflvtNgVw/VS4wgJgLmPqnz+X+AAHIbSCAmIZyQ7HevZ/2V/vJ/QECEKkeIGEBROzvDqDeVwO386Q/WwAByFF5AHJYHoCYedz66X77AcUNAaL1B4gogJh53Prp/uuBpBeyvWB3H1/1AMnmBYiZL50XIGa+dN46EFftBacfhJvPFkAAItUDJCyAiHIX8GsLS+eL1wMEINIAACl/6gCvAvIPOGEs7R2WrtAAAAAASUVORK5CYII=
```

This returns a QR code in the browser as an image:
![QR code example](/public/image.png)

## Use case

Some services (such as imgix) are not compatible with inline base64 images in the browser URL. Using a server to render the image through a URL is a workaround for cases where it needs to be returned through a server as an image.

## Usage

1. Fork this repo
2. Host it on a service such as Heroku
3. Make a request to the `/image` path and append the `type` and `base64` query parameter value to load an inline image.
