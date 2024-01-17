import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { repoSchema } from "../../../lib/repoSchema";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = repoSchema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.format(), { status: 400 })

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
