import { collection, doc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../firebase";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const reposRef = collection(db, "repos");

    await setDoc(doc(reposRef), {
        title: body.title,
        description: body.description,
        createdAt: null,
        contributions: [],
        dependencies: [],
        thumbnail: null,
        uid: null,
        visibility: "public",
        users: [
            { uid: body.uid, avatarURL: body.avatarURL, permission: "admin" }
        ]
    })

    return NextResponse.json("success", { status: 201 })
}