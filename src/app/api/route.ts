import { NextApiRequest } from "next";
export const GET = (request: NextApiRequest) => {
    console.log(request)
    return new Response('Hello, Next.js!');
}