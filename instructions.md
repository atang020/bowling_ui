If you're running on a Mac you'll need to redirect your localhost url by doing the following:
1. sudo /etc/host
2. add line:
3. 127.0.0.1 vnbrs.localhost
4. :wq!

Your system should now redirect localhost or 127.0.0.1 to url vnbrs.localhost.

Very important, otherwise you'll run into CORS and permission issues with Imgur API.
Imgur API does not allow direct API requests from origin localhost and 127.0.0.1

To run the application install all packages first:
### `npm install`

Then run the server:
### `npm start`

Localhost server is:
https://vnbrs.localhost:3004

Note: you will need to use https protocol because Imgur API is using a secure protocol.

Fun features added:
* Added Fieldwire color theme minus the black.
* For client's convenience, added hyperlink so the client can see the original file.
* For your convenience, screenshots can be found in the folder "demo_screenshots"
