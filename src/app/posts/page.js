import Link from 'next/link';
import styles from "./Posts.module.css"

const PostPage = async () => {

    const res = await fetch("http://localhost:5000/post", {
        cache: "no-store"
    });
    const posts = await res.json();

    // console.log(posts);

    return (
        <div className='w-full'>
            <h1 className={styles.header_text}>Total Post: {posts.length}</h1>
            {
                posts.map(post => <div key={post.id} className="text-black card w-[50%] mx-auto my-5 bg-yellow-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Likes: {post.like_count}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/posts/${post.id}`}><button className="btn btn-primary">See more</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PostPage;