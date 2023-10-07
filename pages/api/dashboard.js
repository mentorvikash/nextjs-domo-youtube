// create API in nextjs
export default function getalltodo(req, res) {
    res.status(200).json({ success: true, message: "this is our dashboard api" })
}