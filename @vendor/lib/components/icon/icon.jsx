"use client";

export function Icons({ icon, style }) {
  switch (icon) {
    case "success":
      return (
        <svg
          style={style}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="50px"
          height="50px"
          fill="var(--icon-color)"
        >
          <g>
            <g>
              <path
                d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
              c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.046,216.341,216.341
              S375.275,472.341,256,472.341z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M373.451,166.965c-8.071-7.337-20.623-6.762-27.999,1.348L224.491,301.509l-58.438-59.409
              c-7.714-7.813-20.246-7.932-28.039-0.238c-7.813,7.674-7.932,20.226-0.238,28.039l73.151,74.361
              c3.748,3.807,8.824,5.929,14.138,5.929c0.119,0,0.258,0,0.377,0.02c5.473-0.119,10.629-2.459,14.297-6.504l135.059-148.722
              C382.156,186.854,381.561,174.322,373.451,166.965z"
              />
            </g>
          </g>
        </svg>
      );
    case "warn":
      return (
        <svg
          style={style}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="50px"
          height="50px"
          fill="var(--icon-color)"
        >
          <g>
            <g>
              <path
                d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256
              C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216
              c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877
              C276,137.831,267.046,128.877,256,128.877z"
              />
            </g>
          </g>
          <g>
            <g>
              <circle cx="256" cy="349.16" r="27" />
            </g>
          </g>
        </svg>
      );
    case "error":
      return (
        <svg
          style={style}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="50px"
          height="50px"
          fill="var(--icon-color)"
        >
          <g>
            <g>
              <path
                d="M256,0C114.508,0,0,114.497,0,256c0,141.493,114.497,256,256,256c141.492,0,256-114.497,256-256
              C512,114.507,397.503,0,256,0z M256,472c-119.384,0-216-96.607-216-216c0-119.385,96.607-216,216-216
              c119.384,0,216,96.607,216,216C472,375.385,375.393,472,256,472z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M343.586,315.302L284.284,256l59.302-59.302c7.81-7.81,7.811-20.473,0.001-28.284c-7.812-7.811-20.475-7.81-28.284,0
              L256,227.716l-59.303-59.302c-7.809-7.811-20.474-7.811-28.284,0c-7.81,7.811-7.81,20.474,0.001,28.284L227.716,256
              l-59.302,59.302c-7.811,7.811-7.812,20.474-0.001,28.284c7.813,7.812,20.476,7.809,28.284,0L256,284.284l59.303,59.302
              c7.808,7.81,20.473,7.811,28.284,0C351.398,335.775,351.397,323.112,343.586,315.302z"
              />
            </g>
          </g>
        </svg>
      );
    case "loading":
      return (
        <div className="p-4" style={style}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="15"
            viewBox="0 0 120 30"
            fill="var(--icon-color)"
          >
            <circle cx="15" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="60" cy="15" r="9" fillOpacity="0.3">
              <animate
                attributeName="r"
                from="9"
                to="9"
                begin="0s"
                dur="0.8s"
                values="9;15;9"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="0.5"
                to="0.5"
                begin="0s"
                dur="0.8s"
                values=".5;1;.5"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="105" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      );
    default:
      throw new Error("invalid icon {" + icon + ") for popup.");
  }
}
export function Icon({ icon }) {
  return (
    <div className={`icon icon-${icon}`}>
      <Icons icon={icon} />
    </div>
  );
}
