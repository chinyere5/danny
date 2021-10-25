import React from 'react'



const cards = [
    {
        img: "../../public/img/logo6.png",
        title: "Awesome Teachers ",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u."

    },
    {
        img: "../Images/logo6.png",
        title: "Awesome Teachers ",
        desc: " Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u."

    },
    {
        img: "../Images/logo6.png",
        title: "Awesome Teachers ",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u."

    },
    {
        img: "../Images/logo6.png",
        title: "Awesome Teachers ",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ukkf tempor incididunt u."

    }




]

const Features = () => {
    
    return (

    <div className="header">
       
       <div className="text-center text-white">
       <h2> Our Features </h2>
       <p> Dinny Green International School is nurtured in grace and truth, raising green, <br />flourishing and successful children.
    </p>
       </div>
    
<div className="header1 d-flex text-white">
{cards.map((card, i) => {
    return(
        <div className="flex p-2" key={i}>
            <img src={card.img} alt="" />
            <p>{ card.title}</p>
            <p>{card.desc}</p>
        </div>
    )
})}

</div>

        </div>
    )
}

export default Features
