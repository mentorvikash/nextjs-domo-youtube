// import comments
import { comments } from "../data/comments"

export default function getalltodo(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ success: true, comments: comments })
    } else if (req.method === "POST") {

        console.log("body ", res.body)

        const comment = {
            id: new Date(),
            body: req.body.comment
        }
        comments.push(comment)
        return res.status(200).json({ success: true, comment: comment })
    }
}

// lets render this data to UI
// We had successfully created a comment get routes and render data in UI
// Lets move to post api 
// Lets crate a post API
// lets check our post endpoint works or not
// here we had successfuly created our post api routes
// Next lets go for PUT OR Patch api route to add ability to update our data.
// Lets creat our patch api and see how it works with next js