"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id,
        },
        data: {
            code,

        },
    })

    redirect(`/snippit/${id}`)
}