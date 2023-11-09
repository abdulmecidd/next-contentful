import { Helmet } from 'react-helmet'
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const { title, author, date, rating, metaDescription, image, url } =
    post.fields

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={metaDescription} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={image[0].fields.file.url} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='article' />
        <link rel='canonical' href={`http://www.example.com/${url}`} />
      </Helmet>
      <h2>{title}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
        {/* <Avatar name={author.fields.name} picture={author.fields.picture} /> */}
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={image[0].fields.file.url}
          width={image[0].fields.file.details.image.width}
          height={image[0].fields.file.details.image.height}
        />
        <div>Rating Value: {rating}</div>
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
    </>
  )
}

export default PostHeader
