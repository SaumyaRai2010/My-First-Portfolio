import "./testimonials.scss";
export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Saumya is great to work with. We’ve used him on two projects for the MIT Libraries and both times he performed above and beyond expectations. I hope to work with him again in the future!",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Saumya is one of the best web developers I’ve worked with. He understands the technology, client relationships and I trust him with my most demanding projects. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Saumya’s commitment to his craft is evident in the consistent high quality of his work. His vast knowledge of CSS is ever-evolving and indispensable! He’s a team player that’s a pleasure to work with.",
        },
      ];
      return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=>(

               
                <div className={d.featured ? "card featured" : "card" }>
                    <div className="top">
                        <img src="assets/down.png" className="left" alt="" />
                        <img src={d.img} className='user' alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">{d.desc}
                      </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                 ))}
            </div>
        </div>
    )
}
