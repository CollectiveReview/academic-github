import { collection, doc, getDocs, orderBy, query, setDoc, startAt } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../firebase";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const reposRef = collection(db, "repos");

    await setDoc(doc(reposRef), {
        title: body.title,
        description: body.description,
        createdAt: body.createdAt,
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
export async function GET(request: NextRequest) {
    const reposRef = collection(db, "repos");
    const q = query(reposRef, orderBy("title"), startAt(20));
    const querySnapshot = await getDocs(q)

    const repos = querySnapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data()
        }
    ))
    // const now = Date.now()

    // const q = query(collection(db, "repos"), where("createdAt", ">=", now - 10 * DAY));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     const listrepos: Repo[] = []
    //     querySnapshot.forEach((doc) => {
    //         listrepos.push({
    //             id: doc.id,
    //             data: doc.data()
    //         })
    //     })
    // });
    return NextResponse.json(repos, { status: 200 })
}
