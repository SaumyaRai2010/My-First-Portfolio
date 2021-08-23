import "./works.scss"

export default function Works() {
    return (
        <div className='works' id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    

                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
