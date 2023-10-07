import { comments } from "@/pages/data/comments"


export default function singleComment(req, res) {

    if (req.method === 'GET') {
        const { commentId } = req.query
        const comment = comments.filter(comment => comment.id === Number(commentId))
        return res.status(200).json({ success: true, comment: comment })

    } else if (req.method === 'DELETE') {
        // commentId is recived from comment

        console.log("we are in delete block")

        const { commentId } = req.query
        const index = comments.findIndex(comment => comment.id === Number(commentId))


        console.log({ index, commentId })
        // if commentId exiist 
        if (index) {
            // remove the comment from the array of comments
            comments.splice(index, 1)
        }
        return res.status(200).json({ success: true, message: "Comment successfully deleted" })
    }
}


// Let's check if we are getting out record or not
// This is how we can create dynamic api routs in next js 

// Let's create an Api route to delete a comment record
// this is our dynamic api route
// lets add a delete method 
// pass comment id 
// we had successfully deleted the seleted object bia delete Api