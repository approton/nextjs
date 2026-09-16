import Link from "next/link";

export default function BlogPage() {
    return <main>
        <h1>Blog Posts</h1>
        <p>
            <Link href="/blogs/post-1">Post-1</Link>
        </p>
        <p>
            <Link href="/blogs/post-1">Post-1</Link>
        </p>
    </main>
}