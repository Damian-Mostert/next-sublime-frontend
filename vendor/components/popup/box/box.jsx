"use client";

import { Icon } from "@components";

import { Button, Text } from "@vendor/components";

//default popup box
export function PopupBox({
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
        ${!text && !confirmButton && !cancelButton ? "popup-no-paragraphs" : ""}
      `}
      id={PopUpID}
    >
      {text && (
        <Text
          className={`${
            cancelButton || confirmButton ? "pb-4" : ""
          }`}
          {...text}
        />
      )}

      {(cancelButton || confirmButton) && (
        <>
          <div
            className={`w-full flex justify-center`}
            style={{ paddingTop: text || icon ? "1rem" : "" }}
          >
            {cancelButton && (
              <>
                <div className={`m-auto`}>
                  <Button
                    onClick={() => {
                      Resolve({ canceled: true });
                    }}
                    label={cancelButton.label || "Cancel"}
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
                      Resolve({ confirmed: true });
                    }}
                    variant={confirmButton.variant}
                    label={confirmButton.label || "Confirm"}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
