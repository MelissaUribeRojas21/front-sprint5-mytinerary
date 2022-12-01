import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../../api/url'

/* const createComment = createAsyncThunk("createCity", async (datos) => {
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } }
    try {
        const res = await axios.post(`${apiUrl}/api/cities`, datos.city , headers)

        if (res.data.id) {
            return {
                id: res.data.id,
                success: true,
                response: datos.city,
            }
        } else {
            return {
                success: false,
                messages: res.data.message,

            }
        }
    } catch (error) {
        return {
            success: false,
            response: 'Ocurrio un error'
        }
    }
}) */
const getComment = createAsyncThunk("getComment", async () => {
    /* let url = `${apiUrl}api/comments?showId=${id}`; */
    try {
        const res = await axios.get(`http://localhost:8000/api/comments?showId=63728141a8032917dee94c14`)
        console.log(res.data);
        return res.data.response,
    } catch (error) {
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})


const commentActions = {getComment};

export default commentActions