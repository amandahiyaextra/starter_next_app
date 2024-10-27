import { NextResponse, NextRequest } from 'next/server';

export const middleware = (handler: (req: NextRequest) => Promise<Response>) => async (req: NextRequest, res: NextResponse) => {
    try {
        let response = await handler(req);

        return response;
    } catch (e) {
        const error = e as Error;
        console.log("error: ", error.message || error);
        return NextResponse.json({ status: "error", value: "error" });
    }
}