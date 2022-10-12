import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'


export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <div className="mt-5">
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>

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
    <div className="card-blog-thumbnail">
        <Image
            src={post.frontMatter.thumbnailUrl}
            className=""
            alt="thumbnail"
            width={200}
            height={170}

        />
    </div>


</div>
        </Link>
      ))}
    </div>
  )
}
