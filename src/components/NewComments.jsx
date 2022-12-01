import React from 'react'
import { useEffect } from 'react'
import { useCreateCommentsMutation } from '../redux/reducers/commentAPI'

export default function Comments() {
    let  [createCommentRedux]  = useCreateCommentsMutation()
    let comment = {
        userId:'636d85930165bc10e61d7a44',
        showId:'63728141a8032917dee94c1c',
        date:'2022-11-11',
        comment:'i love this show, OMG'
    }
    /* useEffect(() => {
        createCommentRedux(comment).then((prueba)=>console.log(prueba))
    },{}) */
    
    return (
        <div>Comments</div>
    )
}
