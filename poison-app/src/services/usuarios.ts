import { api } from './api'

export interface ClientResponse {
    id: string
    nome: string
    categoria: string
    senha: string
}

export interface ClientResponse {
    id: string
    nome: string
    categoria: string
    senha: string
}
export class Usuario {
    static async createUsuario(data: unknown) {
        try {
            const response = await api.post('/users', data)

            return response
        } catch (error: any) {
            return error.response
        }
    }

    static async updateUsuario(id: string, data: unknown) {
        try {
            const response = await api.put(`/users/${id}`, data)

            return response
        } catch (error: any) {
            return error.response
        }
    }

    static async fetchUsuario() {
        try {
            const response = await api.get('/users')
            return response.data
        } catch (error: any) {
            return null
        }
    }

    static async fetchOneUsuario(id: string) {
        try {
            const response = await api.get(`/users/${id}`)
            return response.data
        } catch (error: any) {
            return error.response
        }
    }

    static async removeUsuario(id: string) {
        try {
            const response = await api.delete(`/users/${id}`)

            return response.data
        } catch (error: any) {
            return error.response
        }
    }
}
