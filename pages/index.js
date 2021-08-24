import Head from 'next/head'
import Posts from '../components/Posts';

export default function Home({ posts }) {
    return (
        <div className="">
            <Head>
                <title>Task</title>
                <meta name="description" content="Pride places coding challenge" />
            </Head>
            <Posts posts={posts} />
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=6`);
    const posts = await response.json();

    return {
        props: {
            posts
        }
    };
}