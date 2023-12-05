import { collection, doc, getDoc, limitToLast, setDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const citiesRef = collection(db, "repos");

    console.log(body)
    const docRef = await setDoc(doc(citiesRef, "test_repo"), {
        state: body.state
    })
    return NextResponse.json(docRef, { status: 201 })
}

export async function GET() {
    const citiesRef = collection(db, "repos");

    const q = query(citiesRef, limitToLast(1));
    const querySnapshot = await getDocs(q)

    const res = querySnapshot.docs.map(doc => (
        {
            id: doc.id,
            data: doc.data()
        }
    ))
    return NextResponse.json(res)
}