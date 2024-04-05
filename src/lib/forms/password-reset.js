'use client'

import { Form, Popup } from '@/utils/components'

const variant = 'default'

const text = {
    title: {
        pre: 'Forgot password?',
        text: 'Reset',
        extra: 'Password',
    },
}

const handel = auth => async credentials => {
    Popup.fire({
        bg: 'blur',
        icon: 'loading',
    })
    auth.login({
        ...credentials,
        setErrors() {
            Popup.close()
        },
        setStatus() {
            Popup.close()
        },
    })
}

const fields = [
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        errorMessage: 'Please enter your email',
        require: true,
    }
]

export const Password = auth => Form.new(text, fields, handel(auth), variant)
