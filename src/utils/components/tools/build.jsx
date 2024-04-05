import components from "@/utils/components";

export function Build({ template = {} }) {   
  //get component and props;
  const { component = "", props = {} } = template;
  //get children;
  const { children = [] } = props;
  //get body to build;
  const Component = components[component];

  return (
    <>
      {Component && (
        <Component {...props}>
          {children.map((template, key) => (
            <Build template={template} key={key} />
          ))}
        </Component>
      )}
    </>
  );
}
