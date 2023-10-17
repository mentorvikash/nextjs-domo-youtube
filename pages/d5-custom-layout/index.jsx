import React from 'react'
import Footer from '../comment/layout/footer'

function Index() {
  return (
    <>
    <h1>Suppose I do not need a Header in my this component only footer is required</h1>
    </>
  )
}

export default Index


// here we are defining custom layout for this component.
Index.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}