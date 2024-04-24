import components from "..";

export function Build({ template = {} }) {   
  //get component and props;
  const { component = "", props = {} } = template;
  //get children;
  const { children = [] } = props;
  //get body to web;
  const Component = components[component];

  return (
    <>
      {Component && (
        <Component {...props}>
          {children.map((template, key) => (
            <web template={template} key={key} />
          ))}
        </Component>
      )}
    </>
  );
}
