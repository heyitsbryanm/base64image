# Overview

This is a demo repo that takes a URL with a base64 encoded value -> turns it into an image.

Example path:

```
https://www.hosted_url.com/image?type=image/png&base64=iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAACeElEQVR4nO2VQYrEQAwD8/9P795nIEZIcnpICXJqtyy7GnJd1/W3/H1qOp/q2/fX9wMQgNwOPAkg6YbDwJNeByQtd2HTeftBrO8HIACx6gGSbmjWvx7I0wOn+7fz2/6nDdTuD5DDBgbIYQMDZDh369t+ABHr234AEevbfgAR69t+AAnnUfO284z+ANnNM/oDZDfP6A+Q3TyjvxpQVRtYesFuvSqAlOtVAaRcrwog5XpVI5D2NwY6/Ly+H4AApLqw9jlADjvf3s/jchc41f/cQp4WQA4TQA7T64GkFzDdby9A7ecCduu/zgECEIDcnQPkx4CoDbf9pvqn88h+AOnmkf0A0s0j+wGkm8f1iy8gvWBXab/J3wUIkLA/QAYBxAz4OiDbC1QXkvZPPyB3Pjuget8NDBAxEEC8+eyA6n03MEDKA7UfQHqBrr/cHyAAAchdf4AcBiQdQB3Q7e/m2wYi+wHEq0/3B4hZn+4PELPe7j8VpAfeXnD7gal5Rn+AaP5untEfIJq/m2f0B4jm7+Zx/eMN2sDVPKrSwOMBpnrXr51HFUDKeVQBpJxHVR1Iu0EaQLqfOn99HoAABCB39QA5DMjTevoBpPtt348LIAC5rXf7bd+PCyAf99WflvtNgVw/VS4wgJgLmPqnz+X+AAHIbSCAmIZyQ7HevZ/2V/vJ/QECEKkeIGEBROzvDqDeVwO386Q/WwAByFF5AHJYHoCYedz66X77AcUNAaL1B4gogJh53Prp/uuBpBeyvWB3H1/1AMnmBYiZL50XIGa+dN46EFftBacfhJvPFkAAItUDJCyAiHIX8GsLS+eL1wMEINIAACl/6gCvAvIPOGEs7R2WrtAAAAAASUVORK5CYII=
```

Example path two:

```
https://www.hosted_url.com/png/iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAACeElEQVR4nO2VQYrEQAwD8%2F9P795nIEZIcnpICXJqtyy7GnJd1%2FW3%2FH1qOp%2Fq2%2FfX9wMQgNwOPAkg6YbDwJNeByQtd2HTeftBrO8HIACx6gGSbmjWvx7I0wOn%2B7fz2%2F6nDdTuD5DDBgbIYQMDZDh369t%2BABHr234AEevbfgAR69t%2BAAnnUfO284z%2BANnNM%2FoDZDfP6A%2BQ3TyjvxpQVRtYesFuvSqAlOtVAaRcrwog5XpVI5D2NwY6%2FLy%2BH4AApLqw9jlADjvf3s%2Fjchc41f%2FcQp4WQA4TQA7T64GkFzDdby9A7ecCduu%2FzgECEIDcnQPkx4CoDbf9pvqn88h%2BAOnmkf0A0s0j%2BwGkm8f1iy8gvWBXab%2FJ3wUIkLA%2FQAYBxAz4OiDbC1QXkvZPPyB3Pjuget8NDBAxEEC8%2BeyA6n03MEDKA7UfQHqBrr%2FcHyAAAchdf4AcBiQdQB3Q7e%2Fm2wYi%2BwHEq0%2F3B4hZn%2B4PELPe7j8VpAfeXnD7gal5Rn%2BAaP5untEfIJq%2Fm2f0B4jm7%2BZx%2FeMN2sDVPKrSwOMBpnrXr51HFUDKeVQBpJxHVR1Iu0EaQLqfOn99HoAABCB39QA5DMjTevoBpPtt348LIAC5rXf7bd%2BPCyAf99WflvtNgVw%2FVS4wgJgLmPqnz%2BX%2BAAHIbSCAmIZyQ7HevZ%2F2V%2FvJ%2FQECEKkeIGEBROzvDqDeVwO386Q%2FWwAByFF5AHJYHoCYedz66X77AcUNAaL1B4gogJh53Prp%2FuuBpBeyvWB3H1%2F1AMnmBYiZL50XIGa%2BdN46EFftBacfhJvPFkAAItUDJCyAiHIX8GsLS%2BeL1wMEINIAACl%2F6gCvAvIPOGEs7R2WrtAAAAAASUVORK5CYII%3D
```

This returns a QR code in the browser as an image:
![QR code example](/public/image.png)

## Use case

Some services (such as imgix) are not compatible with inline base64 images in the browser URL. Using a server to render the image through a URL is a workaround for cases where it needs to be returned through a server as an image.

## Usage

1. Fork this repo
2. Host it on a service such as Heroku
3. Make a request to the `/image` path and append the `type` and `base64` query parameter value to load an inline image.
