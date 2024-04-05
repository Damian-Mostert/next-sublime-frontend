'use client'

import { Form, Popup } from '@/utils/components'

const variant = 'default'

const text = {
    title: {
        align: 'left',
        pre: 'Want to contact us?',
        text: 'Contact us',
        extra: 'today',
    },
    paragraphs:[
        'Please fill out the form bellow:'
    ]
}

const fields = [
    {
        name: 'name',
        label: 'Name',
        type: 'name',
        size: 'half:md:full',
        require: true,
        errorMessage: 'Please enter your name',
    },
    {
        name: 'surname',
        label: 'Surname',
        type: 'name',
        size: 'half:md:full',
        require: true,
        errorMessage: 'Please enter your name',
    },
    {
        name: 'email',
        label: 'Email',
        size: 'half:md:full',
        type: 'email',
        require: true,
        errorMessage: 'Please enter your email',
    },
    {
        name: 'cell',
        label: 'Cell',
        size: 'half:md:full',
        type: 'cell',
        require: true,
        errorMessage: 'Please enter your email',
    },

  
]

const handel = auth => credentials => {
    console.log(credentials)
    Popup.fire({
        bg: 'blur',
        icon: 'loading',
    })
    auth.register({
        ...credentials,
        setErrors() {
            Popup.close()
        },
        setStatus() {
            Popup.close()
        },
    })
}

export const Contact = auth => Form.new(text, fields, handel(auth), variant)
