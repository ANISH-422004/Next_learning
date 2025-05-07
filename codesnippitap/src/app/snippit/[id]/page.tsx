import React from 'react'

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id
    


    return (
        <div>DetailsPage

            <h1>{id}</h1>

        </div>
    )
}

export default DetailsPage