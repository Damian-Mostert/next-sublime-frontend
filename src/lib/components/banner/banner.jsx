import { web, Img, Parallax, Slider } from "..";

export function Banner({ slider, image, video, parallax, height }) {
  const Body = () => {
    return (
      <div className="overflow-auto w-full relative" style={{ height }}>
        {image && (
          <Img
            fill
            {...image}
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        )}
        {slider && (
          <Slider
            variant={slider.variant}
            config={{
              ...slider.config,
            }}
            slides={slider.slides.map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ height }} className="w-full">
                    <Img
                      fill={true}
                      {...item}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              );
            })}
            className="w-full h-full"
          />
        )}
        {video && <video {...video} className="w-full h-full" />}
      </div>
    );
  };
  return parallax ? (
    <Parallax height={height}>
      <div style={{ width: "100%", height: "150%", marginTop: "-10%" }}>
        <Body />
      </div>
    </Parallax>
  ) : (
    <div className="w-full relative" style={{ height }}>
      <Body />
    </div>
  );
}
