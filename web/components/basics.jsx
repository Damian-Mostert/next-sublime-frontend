import { Layout, Text, Banner, Form } from "@components";

import services from "@vendor/services";

const handleFormSubmit = (form) => {
  const service =
    services[form.onsubmit.split(".")[0]][form.onsubmit.split(".")[1]];
  return async (input) => {
    console.log(input);
    return service ? (await service(input, { fire: true }))?.success : false;
  };
};

function BannerSection({ data }) {
  return <Banner {...data} />;
}
BannerSection.configuration = {
  title: "Banner Section",
};

function TextSection({ data }) {
  return (
    <Layout>
      <Text {...data} />
    </Layout>
  );
}
TextSection.configuration = {
  title: "Text Section",
};
function TextSplitSection({ data }) {
  return (
    <Layout type={`split-${data.orientation}`}>
      <Text {...data.text[0]} />
      <Text {...data.text[1]} />
    </Layout>
  );
}
TextSplitSection.configuration = {
  title: "Text Split Section",
};
function TextBannerSplitSection({ data }) {
  return (
    <Layout type={`split-${data.orientation}`}>
      <Text {...data.text} />
      <Banner {...data.banner} />
    </Layout>
  );
}
TextBannerSplitSection.configuration = {
  title: "Text Banner Section",
};
function TextFormSplitSection({ data }) {
  return (
    <Layout type={`split`}>
      {data.orientation
        ? data.orientation == "left"
          ? [
              <Text key={0} {...data.text} />,
              Form.new(
                data.form.text,
                data.form.fields,
                handleFormSubmit(data.form),
                data.form.variant,
                data.form.successText
              ),
            ]
          : [
              Form.new(
                data.form.text,
                data.form.fields,
                handleFormSubmit(data.form),
                data.form.variant,
                data.form.successText
              ),
              <Text key={1} {...data.text} />,
            ]
        : [
            <Text key={0} {...data.text} />,
            Form.new(
              data.form.text,
              data.form.fields,
              handleFormSubmit(data.form),
              data.form.variant,
              data.form.successText
            ),
          ]}
    </Layout>
  );
}
TextFormSplitSection.configuration = {
  title: "Text Form Section",
};

function FormSplitSection({ data }) {
  return (
    <Layout
      type="split"
      className={`${
        (data[0].full || data[1].full) ?? "min-h-screen items-center"
      }`}
    >
      <div className="w-full h-full flex items-center justify-center">
        {Form.new(
          data[0].text,
          data[0].fields,
          handleFormSubmit(data[0]),
          data[0].variant,
          data[0].successText
        )}
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {Form.new(
          data[1].text,
          data[1].fields,
          handleFormSubmit(data[1]),
          data[1].variant,
          data[1].successText
        )}
      </div>
    </Layout>
  );
}
FormSplitSection.configuration = {
  title: "Form Split Section",
};

function FormSection({ data }) {
  return (
    <Layout
      type="center"
      className={`${data.full ?? "min-h-screen items-center"}`}
    >
      {Form.new(
        data.text,
        data.fields,
        handleFormSubmit(data),
        data.variant,
        data.successText
      )}
    </Layout>
  );
}
FormSection.configuration = {
  title: "Form Section",
};


export default {
  "banner-section": BannerSection,
  "text-section": TextSection,
  "text-split-section": TextSplitSection,
  "text-banner-split-section": TextBannerSplitSection,
  "text-form-split-section": TextFormSplitSection,
  "form-split-section": FormSplitSection,
  "form-section": FormSection,
};
