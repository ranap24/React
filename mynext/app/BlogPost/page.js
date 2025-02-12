import Link from 'next/link';

export default function blogPost()
{
    return (
        <main>
        <h2>BlogPosts</h2>
        <p><Link href = "/BlogPost/post-1">Post-1</Link></p>
        <p><Link href = "/BlogPost/post-2">Post-2</Link></p>
        </main>
    );
}