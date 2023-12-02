import React from 'react';

const PostPage = async () => {

    const res = await fetch("http://localhost:5000/post");
    const posts = await res.json();

    // console.log(posts);

    return (
        <div className='w-full'>
            <h1>Total Post: {posts.length}</h1>
            {
                posts.map(post => <div key={post.id} className="text-black card w-[50%] mx-auto my-5 bg-yellow-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Lilkes {post.like_count}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See more</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PostPage;