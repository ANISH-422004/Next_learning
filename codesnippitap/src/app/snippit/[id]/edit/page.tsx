
import EditCodeForm from '@/components/EditCodeForm'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import React from 'react'



const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = parseInt((await params).id)
    const snippit = await prisma.snippet.findUnique({
        where: {
            id,
        }
    })

    // console.log("snippit", snippit)


    if (!snippit) {
        return <h1 className='font-mono text-lg'>Snippit Not Found</h1>
    }

    return (
        <div className='min-h-screen p-4'>

            <EditCodeForm snippet={snippit} />

        </div>
    )
}

export default EditPage