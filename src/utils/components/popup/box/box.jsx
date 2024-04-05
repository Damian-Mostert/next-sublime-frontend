'use client'

import { Icons } from './icons'

import { Button, Text } from '@/utils/components'

//default popup box
export function PopupBox({
    icon,
    text,
    cancelButton,
    confirmButton,
    Resolve,
    PopUpID,
}) {
    return (
        <div
            className={`
        popup
        ${!text && !confirmButton && !cancelButton ? 'popup-no-paragraphs' : ''}
      `}
            id={PopUpID}>
            {icon && (
                <div
                    className={`w-full flex justify-center popup-icon popup-icon-${icon}`}>
                    <Icons icon={icon} />
                </div>
            )}
            {text && (
                <Text
                    className={`${icon ? 'pt-4' : ''} ${
                        cancelButton || confirmButton ? 'pb-4' : ''
                    }`}
                    {...text}
                />
            )}

            {(cancelButton || confirmButton) && (
                <>
                    <div
                        className={`w-full flex justify-center`}
                        style={{ paddingTop: text || icon ? '1rem' : '' }}>
                        {cancelButton && (
                            <>
                                <div className={`m-auto`}>
                                    <Button
                                        onClick={() => {
                                            Resolve({ canceled: true })
                                        }}
                                        label={cancelButton.label || 'Cancel'}
                                        variant={cancelButton.variant}
                                    />
                                </div>
                            </>
                        )}
                        {confirmButton && (
                            <>
                                <div className="m-auto">
                                    <Button
                                        onClick={() => {
                                            Resolve({ confirmed: true })
                                        }}
                                        variant={confirmButton.variant}
                                        label={confirmButton.label || 'Confirm'}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
