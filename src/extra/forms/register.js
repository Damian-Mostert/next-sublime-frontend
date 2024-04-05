'use client'

import { Form, Popup } from '@/lib/components'

const variant = 'default'

const text = {
    title: {
        align: 'left',
        pre: 'Are you new?',
        text: 'Register',
        extra: 'Today',
    },
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
    {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        require: true,
        value: 'Id rather not say',
        options: ['Male', 'Female', 'Id rather not say'],
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        require: true,
        errorMessage: 'Please enter your password',
    },
    {
        name: 'password_confirmation',
        label: 'Confirm password',
        type: 'password',
        require: true,
        errorMessage: 'Please enter your password',
    },
    {
        name: 'sendUpdates',
        size: 'half:md:full',
        label: 'Send me updates',
        type: 'boolean',
    },
    {
        name: 'readTsAndCs',
        label: 'I have read the terms & conditions.',
        type: 'boolean',
        variant: 'padded-boolean',
        require: true,
        errorMessage: 'You must read the terms and conditions',
    },
    /* {
        type: "g-re-captcha",
        errorMessage: "Please confirm that you are a human",
        require: true,
      }, */
]

const handel = auth => async credentials => {
    Popup.fire({
        bg: 'blur',
        icon: 'loading',
    })
    const res = await auth.register(credentials);
    if(res.success){
        Popup.fire({
            bg:"blur",
            icon:"success",
            text:{
                title:{
                    text:"User logged in."
                }
            },
            timer:3000,
            canClose:true,
        })
    }else{
        Popup.fire({
            bg:"blur",
            icon:"error",
            text:{
                title:{
                    text:"Failed to register user."
                },
                paragraphs: Object.keys(res.data).map(
                    key => key + ' : ' + res.data[key],
                ),
            },
            timer:3000,
            canClose:true,
        })
    }
}

export const Register = auth => Form.new(text, fields, handel(auth), variant)
