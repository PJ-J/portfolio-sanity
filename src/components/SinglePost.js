import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from "../client"

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  return (
    <div>
    <h1>SinglePost</h1>
    </div>
  )
}

export default SinglePost