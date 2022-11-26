
import { blogImage,image } from "../../../component/access/image"
import './blogHome.css'
import '../../../component/globalstyte/global.css'
function BlogHome(){

    return (
        <div className="blog-Home" style={{
            background: `url(${image.backgroundBlog})`
        }}
            id="to-blog"        
        >
            <div className="blog-Box grid wide">
                <div className="row jtfCenter">
                    <div className="blog-Image-Box dflex aliCenter col l-8 m-12 c-12 ">
                        <img className="blog-image" alt="img blog" src={blogImage[0].src}  />
                    </div>
                    <div className="dflex aliCenter jtfSpRight col l-4 m-12 c-12 ">
                        <div className={`blog-Content-${blogImage[0].id}`}>
                            <h4 className="blog-Content-Title">{blogImage[0].heading}</h4>
                            <h6 className="blog-Context">{blogImage[0].title}</h6>
                            <p className="blog-Content-Body">{blogImage[0].des}</p>
                        </div>
                    </div>
                </div>
                <div className="row padding-70 jtfCenter">
                    <div className="blog-Image-Box dflex aliCenter col l-4 m-12 c-12 ">
                        <div className={`blog-Content-${blogImage[1].id}`}>
                            <h4 className="blog-Content-Title">{blogImage[1].heading}</h4>
                            <h6 className="blog-Context">{blogImage[1].title}</h6>
                            <p className="blog-Content-Body">{blogImage[1].des}</p>
                        </div>
                    </div>
                    <div className=" dflex aliCenter jtfSpRight col l-8 m-12 c-12">
                        <img className="blog-image" alt="img blog" src={blogImage[1].src}  />
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default BlogHome