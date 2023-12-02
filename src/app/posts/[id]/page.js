import React from 'react';

export async function generateStaticParams() {

    const res = await fetch("http://localhost:5000/post");
    const posts = await res.json();
    const ids = posts.map(post => {
        return {
            id: post.id + "",
        };
    })
    return ids
    // return [{ id: "1" }, { id: "2" }];
}

const DetailsPage = async ({ params }) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/post/${params.id}`)
    const post = await res.json();
    console.log(post);
    return (
        <div>
            <h1>Post Detail page</h1>
            <div key={post.id} className="text-black card w-[50%] mx-auto my-5 bg-yellow-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Likes: {post.like_count}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;