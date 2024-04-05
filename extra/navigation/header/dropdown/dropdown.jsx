import { useState } from 'react'
import { Button } from '@/lib/components'

export function DropDown({ label, links, pathname }) {
    const [show, setShow] = useState(false)
    return (
        <div
            className="w-full header-title relative h-full flex items-center"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            <Button variant="header" label={label}/>
            {show && (
                <div className="absolute top-full left-0 w-full bg-gray-300 flex flex-wrap overflow-hidden rounded-b-xl shadow-2xl py-2">
                    {links.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                href={item.href}
                                variant={`header${
                                    pathname == item.href ? '-active' : ''
                                }`}
                                className={`w-full text-center `}
                                label={item.label}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
