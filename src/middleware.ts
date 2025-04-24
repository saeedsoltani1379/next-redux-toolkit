import { NextRequest, NextResponse } from "next/server";



export function middleware(request:NextRequest){
    const token = request.cookies.get("token")
    if(token){
        return NextResponse.next()
    }
    else{
        const url = new URL("/login",request.url)
        return NextResponse.redirect(url.toString())
    }
}

export const config = {
    matcher:["/dashboard/:path*"]
}