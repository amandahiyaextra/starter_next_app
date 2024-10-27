import { middleware } from '@/app/(utils)/middleware';
import { NextResponse, NextRequest } from 'next/server'

export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page


export const GET = middleware(async (request: NextRequest) => {


    return NextResponse.json({ status: "ok", value: "test" })
})
