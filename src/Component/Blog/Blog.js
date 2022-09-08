import React from 'react'
import Card from "./Card"
import "./Blog.css"
import BlogApi from "./BlogApi"
import "../Portfolio/Portfolio.css"


const Blog = () => {
    return (
        <>
            <section className='portfolio blog' id="blog">
                <div className='container'>
                    <div className='heading text-center'>
                        <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Blog</h1>
                    </div>
                    <div className='content grid'>
                        {BlogApi.map((value, index) => {
                            return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} desc_one={value.desc_one} title_two={value.title_two} desc_two={value.desc_two} title_three={value.title_three} desc_three={value.desc_three} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
