import { NextResponse } from "next/server";

export async function  POST(req){

    const request = await req.json();

    return NextResponse.json({ message: request.name }, { status: 400 });

}