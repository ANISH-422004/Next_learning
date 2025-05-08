import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

type SnippitProp = {
    params: Promise<{ id: string }>
}



const DetailsPage: React.FC<SnippitProp> = async ({ params }) => {

    const id = parseInt((await params).id)

    const snippit = await prisma.snippet.findUnique(
        {
            where: {
                id,
            }
        }
    )

    if (!snippit) {
        return <h1 className='font-mono text-lg'>Snippit Not Found</h1>
    }




    return (
        <div className='flex flex-col items-center  min-h-screen p-4'>

            <div className=' w-[80%]'>
                <h1 className='text-2xl '>{snippit.title}</h1>
                <code className=' bg-gray-400 w-full'>{snippit.code}</code>
                <div className='flex items-center justify-between  h-full p-2 '>
                    <Link href={`/snippit/${snippit.id}/edit`} className='flex items-center justify-between w-full h-full p-2 border-2'>
                        <Button>Edit</Button>

                    </Link>
                    <Button variant={'destructive'}>Edit</Button>

                </div>

            </div>

        </div>
    )
}

export default DetailsPage