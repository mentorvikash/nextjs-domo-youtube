// create API in nextjs
export default function getalltodo(req, res) {
    res.status(200).json({ success: true, message: "this is our Todo api" })
}

// that is how can create api in next
// now lets see how to create api for Get, POST, PUT and DELETE pages/api/dashboard.js
// lets crete our first Get api with dynamic data