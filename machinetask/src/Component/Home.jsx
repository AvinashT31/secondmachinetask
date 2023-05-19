import React, { useState } from 'react'
import '../Styles/Home.css'

const Home = () => {

    const [dropdown, setdropdown] = useState(false);
    console.log(dropdown, "dropdown");

    function openinfo() {
        // alert("working");
        setdropdown(!dropdown);
    }

    return (
        <div id='homefullpage'>
            <div>
                <div>
                    <div id='homepage' onClick={openinfo}>
                        <p>Description</p>
                    </div>
                </div>
                {dropdown && (
                    <div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, doloribus similique quibusdam temporibus dicta repellat! Cumque eos maiores quis architecto sapiente rerum repellat quia? Aliquid sunt quas tenetur odit dolorem?
                                Officiis ducimus error corporis, non quibusdam quae libero voluptatibus molestias consequatur ex fugit ipsum, suscipit sint ratione quia porro nostrum distinctio veniam reiciendis hic incidunt, quis autem quam architecto? Aliquam?
                                Aperiam quia saepe exercitationem nihil quas error dignissimos, itaque modi fugit obcaecati perferendis facere magnam hic vero ipsa ullam sint quibusdam maxime quisquam? Necessitatibus enim molestias cupiditate cumque alias sint.
                                Pariatur assumenda iste, consequuntur, neque quia sequi asperiores velit voluptatem voluptates blanditiis itaque? Et, dolorem magnam necessitatibus unde similique debitis at? Nobis suscipit quaerat sequi a expedita necessitatibus ad eligendi.</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Home

