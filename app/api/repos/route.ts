import { collection, doc, getDoc, limitToLast, setDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const reposRef = collection(db, "repos");

    await setDoc(doc(reposRef), {
        title: body.title,
        description: body.description,
        owner: "you",
    })

    return NextResponse.json("success", { status: 201 })
}