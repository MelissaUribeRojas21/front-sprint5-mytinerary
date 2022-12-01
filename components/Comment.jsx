import React from 'react'
import { useEffect, useState } from 'react'
import { useGetShowCommentsMutation } from '../redux/reducers/commentAPI'

export default function Comment(props) {
    let id = props.showId
    let [getShowCommentsRedux] = useGetShowCommentsMutation()
    let [comment, setComment] = useState()

    /* let id = '63728141a8032917dee94c1c' */
    useEffect(() => {
        getShowCommentsRedux(id).then((e)=>setComment(e.data.response))
    }, [])
    console.log(comment)
    return (
        <div>Comment</div>
    )
}
