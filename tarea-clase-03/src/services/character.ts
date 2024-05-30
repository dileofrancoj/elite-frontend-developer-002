import { type AxiosError } from "axios"
import { FetchedCharacterProps } from "../types/Character"
import { axiosInstance } from "../config/axios"

type GetCharacterResult = Promise<FetchedCharacterProps | AxiosError>

export const getCharacters = async (): GetCharacterResult => {
    try {
        const response = await axiosInstance.get('/character')
        return response.data as FetchedCharacterProps
    } catch (error) {
        return error as AxiosError
    }

}