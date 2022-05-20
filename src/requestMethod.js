import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODQ4OWUxYTI1ODExNTdjMGM3YjhjYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzA1OTQ2NCwiZXhwIjoxNjUzMzE4NjY0fQ.84rXeNZCAvrcOQF7xLPgdc_15KfdfA39-uRmz2TcDKw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});