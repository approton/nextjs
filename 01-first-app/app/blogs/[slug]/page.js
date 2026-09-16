import React from 'react'

export default async function Page({ params }) {
    const { slug } = await params

    return <main>
        <h1>Blog Post - {slug}</h1>
    </main>
}