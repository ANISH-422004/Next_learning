import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const newSnippit = () => {
    const createSnippit = async (formData: FormData) => {
        "use server" // this is a server action
        const title = formData.get('title') as string
        const code = formData.get('code') as string

        const snippit = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log("created snippit", snippit)
        // redirect to the snippit page

        redirect("/")
    }


    return (
        <div className='flex flex-col items-center min-h-screen p-4'>
            <div className='w-[50vw] p-2 border-2' >
                <form action={createSnippit} className='flex flex-col items-center justify-center w-full h-full'>
                    <Label className='font-mono text-lg'>Title</Label>
                    <Input name="title" type="text" placeholder="Title" />
                    <Label className='font-mono text-lg'>Code</Label>
                    <Textarea name="code" className='w-full h-[50vh] p-2 ' placeholder='Code Snippit' />
                    <Button type="submit">Add Code Snippit</Button>
                </form>
            </div>
        </div>
    )
}

export default newSnippit