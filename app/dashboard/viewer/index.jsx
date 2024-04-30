import { Lg } from "@components/tools/Md&Lg";

export async function Viewer({ data, fields, preview }) {
  const outside = fields.filter((field) => field.outside);
  return (
    <>
      <div className="w-full mt-4 flex overflow-hidden">
        <div className="flex flex-wrap w-full">
          {fields.filter((field) => !field.outside).map((field, key) => {
            return (
              <div className="w-full pb-4" key={key}>
                {field.detail(data[field.key])}
              </div>
            );
          })}
        </div>
        <Lg>{preview && <div className="w-full">{preview}</div>}</Lg>
      </div>
      {outside.map((field, index) => {
        return <div key={index}>{field.detail(data)}</div>;
      })}
    </>
  );
}
