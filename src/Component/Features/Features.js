import React from 'react'
import './Features.css'
import Card from './Card'
import data from './FeaturesApi'

const Features = () => {
    return (
        <>
            <section className='features top' id="features">
                <div className='container'>
                    <div className='heading'>
                        <h4>Features</h4>
                        <h1>What I Do</h1>
                    </div>
                    <div className='content grid'>
                        {data.map((value, index) => {
                            return <Card key={index} image={value.image} title={value.title} desc={value.desc} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
