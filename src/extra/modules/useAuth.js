'use client'

import useSWR from 'swr'
import axios from '@/lib/services/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

const routes = {
    user: '/api/user',
    login: '/api/login',
    register: '/api/register',
    redirectIfAuthenticated: '/user/login',
    forgotPassword: '/user/forgot-password',

    passwordReset: '/user/password-reset?reset=',
    onPasswordReset: '/user/password-reset',
}

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter();
    const params = useParams();
    const csrf = () => axios.get('/sanctum/csrf-cookie');


    const { data: user, error, mutate } = useSWR(routes.user, () =>
        axios
            .withHeader({
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            })
            .get(routes.user)
            .then(res => {
                return res.data;
            })
            .catch(error => {
                if (error.response.status !== 409) throw error
                router.push('/user/verify-email')
            }),
    )

    const register = async credentials => {
        await csrf()
        return await new Promise(Resolve => {
            axios
                .post(routes.register, credentials)
                .then(() => {
                    Resolve({ success: true })
                    mutate()
                })
                .catch(error => {
                    Resolve({ error: true, data: error.response.data.errors })
                })
        })
    }

    const login = async credentials => {
        await csrf()
        return await new Promise(Resolve => {
            axios
                .post(routes.login, credentials)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    Resolve({ success: true })
                    mutate()
                })
                .catch(error => {
                    Resolve({ error: true, data: error.response.data.errors })
                })
        })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post(routes.forgotPassword, { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post(routes.resetPassword, { token: params.token, ...props })
            .then(response =>
                router.push(
                    routes.onPasswordReset + btoa(response.data.status),
                ),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post(routes.resendEmailVerification)
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }
        localStorage.removeItem('token')

        window.location.pathname = routes.redirectIfAuthenticated
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(routes.redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(routes.redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
