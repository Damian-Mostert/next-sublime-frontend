'use client'

import { Form, Popup } from '@/lib/components'

const variant = 'default'

const text = {
    title: {
        pre: 'Welcome back',
        text: 'Login to your',
        extra: 'Account',
    },
}

const handel = auth => async credentials => {
    Popup.fire({
        bg: 'blur',
        icon: 'loading',
    })
    let res = await auth.login({
        ...credentials,
    })
    console.log(res)
    if (!res.error_message) {
        Popup.fire({
            bg: 'blur',
            icon: 'success',
            text: {
                title: {
                    text: 'User logged in.',
                },
            },
            timer: 3000,
            canClose: true,
        })
    } else {
        Popup.fire({
            bg: 'blur',
            icon: 'error',
            text: {
                title: {
                    text: res.error_message,
                },
            },
            timer: 3000,
            canClose: true,
        })
    }
}

const fields = [
    {
        label: 'Email',
        size: 'half:md:full',
        type: 'email',
        name: 'email',
        errorMessage: 'Please enter your email',
        require: true,
    },
    {
        label: 'Password',
        name: 'password',
        size: 'half:md:full',
        type: 'password',
        errorMessage: 'No password, or password to weak',
        require: true,
    },
    {
        type: 'link',
        value: '/user/password-reset',
        label: 'forgot password?',
    },
    {
        name: 'remember',
        label: 'Remember me',
        type: 'boolean',
    },
]

export const Login = auth => Form.new(text, fields, handel(auth), variant)
