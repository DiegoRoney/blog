<div className="card-blog">
    {/* 1 */}
    <div className="card-blog-conteudo">
        <h5 className="card-blog-title">
             {post.frontMatter.title}
        </h5> 

        <p className="card-descricao">
             {post.frontMatter.description}
        </p>

        <p className="card-data">
             {post.frontMatter.date}
        </p>

    </div>

    {/* 2 */}
    <div className="card-blog-thmb">
    <Image
                  src={post.frontMatter.thumbnailUrl}
                  className=""
                  alt="thumbnail"
                  width={500}
                  height={200}
                  
                />
    </div>


</div>