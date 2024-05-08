import { Lg } from "sublime-components";

export async function Viewer({ data, fields, preview }) {
  const outside = fields.filter((field) => field?.outside);
  return (
    <>
      <div className="w-full mt-4 flex overflow-hidden flex-wrap page:flex-nowrap">
        <div className="flex flex-wrap w-full page:pr-2">
          {fields
            .filter((field) => !field?.outside)
            .map((field, key) => {
              return (
                <>
                  <div className="w-full" key={key}>
                    {field?.detail(data?.[field?.key])}
                  </div>
                  <div className="w-full my-2 border-b border-primary" />
                </>
              );
            })}
        </div>
        {preview && (
          <div className="w-full page:pl-4" style={{ minHeight: "400px" }}>
            {preview}
          </div>
        )}
      </div>
      {outside.map((field, index) => {
        return <div key={index}>{field.detail(data)}</div>;
      })}
    </>
  );
}
