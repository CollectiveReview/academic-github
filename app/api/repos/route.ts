import { PrismaClient } from "@prisma/client";
import { collection, getDocs, orderBy, query, startAt } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "../firebase";

const prisma = new PrismaClient()
const repoSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string()
})
export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = repoSchema.safeParse(body)
    if (!validation.success) return NextResponse.json("data you provided is not valid", { status: 400 })

    const repo = await prisma.repo.create({
        data: {
            title: body.title,
            description: body.description,
            createdAt: body.createdAt,
            // contributions: [],
            // dependencies: [],
            thumbnailURL: "",
            // users: [
            //     { uid: body.uid, avatarURL: body.avatarURL, permission: "admin" }
            // ]
        }
    },)

    return NextResponse.json(repo, { status: 201 })
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
