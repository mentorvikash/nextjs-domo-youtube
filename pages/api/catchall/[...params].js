export default function getalltodo(req, res) {

    if (req.query.params.includes("name")) {
        res.status(200).json({ success: true, message: "name Routes" })
    } else {
        res.status(200).json({ success: true, message: "GENERAL CATCH ALL ROUTES" })
    }
}

// this is how we can handle all different routs in one file

// we acn render different response based on what parameter we have recieved.