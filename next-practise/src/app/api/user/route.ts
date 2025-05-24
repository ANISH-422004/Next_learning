import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request : NextRequest) {
    const newUser = await prisma.user.create({
        data: {
            name: `RandomUser${Math.floor(Math.random() * 1000)}`,
            email: `user${Date.now()}@example.com`,
            password: "123456", // just for mock/testing
        }
    })

    return NextResponse.json({
        message: 'User created successfully',
        user: newUser,
    })
}
