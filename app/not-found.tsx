'use client';

import { useRouter } from 'next/navigation';

import { BaseButton } from '@/components/common/button/BaseButton';

export default function Error() {
  const router = useRouter();

  return (
    <div
      className={'w-dvw h-dvh bg-background-100 font-en flex flex-col items-center justify-center'}
    >
      <div>
        <svg
          className={`animated w-96`}
          id="freepik_stories-404-error"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {
              '@keyframes floating{0%,to{opacity:1;transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes zoomIn{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}svg#freepik_stories-404-error:not(.animated) .animable{opacity:0}svg#freepik_stories-404-error.animated #freepik--404--inject-14{animation:1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomIn,1.5s Infinite linear floating;animation-delay:0s,1s}svg#freepik_stories-404-error.animated #freepik--speech-bubble--inject-14{animation:6s Infinite linear floating;animation-delay:0s}'
            }
          </style>
          <g
            className="animable animator-active"
            id="freepik--Floor--inject-14"
            style={{
              transformOrigin: '250.56px 365.12px',
            }}
          >
            <ellipse
              className="animable"
              cx={250.56}
              cy={365.12}
              fill="#f5f5f5"
              id="freepik--floor--inject-14"
              rx={240.31}
              ry={124.36}
              style={{
                transformOrigin: '250.56px 365.12px',
              }}
            />
          </g>
          <g
            className="animable"
            id="freepik--Clouds--inject-14"
            style={{
              transformOrigin: '102.79px 67.1951px',
              animation: '1.5s Infinite linear floating',
              animationDelay: '0s',
            }}
          >
            <g
              className="animable"
              id="freepik--clouds--inject-14"
              style={{
                transformOrigin: '102.79px 67.1951px',
              }}
            >
              <path
                className="animable"
                d="M106.08 45.13l-9.18 5.3c0-.41.08-.81.08-1.21v-2.66c0-4.73-3.33-6.65-7.42-4.28a14.14 14.14 0 00-4.42 4.25c-.68-6-5.34-8.17-11-4.89C68 45.17 63 53.78 63 60.86v4a10.5 10.5 0 001 4.59l-7.63 4.4A9.09 9.09 0 0052.23 81c0 2.62 1.84 3.68 4.11 2.37l49.74-28.71a9.11 9.11 0 004.11-7.13c0-2.64-1.84-3.71-4.11-2.4z"
                fill="#ebebeb"
                id="ely0tbjnu18x"
                style={{
                  transformOrigin: '81.21px 62.0218px',
                }}
              />
              <path
                className="animable"
                d="M150.24 65l-6.93 4a7.22 7.22 0 00.06-.92v-2c0-3.57-2.5-5-5.6-3.23a10.78 10.78 0 00-3.33 3.21c-.51-4.49-4-6.16-8.31-3.69-4.63 2.67-8.38 9.16-8.38 14.51v3a8 8 0 00.71 3.48l-5.75 3.32a6.86 6.86 0 00-3.11 5.38c0 2 1.39 2.78 3.11 1.79l37.53-21.67a6.86 6.86 0 003.11-5.38c0-1.97-1.35-2.8-3.11-1.8z"
                fill="#ebebeb"
                id="elm4gh02p9ac"
                style={{
                  transformOrigin: '131.475px 77.7526px',
                }}
              />
            </g>
          </g>
          <g
            className="animable"
            id="freepik--Shadows--inject-14"
            style={{
              transformOrigin: '240.649px 362.75px',
            }}
          >
            <ellipse
              className="animable"
              cx={398.11}
              cy={403.67}
              fill="#e0e0e0"
              id="freepik--Shadow--inject-14"
              rx={49.29}
              ry={28.46}
              style={{
                transformOrigin: '398.11px 403.67px',
              }}
            />
            <path
              className="animable"
              d="M79.49 431.39l-43.74-25.26c-2.47-1.42-2.47-3.73 0-5.15l244.76-141.15a9.89 9.89 0 018.93 0l43.75 25.26c2.46 1.42 2.46 3.73 0 5.15L88.42 431.39a9.89 9.89 0 01-8.93 0z"
              fill="#e0e0e0"
              id="freepik--shadow--inject-14"
              style={{
                transformOrigin: '184.466px 345.61px',
              }}
            />
            <path
              className="animable"
              d="M314.39 341.39l-5.39-3.14c-12.35-7.13-31.85-7.48-43.46-.78l-20.36 11.73a1.5 1.5 0 101.5 2.6L267 340.07c10.78-6.23 28.94-5.88 40.46.77l5.44 3.15c5.3 3.06 8.22 7 8.22 11.2s-2.92 8.14-8.22 11.2l-74.49 43c-11.53 6.66-30.28 6.65-41.81 0l-21.7-12.51c-12.35-7.13-32.45-7.13-44.8 0l-5.44 3.12c-6.53 3.77-10.13 8.79-10.13 14.12 0 4.92 3.12 9.43 8.79 12.7l19.42 11.22-8 4.71c-3.65 2.15-3.63 5.64 0 7.76l14.65 8.49a.66.66 0 010 1.25l-1.22.69c-.6.34-.6.9 0 1.25l1.89 1.09a2.37 2.37 0 002.17 0l6.62-3.8a2.44 2.44 0 012.17 0l12 7a2.41 2.41 0 002.16 0l1.9-1.1c.6-.34.6-.9 0-1.25l-12-7c-.6-.35-.6-.91 0-1.25l4.62-2.67a2.35 2.35 0 012.16 0l12.06 6.95a2.35 2.35 0 002.16 0L188 459a.66.66 0 000-1.25l-12-7a.66.66 0 010-1.25l6-3.44a.66.66 0 000-1.25l-1.9-1.09a2.37 2.37 0 00-2.17 0l-1.89 1.09a2.44 2.44 0 01-2.17 0l-18.53-10.7a6.54 6.54 0 00-5.95 0l-3.69 2.17a1.65 1.65 0 00-.46-.41l-20.31-11.72c-4.7-2.72-7.29-6.3-7.29-10.11 0-4.16 3.15-8.36 8.63-11.52l5.44-3.15c11.53-6.65 30.28-6.65 41.8 0L195.09 412c12.36 7.13 32.45 7.13 44.81 0l74.49-43c6.27-3.62 9.72-8.52 9.72-13.8s-3.45-10.2-9.72-13.81z"
              fill="#e0e0e0"
              id="freepik--shadow--inject-14"
              style={{
                transformOrigin: '219.32px 399.7px',
              }}
            />
          </g>
          <g
            className="animable"
            id="freepik--Plant--inject-14"
            style={{
              transformOrigin: '438.149px 374.297px',
            }}
          >
            <g
              className="animable"
              id="freepik--Plants--inject-14"
              style={{
                transformOrigin: '438.149px 374.297px',
              }}
            >
              <path
                className="animable"
                d="M416.43 402.36c-.39-19.29 7.18-36.72 13.66-45.3s17.35-17 24.91-14.6c7 2.2 6.53 11.37-1.77 17.67S432.42 374.39 429 385l-8.38 19.48z"
                fill="#739bff"
                id="elel8jk9wkhm6"
                style={{
                  transformOrigin: '438.149px 373.262px',
                }}
              />
              <g id="elqw84xrouo3">
                <path
                  className="animable"
                  d="M416.43 402.36c-.39-19.29 7.18-36.72 13.66-45.3s17.35-17 24.91-14.6c7 2.2 6.53 11.37-1.77 17.67S432.42 374.39 429 385l-8.38 19.48z"
                  id="elgdarbiekig9"
                  opacity={0.15}
                  style={{
                    transformOrigin: '438.149px 373.262px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M418.73 400.52a.48.48 0 00.41-.4c1.8-10.68 5.38-23 11.46-32.72 6.54-10.44 16-16.85 21.54-19.06a.47.47 0 00.26-.61.47.47 0 00-.62-.26c-5.63 2.26-15.37 8.91-22.07 19.63-6.11 9.76-9.69 22.13-11.5 32.87a.47.47 0 00.39.54z"
                fill="#fff"
                id="elqysmpws6cdb"
                style={{
                  transformOrigin: '435.319px 373.976px',
                }}
              />
              <path
                className="animable"
                d="M423.4 406.55c.94-3.66 5.22-9.78 12.26-14.93 7.79-5.69 17.77-8.48 20-12.81 2.65-5.2-1.8-9.92-9.93-8.69s-23.36 12.95-26.49 34z"
                fill="#739bff"
                id="el53bslqm9jmo"
                style={{
                  transformOrigin: '437.833px 388.236px',
                }}
              />
              <path
                className="animable"
                d="M421.72 402.78a.47.47 0 00.4-.32c6.25-19.09 20.49-26.12 27.15-27.17a.47.47 0 10-.15-.93c-7.36 1.16-21.52 8.32-27.9 27.8a.48.48 0 00.3.6.47.47 0 00.2.02z"
                fill="#fff"
                id="ele2bob3xvk9s"
                style={{
                  transformOrigin: '435.432px 388.569px',
                }}
              />
            </g>
          </g>
          <g
            className="animable"
            id="freepik--Device--inject-14"
            style={{
              transformOrigin: '192.78px 237.653px',
            }}
          >
            <g
              className="animable"
              id="freepik--Plug--inject-14"
              style={{
                transformOrigin: '219.32px 394.767px',
              }}
            >
              <path
                className="animable"
                d="M144.38 434.11a1.53 1.53 0 01-.75-.2l-20.31-11.73c-5.67-3.27-8.79-7.78-8.79-12.7 0-5.34 3.6-10.35 10.13-14.12l5.44-3.15c12.35-7.13 32.45-7.13 44.8 0l21.69 12.53c11.53 6.65 30.28 6.65 41.81 0l74.49-43c5.3-3.06 8.22-7 8.22-11.21s-2.92-8.14-8.22-11.2l-5.44-3.14c-11.53-6.65-29.68-7-40.46-.77l-20.31 11.72a1.5 1.5 0 01-1.5-2.6l20.31-11.72c11.61-6.71 31.11-6.36 43.46.77l5.44 3.15c6.27 3.61 9.72 8.51 9.72 13.79s-3.45 10.19-9.72 13.8l-74.49 43c-12.36 7.14-32.45 7.14-44.81 0l-21.69-12.52c-11.52-6.65-30.27-6.65-41.8 0l-5.44 3.19c-5.48 3.17-8.63 7.37-8.63 11.53 0 3.8 2.59 7.39 7.29 10.1l20.31 11.73a1.5 1.5 0 01-.75 2.8z"
                fill="#37474f"
                id="elch9xc6dscpi"
                style={{
                  transformOrigin: '219.32px 381.083px',
                }}
              />
              <path
                className="animable"
                d="M131.76 437.36v1.73a9.59 9.59 0 004.33 7.5l16 9.22 16.24-9.38v-14.07l-15.78-7.28a10.81 10.81 0 00-8.87.4l-7.59 4.38a9.58 9.58 0 00-4.33 7.5z"
                fill="#37474f"
                id="elbnkr6ybzk4"
                style={{
                  transformOrigin: '150.045px 440.063px',
                }}
              />
              <path
                className="animable"
                d="M152.55 425.08a10.81 10.81 0 00-8.87.4l-7.59 4.38c-2.39 1.38-2.29 3.44.21 4.6l15.77 7.28 16.26-9.38z"
                fill="#455a64"
                id="elzs695fj6ba"
                style={{
                  transformOrigin: '151.345px 433.028px',
                }}
              />
              <g id="elclpzeqmam6k">
                <path
                  className="animable"
                  d="M150.54 438.35a4.78 4.78 0 00-2.16 3.75v11.58l3.7 2.13 16.24-9.38v-14.07l-4.12-1.9z"
                  id="elnvy83ivkjk"
                  opacity={0.1}
                  style={{
                    transformOrigin: '158.35px 443.135px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M169.71 429.94a1.53 1.53 0 00-1.52.15l-16 9.23a4.78 4.78 0 00-2.17 3.75v13.76a1.51 1.51 0 00.64 1.4l2 1.17a1.5 1.5 0 001.53-.15l16-9.22a4.8 4.8 0 002.16-3.75v-13.77a1.54 1.54 0 00-.63-1.4z"
                fill="#37474f"
                id="el8mpgw2hfhcn"
                style={{
                  transformOrigin: '161.185px 444.674px',
                }}
              />
              <path
                className="animable"
                d="M154.24 440.49l16-9.23c1.19-.69 2.16-.13 2.16 1.25v13.77a4.8 4.8 0 01-2.16 3.75l-16 9.22c-1.2.69-2.17.13-2.17-1.25v-13.76a4.78 4.78 0 012.17-3.75z"
                fill="#455a64"
                id="el7snahtl0x1t"
                style={{
                  transformOrigin: '162.235px 445.255px',
                }}
              />
              <path
                className="animable"
                d="M170.79 450.89l-13.22-7.63-1.43.83v9.38l13.21 7.63a2.14 2.14 0 002.15.2l1.44-.83a2.1 2.1 0 00.88-2v-2.38a6.69 6.69 0 00-3.03-5.2zm-2.43 2.51a4.47 4.47 0 012 3.51 2.38 2.38 0 01-.07.56 2.46 2.46 0 01-.52-.21 4.51 4.51 0 01-2-3.52 2.47 2.47 0 01.07-.57 2.13 2.13 0 01.52.23z"
                fill="#739bff"
                id="elh13jvgbqetg"
                style={{
                  transformOrigin: '164.989px 452.38px',
                }}
              />
              <g id="elnmy8u8523v">
                <path
                  className="animable"
                  d="M170.79 450.89l-13.22-7.63-1.43.83 13.21 7.63a6.69 6.69 0 013 5.25v2.38a2.09 2.09 0 01-.95 2h.07l1.44-.84a2.09 2.09 0 00.88-2v-2.38a6.72 6.72 0 00-3-5.24z"
                  fill="#fff"
                  id="el8ojcmbhsf9"
                  opacity={0.85}
                  style={{
                    transformOrigin: '164.975px 452.305px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M173.82 456.14v2.38a2.09 2.09 0 01-.88 2l-1.44.84h-.06a2.09 2.09 0 00.94-2V457a6.21 6.21 0 00-.89-3l1.44-.83a6.18 6.18 0 01.89 2.97z"
                fill="#739bff"
                id="elmu5gupequy"
                style={{
                  transformOrigin: '172.64px 457.265px',
                }}
              />
              <g id="el9v93cbswcj">
                <path
                  className="animable"
                  d="M173.82 456.14v2.38a2.09 2.09 0 01-.88 2l-1.44.84h-.06a2.09 2.09 0 00.94-2V457a6.21 6.21 0 00-.89-3l1.44-.83a6.18 6.18 0 01.89 2.97z"
                  fill="#fff"
                  id="elyk9k962qu9"
                  opacity={0.6}
                  style={{
                    transformOrigin: '172.64px 457.265px',
                  }}
                />
              </g>
              <g id="elg9pe26sh7o">
                <path
                  className="animable"
                  d="M173.82 456.14v2.38a2.09 2.09 0 01-.88 2l-1.44.84h-.06a2.09 2.09 0 00.94-2V457a6.21 6.21 0 00-.89-3l1.44-.83a6.18 6.18 0 01.89 2.97z"
                  id="elrmibiem5ol8"
                  opacity={0.05}
                  style={{
                    transformOrigin: '172.64px 457.265px',
                  }}
                />
              </g>
              <g id="elzefa81s8ofh">
                <path
                  className="animable"
                  d="M167.77 453.74a2.4 2.4 0 01.07-.57c-.87-.24-1.51.31-1.51 1.4a4.49 4.49 0 002 3.52c.94.55 1.74.26 2-.62a1.72 1.72 0 01-.52-.21 4.49 4.49 0 01-2.04-3.52z"
                  fill="#fff"
                  id="elw8dibi0wiyk"
                  opacity={0.6}
                  style={{
                    transformOrigin: '168.33px 455.742px',
                  }}
                />
              </g>
              <g id="elw4uh2vy0ytd">
                <path
                  className="animable"
                  d="M167.77 453.74a2.4 2.4 0 01.07-.57c-.87-.24-1.51.31-1.51 1.4a4.49 4.49 0 002 3.52c.94.55 1.74.26 2-.62a1.72 1.72 0 01-.52-.21 4.49 4.49 0 01-2.04-3.52z"
                  id="eld5q8cysfwnt"
                  opacity={0.1}
                  style={{
                    transformOrigin: '168.33px 455.742px',
                  }}
                />
              </g>
              <g id="eliezcf7p4wth">
                <path
                  className="animable"
                  d="M169.35 451.72l-13.21-7.63v9.38l13.21 7.63c1.68 1 3 .18 3-1.75V457a6.66 6.66 0 00-3-5.28zm-1 6.37a4.51 4.51 0 01-2-3.52c0-1.3.91-1.82 2-1.17a4.47 4.47 0 012 3.51c.04 1.3-.87 1.82-1.99 1.18z"
                  fill="#fff"
                  id="elwoz3a3n438k"
                  opacity={0.7}
                  style={{
                    transformOrigin: '164.245px 452.809px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M181.54 444.68l-13.21-7.63-1.44.83v9.38l13.21 7.63a2.12 2.12 0 002.15.21l1.44-.84a2.09 2.09 0 00.88-1.95v-2.38a6.69 6.69 0 00-3.03-5.25zm-2.43 2.51a4.47 4.47 0 012 3.52 2.23 2.23 0 01-.07.55 1.72 1.72 0 01-.52-.21 4.49 4.49 0 01-2-3.52 2.31 2.31 0 01.07-.56 2.07 2.07 0 01.52.22z"
                fill="#739bff"
                id="ele6au4g7seq"
                style={{
                  transformOrigin: '175.737px 446.175px',
                }}
              />
              <g id="elmlefmjt3gri">
                <path
                  className="animable"
                  d="M181.54 444.68l-13.22-7.63-1.43.83 13.21 7.63a6.69 6.69 0 013 5.25v2.38a2.09 2.09 0 01-.95 2h.07l1.44-.84a2.09 2.09 0 00.88-1.95v-2.38a6.72 6.72 0 00-3-5.29z"
                  fill="#fff"
                  id="el5dr8c1p7arb"
                  opacity={0.85}
                  style={{
                    transformOrigin: '175.722px 446.095px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M184.57 449.93v2.38a2.09 2.09 0 01-.88 1.95l-1.44.84h-.06a2.09 2.09 0 00.94-2v-2.38a6.21 6.21 0 00-.89-3l1.44-.83a6.18 6.18 0 01.89 3.04z"
                fill="#739bff"
                id="elhbwb493vx8d"
                style={{
                  transformOrigin: '183.387px 450.995px',
                }}
              />
              <g id="elbmvwls7z4xn">
                <path
                  className="animable"
                  d="M184.57 449.93v2.38a2.09 2.09 0 01-.88 1.95l-1.44.84h-.06a2.09 2.09 0 00.94-2v-2.38a6.21 6.21 0 00-.89-3l1.44-.83a6.18 6.18 0 01.89 3.04z"
                  fill="#fff"
                  id="elbifvbp0ojdc"
                  opacity={0.6}
                  style={{
                    transformOrigin: '183.387px 450.995px',
                  }}
                />
              </g>
              <g id="el2emdntdzg1m">
                <path
                  className="animable"
                  d="M184.57 449.93v2.38a2.09 2.09 0 01-.88 1.95l-1.44.84h-.06a2.09 2.09 0 00.94-2v-2.38a6.21 6.21 0 00-.89-3l1.44-.83a6.18 6.18 0 01.89 3.04z"
                  id="elzsdj5vq5frc"
                  opacity={0.05}
                  style={{
                    transformOrigin: '183.387px 450.995px',
                  }}
                />
              </g>
              <g id="el98q3jzia21t">
                <path
                  className="animable"
                  d="M178.52 447.53a2.31 2.31 0 01.07-.56c-.86-.24-1.51.3-1.51 1.39a4.49 4.49 0 002 3.52c.94.55 1.74.26 2-.62a1.72 1.72 0 01-.52-.21 4.49 4.49 0 01-2.04-3.52z"
                  fill="#fff"
                  id="elrzl2apkoeyc"
                  opacity={0.6}
                  style={{
                    transformOrigin: '179.08px 449.537px',
                  }}
                />
              </g>
              <g id="elt3y6xxqw5t">
                <path
                  className="animable"
                  d="M178.52 447.53a2.31 2.31 0 01.07-.56c-.86-.24-1.51.3-1.51 1.39a4.49 4.49 0 002 3.52c.94.55 1.74.26 2-.62a1.72 1.72 0 01-.52-.21 4.49 4.49 0 01-2.04-3.52z"
                  id="elx0ze4vxkf5"
                  opacity={0.1}
                  style={{
                    transformOrigin: '179.08px 449.537px',
                  }}
                />
              </g>
              <g id="el0gz1irnx253n">
                <path
                  className="animable"
                  d="M180.11 445.51l-13.22-7.63v9.38l13.21 7.63c1.68 1 3 .19 3-1.75v-2.38a6.72 6.72 0 00-2.99-5.25zm-1 6.37a4.49 4.49 0 01-2-3.52c0-1.29.91-1.82 2-1.17a4.47 4.47 0 012 3.52c.03 1.29-.88 1.82-2 1.17z"
                  fill="#fff"
                  id="el8hrwknz4z4v"
                  opacity={0.7}
                  style={{
                    transformOrigin: '174.995px 446.6px',
                  }}
                />
              </g>
            </g>
            <g
              className="animable"
              id="freepik--device--inject-14"
              style={{
                transformOrigin: '192.78px 214.361px',
              }}
            >
              <path
                className="animable"
                d="M227.05 392.14l37.6-21.75c3.88-2.23 5.82-5.17 5.82-8.1v-5.23l-39-22a8.29 8.29 0 01-3.75-6.49v-46.36l-65.68 38v46.37a8.25 8.25 0 003.74 6.48L199 392.14c7.73 4.47 20.3 4.47 28.05 0z"
                fill="#739bff"
                id="el89n9vcsidze"
                style={{
                  transformOrigin: '216.255px 338.851px',
                }}
              />
              <g id="eltcmdh4nesk8">
                <g
                  className="animable"
                  id="elaeken0pohgc"
                  opacity={0.6}
                  style={{
                    transformOrigin: '216.255px 338.851px',
                  }}
                >
                  <path
                    className="animable"
                    d="M227.05 392.14l37.6-21.75c3.88-2.23 5.82-5.17 5.82-8.1v-5.23l-39-22a8.29 8.29 0 01-3.75-6.49v-46.36l-65.68 38v46.37a8.25 8.25 0 003.74 6.48L199 392.14c7.73 4.47 20.3 4.47 28.05 0z"
                    id="elruznxnb0k8"
                    style={{
                      transformOrigin: '216.255px 338.851px',
                    }}
                  />
                </g>
              </g>
              <g id="elvslzwghrnt">
                <path
                  className="animable"
                  d="M177.81 374.74V380l-12-6.94a8.3 8.3 0 01-3.74-6.48v-46.41l12.48-7.17c.25 3.17.54 6.46.8 9.66l-8.78 5.08v36.22a8.19 8.19 0 003.74 6.48z"
                  id="el3711th9buwf"
                  opacity={0.3}
                  style={{
                    transformOrigin: '169.94px 346.5px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M166.57 363.92a8.25 8.25 0 003.74 6.48L199 386.91c7.75 4.47 20.32 4.48 28.08 0l37.62-21.74c7.75-4.47 7.75-11.73 0-16.21L236 332.45a8.28 8.28 0 01-3.74-6.49v-36.23l-65.68 38z"
                fill="#739bff"
                id="elpbiw43zds7"
                style={{
                  transformOrigin: '218.541px 339.998px',
                }}
              />
              <g id="elzqzx67qwte">
                <path
                  className="animable"
                  d="M166.57 363.92a8.25 8.25 0 003.74 6.48L199 386.91c7.75 4.47 20.32 4.48 28.08 0l37.62-21.74c7.75-4.47 7.75-11.73 0-16.21L236 332.45a8.28 8.28 0 01-3.74-6.49v-36.23l-65.68 38z"
                  id="elh08l5o2dfoh"
                  opacity={0.3}
                  style={{
                    transformOrigin: '218.541px 339.998px',
                  }}
                />
              </g>
              <g id="el7uzqcu3ofxr">
                <path
                  className="animable"
                  d="M243.62 336.85l-7.62-4.4a8.28 8.28 0 01-3.74-6.49v-36.23l-65.68 38v36.23a8.25 8.25 0 003.74 6.48l7.5 4.33z"
                  id="elax1jy7sd3zo"
                  opacity={0.5}
                  style={{
                    transformOrigin: '205.1px 332.25px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M270.48 357.06v5.23c0 2.94-2 5.86-5.82 8.11l-37.61 21.73a28.17 28.17 0 01-13.4 3.33v-5.21a28.17 28.17 0 0013.4-3.33l37.61-21.75c3.87-2.23 5.82-5.17 5.82-8.11z"
                fill="#739bff"
                id="eln8ilufry58l"
                style={{
                  transformOrigin: '242.065px 376.26px',
                }}
              />
              <g id="ellkhat9gfm0o">
                <path
                  className="animable"
                  d="M270.48 357.06v5.23c0 2.94-2 5.86-5.82 8.11l-37.61 21.73a28.17 28.17 0 01-13.4 3.33v-5.21a28.17 28.17 0 0013.4-3.33l37.61-21.75c3.87-2.23 5.82-5.17 5.82-8.11z"
                  id="elsu95n1avkac"
                  opacity={0.5}
                  style={{
                    transformOrigin: '242.065px 376.26px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M61.1 409a10 10 0 009.07-.17l254-146.66c2.58-1.49 4.67-5.12 4.67-4.1V26.72c0-7-2-10.54-4.39-11.94a10 10 0 00-9.06.17L61.4 161.61a10.32 10.32 0 00-4.68 8.1V401a10 10 0 004.38 8z"
                fill="#739bff"
                id="el2t8t89jdyiu"
                style={{
                  transformOrigin: '192.78px 211.891px',
                }}
              />
              <path
                className="animable"
                d="M70.17 408.78l254-146.66c2.58-1.49 4.68-5.12 4.68-4.11V26.71c0-7-2.1-8.19-4.68-6.7l-254 146.66a10.32 10.32 0 00-4.68 8.1v231.3c0 2.99 2.1 4.2 4.68 2.71z"
                fill="#739bff"
                id="elbqas99t80lt"
                style={{
                  transformOrigin: '197.17px 214.43px',
                }}
              />
              <g id="el1wow2gl8jmgh">
                <path
                  className="animable"
                  d="M70.17 408.78l254-146.66c2.58-1.49 4.68-5.12 4.68-4.11V26.71c0-7-2.1-8.19-4.68-6.7l-254 146.66a10.32 10.32 0 00-4.68 8.1v231.3c0 2.99 2.1 4.2 4.68 2.71z"
                  id="ellzlkxc4isua"
                  opacity={0.5}
                  style={{
                    transformOrigin: '197.17px 214.43px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M69.48 414.12a10.09 10.09 0 01-8.38-.18 10 10 0 01-4.39-7.94v-14.72l8.78 5.08v14.71c0 2.72 1.73 3.93 3.99 3.05z"
                fill="#739bff"
                id="el3a5eylzbb0r"
                style={{
                  transformOrigin: '63.095px 403.112px',
                }}
              />
              <g id="elbmb7pptow7">
                <path
                  className="animable"
                  d="M69.48 414.12a10.09 10.09 0 01-8.38-.18 10 10 0 01-4.39-7.94v-14.72l8.78 5.08v14.71c0 2.72 1.73 3.93 3.99 3.05z"
                  id="elpa69sylsouo"
                  opacity={0.5}
                  style={{
                    transformOrigin: '63.095px 403.112px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M65.49 396.36v14.7c0 3 2.1 4.2 4.68 2.7l254-146.65a10.35 10.35 0 004.68-8.11v-14.74z"
                fill="#739bff"
                id="el3judqu8f8k3"
                style={{
                  transformOrigin: '197.17px 329.333px',
                }}
              />
              <g id="elcehgusvk5q4">
                <path
                  className="animable"
                  d="M65.49 396.32v14.74c0 3 2.1 4.2 4.68 2.7l254-146.65a10.35 10.35 0 004.68-8.11v-14.74z"
                  id="elb05ajad3nmb"
                  opacity={0.3}
                  style={{
                    transformOrigin: '197.17px 329.333px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M74.27 377.88V177.69a6.23 6.23 0 012.81-4.87l240.2-138.68c1.55-.89 2.81-.17 2.81 1.62V236a6.21 6.21 0 01-2.81 4.86L77.08 379.51c-1.55.89-2.81.16-2.81-1.63z"
                fill="#739bff"
                id="elkxw1ew61bf"
                style={{
                  transformOrigin: '197.18px 206.824px',
                }}
              />
              <path
                className="animable"
                d="M74.27 377.88V177.69a6.23 6.23 0 012.81-4.87l240.2-138.68c1.55-.89 2.81-.17 2.81 1.62V236a6.21 6.21 0 01-2.81 4.86L77.08 379.51c-1.55.89-2.81.16-2.81-1.63z"
                fill="#263238"
                id="el6zd51dbhc4"
                style={{
                  transformOrigin: '197.18px 206.824px',
                }}
              />
              <g id="elrx4y466fibo">
                <path
                  className="animable"
                  d="M66.87 170.14a10 10 0 00-1.38 4.63v221.59l-8.78-5.08V169.71a9.69 9.69 0 011.37-4.62z"
                  id="el6h7x2i4w7fa"
                  opacity={0.7}
                  style={{
                    transformOrigin: '61.79px 280.725px',
                  }}
                />
              </g>
              <g id="el91bb2b54upv">
                <path
                  className="animable"
                  d="M328.83 21.94c-.33-2.41-2.28-3.28-4.64-1.93l-254 146.66a9.5 9.5 0 00-3.31 3.48l-8.78-5.07a9.66 9.66 0 013.31-3.48L315.42 15a10 10 0 019.07-.17 10.1 10.1 0 014.34 7.11z"
                  id="elhk5d1vwnst8"
                  opacity={0.3}
                  style={{
                    transformOrigin: '193.465px 91.9878px',
                  }}
                />
              </g>
            </g>
          </g>
          <g
            className="animable"
            id="freepik--Window--inject-14"
            style={{
              transformOrigin: '215.758px 212.494px',
              animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomIn',
              animationDelay: '0s',
            }}
          >
            <g
              className="animable"
              id="freepik--window--inject-14"
              style={{
                transformOrigin: '215.758px 212.494px',
              }}
            >
              <path
                className="animable"
                d="M98.4 390.08a4 4 0 01-1.83.55 4.55 4.55 0 01-2.68-.47 5 5 0 01-2.18-4v-181.6l4.39 2.53v181.64c0 1.06.53 1.67 1.29 1.67a2.37 2.37 0 001.01-.32z"
                fill="#f0f0f0"
                id="elgqwhgv4w0k6"
                style={{
                  transformOrigin: '95.055px 297.614px',
                }}
              />
              <path
                className="animable"
                d="M339.83 248a5.14 5.14 0 01-2.33 4L98.4 390.08c-1.28.74-2.32.14-2.32-1.35V192l6.41-3.7c1.28-.74 3.37-12 4.66-12.79l55.6-32.1c1.29-.74 4.32 7.61 5.6 6.86l171.48-99V248z"
                fill="#fafafa"
                id="elf4xget1mnr"
                style={{
                  transformOrigin: '217.955px 220.833px',
                }}
              />
              <path
                className="animable"
                d="M338.75 53.1V248a4.1 4.1 0 01-1.79 3.1L97.86 389.15a1.13 1.13 0 01-.49.17c-.22 0-.22-.56-.22-.59V192.61l5.88-3.4c.93-.54 1.51-2.35 2.82-7a34.79 34.79 0 011.92-5.82l55.1-31.81a21.61 21.61 0 011.75 2.79c1.5 2.64 2.34 4 3.56 4a1.36 1.36 0 00.71-.2L338.75 53.1M339.83 51.24l-171.48 99a.34.34 0 01-.17.05c-1.3 0-4-7-5.26-7a.33.33 0 00-.17 0l-55.6 32.1c-1.29.75-3.38 12-4.66 12.79L96.08 192v196.73c0 1.06.52 1.67 1.29 1.67a2 2 0 001-.32L337.5 252a5.14 5.14 0 002.33-4V51.24z"
                fill="#e0e0e0"
                id="elgji4jo8pxp9"
                style={{
                  transformOrigin: '217.955px 220.82px',
                }}
              />
              <path
                className="animable"
                d="M93.89 199.15a5 5 0 01-2.19-4V177a5.15 5.15 0 012.3-4L333.1 35a4.36 4.36 0 016.69 3.87V57a5.12 5.12 0 01-2.33 4L98.4 199.07a5 5 0 01-4.51.08z"
                fill="#739bff"
                id="elp7jh43hao2o"
                style={{
                  transformOrigin: '215.747px 116.985px',
                }}
              />
              <g id="elkdwqudjewxj">
                <path
                  className="animable"
                  d="M339.8 38.41c-.16-1.21-1.14-1.65-2.3-1L98.4 175.49a5.07 5.07 0 00-1.65 1.75l-4.37-2.53A4.86 4.86 0 0194 173L333.1 35a4.34 4.34 0 016.67 3.49z"
                  fill="#fff"
                  id="elcb0gd9ak4xc"
                  opacity={0.4}
                  style={{
                    transformOrigin: '216.09px 105.78px',
                  }}
                />
              </g>
              <g id="elub6ae3sdee">
                <path
                  className="animable"
                  d="M96.75 177.24a4.72 4.72 0 00-.67 2.29v27.61l-4.39-2.53V177a2.62 2.62 0 010-.28 4.71 4.71 0 01.09-.58 5.57 5.57 0 01.58-1.44z"
                  id="eloql93ry6sg"
                  opacity={0.1}
                  style={{
                    transformOrigin: '94.2181px 190.92px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M339.82 38.78v12.46l-171.48 99c-1.28.75-2.32.14-2.32-1.34v-4.72c0-1.48-1-2.09-2.34-1.34l-56.54 32.64a5.15 5.15 0 00-2.33 4v4.71a5.17 5.17 0 01-2.33 4l-6.4 3.81v-12.47a5.17 5.17 0 012.32-4l239.1-138c1.28-.84 2.32-.23 2.32 1.25z"
                fill="#739bff"
                id="ele6b3cycktyk"
                style={{
                  transformOrigin: '217.95px 114.575px',
                }}
              />
              <path
                className="animable"
                d="M328.9 46.59c1.62-.93 2.93-.17 2.93 1.7a6.49 6.49 0 01-2.93 5.08c-1.62.93-2.94.17-2.94-1.7a6.5 6.5 0 012.94-5.08z"
                fill="#fff"
                id="eluyk8h2gcnnp"
                style={{
                  transformOrigin: '328.895px 49.98px',
                }}
              />
              <path
                className="animable"
                d="M318.34 52.68c1.62-.93 2.93-.18 2.93 1.69a6.47 6.47 0 01-2.93 5.08c-1.62.94-2.93.18-2.93-1.69a6.49 6.49 0 012.93-5.08z"
                fill="#fff"
                id="elf58wd9g3tzs"
                style={{
                  transformOrigin: '318.34px 56.0672px',
                }}
              />
              <path
                className="animable"
                d="M307.78 58.77c1.62-.94 2.93-.18 2.93 1.69a6.49 6.49 0 01-2.93 5.08c-1.62.93-2.93.18-2.93-1.69a6.47 6.47 0 012.93-5.08z"
                fill="#fff"
                id="elnblros18oe"
                style={{
                  transformOrigin: '307.78px 62.1528px',
                }}
              />
              <path
                className="animable"
                d="M339.83 51.24v15.15L96.08 207.14V192l4.79-2.77c1.28-.74 1.71-1.87 2.32-4l1.63-5.64c.51-2 1-3.29 2.33-4l55.6-32.1c1.29-.74 2.3-.82 3.28.8l2 3.62c.73 1.26 1.1 2 2.38 1.26z"
                fill="#e6e6e6"
                id="el0zbpe4nqp38a"
                style={{
                  transformOrigin: '217.955px 129.19px',
                }}
              />
              <path
                className="animable"
                d="M96.08 191.98L96.08 207.14 91.69 204.61 91.69 189.47 96.08 191.98z"
                fill="#e0e0e0"
                id="eluiu6hy9yrom"
                style={{
                  transformOrigin: '93.885px 198.305px',
                }}
              />
              <g id="elbbtcmkyxofe">
                <path
                  className="animable"
                  d="M106.77 193.08l-3.66 2.11 1.39-2.68a.68.68 0 000-.66c-.11-.13-.29 0-.42.2l-2 3.81s0 .09-.05.14a1.23 1.23 0 000 .19.72.72 0 000 .17.56.56 0 00.05.08l2 1.52a.16.16 0 00.2 0 .55.55 0 00.22-.28c.11-.25.09-.53 0-.62l-1.39-1.08 3.66-2.11a.77.77 0 00.29-.62c0-.14-.13-.25-.29-.17z"
                  fill="#455a64"
                  id="el95v0igeqoxf"
                  opacity={0.5}
                  style={{
                    transformOrigin: '104.534px 194.896px',
                  }}
                />
              </g>
              <g id="elltti9pb9f6e">
                <path
                  className="animable"
                  d="M109.82 191.31l3.66-2.11-1.4-1.07a.59.59 0 010-.63c.1-.25.29-.37.41-.28l2 1.53a.18.18 0 01.06.08.47.47 0 010 .17.69.69 0 010 .2l-.06.15-2 3.82a.47.47 0 01-.19.22.16.16 0 01-.22 0 .65.65 0 010-.65l1.4-2.68-3.66 2.11c-.16.09-.29 0-.29-.28a.79.79 0 01.29-.58z"
                  fill="#455a64"
                  id="el5xoj3j2mwe8"
                  opacity={0.5}
                  style={{
                    transformOrigin: '112.044px 190.312px',
                  }}
                />
              </g>
              <g id="el4s9ds3yiqji">
                <path
                  className="animable"
                  d="M121.82 180.78c0-.22-.21-.2-.31 0l-.5 1.23c-.86-.09-1.89.74-2.59 2.22-.91 1.92-.91 4.19 0 5.06a1.29 1.29 0 001.64.1 4.56 4.56 0 001.65-2 .65.65 0 000-.64c-.12-.11-.3 0-.42.24-.68 1.43-1.78 2.07-2.45 1.42s-.68-2.35 0-3.78c.48-1 1.17-1.62 1.77-1.66l-.37.93c-.1.24 0 .46.14.36l1.49-1a.43.43 0 00.17-.4z"
                  fill="#455a64"
                  id="elygyfv5d57nq"
                  opacity={0.5}
                  style={{
                    transformOrigin: '119.89px 185.13px',
                  }}
                />
              </g>
              <g id="elm7sv4dqja6">
                <path
                  className="animable"
                  d="M161.14 150.31l1.34-2.82a.9.9 0 000-.88c-.16-.15-.42 0-.57.33l-1.34 2.82-1.33-1.28c-.16-.15-.41 0-.57.33a.85.85 0 000 .88L160 151l-1.33 2.82a.85.85 0 000 .88.21.21 0 00.28 0 .75.75 0 00.29-.35l1.33-2.82 1.34 1.28a.21.21 0 00.28 0 .75.75 0 00.29-.35.9.9 0 000-.88z"
                  fill="#455a64"
                  id="elb54d8r12k38"
                  opacity={0.5}
                  style={{
                    transformOrigin: '160.571px 150.653px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M126.68 184.25v-4.72a5.14 5.14 0 012.33-4L324.38 62.74c1.29-.75 2.33-.14 2.33 1.34v4.72a5.14 5.14 0 01-2.33 4L129 185.59c-1.28.75-2.32.14-2.32-1.34z"
                fill="#fafafa"
                id="elcoyjbvlvgxi"
                style={{
                  transformOrigin: '226.695px 124.165px',
                }}
              />
              <path
                className="animable"
                d="M321.21 73.2a.65.65 0 01-.21 0 .63.63 0 01-.35-.71l.23-1.91-.9-.65a.63.63 0 01-.24-.52 1 1 0 01.38-.81l1.37-1.06a.32.32 0 00.06-.11l.61-2a.85.85 0 01.69-.65.52.52 0 01.54.32l.51 1.09 1.16-.44a.52.52 0 01.61.14.83.83 0 010 .94l-1 1.86a.45.45 0 000 .11l.24 1.68a1 1 0 01-.3.84.61.61 0 01-.54.21l-1.07-.17-1.21 1.54a.69.69 0 01-.58.3zm-.66-3.9l.9.65a.68.68 0 01.24.64l-.16 1.28.81-1a.71.71 0 01.62-.3l1.12.14a.38.38 0 000-.13l-.24-1.68a1.08 1.08 0 01.12-.6l.87-1.63-.83.33a.55.55 0 01-.71-.28l-.4-.86-.55 1.79a1 1 0 01-.34.51l-1.37 1a.29.29 0 00-.08.14zm.42 1.3zm1.69-5.2z"
                fill="#e0e0e0"
                id="elc6kp6veebdm"
                style={{
                  transformOrigin: '322.778px 68.9926px',
                }}
              />
              <g id="elmd76p5j7pd">
                <g
                  className="animable"
                  id="ell1fxm1s3ne"
                  opacity={0.5}
                  style={{
                    transformOrigin: '332.751px 63.2386px',
                  }}
                >
                  <path
                    className="animable"
                    d="M329.46 62.16a.8.8 0 01-.41-1.5l6.56-3.79a.81.81 0 11.81 1.4l-6.56 3.78a.73.73 0 01-.4.11z"
                    fill="#455a64"
                    id="elal7y55zb9xo"
                    style={{
                      transformOrigin: '332.751px 59.4488px',
                    }}
                  />
                  <path
                    className="animable"
                    d="M329.46 66a.8.8 0 01-.7-.4.82.82 0 01.29-1.11l6.56-3.78a.81.81 0 011.11.29.8.8 0 01-.3 1.1l-6.56 3.79a.73.73 0 01-.4.11z"
                    fill="#455a64"
                    id="elg2eseqbhnq7"
                    style={{
                      transformOrigin: '332.74px 63.2992px',
                    }}
                  />
                  <path
                    className="animable"
                    d="M329.46 69.74a.81.81 0 01-.41-1.51l6.56-3.79a.82.82 0 011.11.3.8.8 0 01-.3 1.1l-6.56 3.79a.83.83 0 01-.4.11z"
                    fill="#455a64"
                    id="el70u2zfbyr2f"
                    style={{
                      transformOrigin: '332.738px 67.0372px',
                    }}
                  />
                </g>
              </g>
              <g
                className="animable"
                id="freepik--Search--inject-14"
                style={{
                  transformOrigin: '215.773px 149.98px',
                }}
              >
                <g id="el4a65mnp8pnj">
                  <g
                    className="animable"
                    id="elzl7l0gv0vp8"
                    opacity={0.5}
                    style={{
                      transformOrigin: '106.539px 212.501px',
                    }}
                  >
                    <path
                      className="animable"
                      d="M103.27 211.38a.8.8 0 01-.41-1.5l6.56-3.79a.81.81 0 01.81 1.4l-6.56 3.78a.76.76 0 01-.4.11z"
                      fill="#455a64"
                      id="elmxdz03yyrh"
                      style={{
                        transformOrigin: '106.521px 208.692px',
                      }}
                    />
                    <path
                      className="animable"
                      d="M103.27 215.17a.8.8 0 01-.7-.4.81.81 0 01.29-1.11l6.56-3.78a.8.8 0 011.1.29.81.81 0 01-.29 1.11l-6.56 3.78a.76.76 0 01-.4.11z"
                      fill="#455a64"
                      id="elz07scjfblxo"
                      style={{
                        transformOrigin: '106.545px 212.469px',
                      }}
                    />
                    <path
                      className="animable"
                      d="M103.27 219a.81.81 0 01-.41-1.51l6.56-3.78a.79.79 0 011.1.29.8.8 0 01-.29 1.1l-6.56 3.79a.86.86 0 01-.4.11z"
                      fill="#455a64"
                      id="elqxp30f90w2a"
                      style={{
                        transformOrigin: '106.544px 216.298px',
                      }}
                    />
                  </g>
                </g>
                <path
                  className="animable"
                  d="M161.45 178v5.81c0 1.19.84 1.67 1.87 1.08l77.93-45.06v-10.14l-77.92 45.06a4.14 4.14 0 00-1.88 3.25z"
                  fill="#e6e6e6"
                  id="elmbudrrztzq"
                  style={{
                    transformOrigin: '201.35px 157.416px',
                  }}
                />
                <path
                  className="animable"
                  d="M251.07 124c1-.6 1.87-.11 1.87 1.08v5.81a4.15 4.15 0 01-1.87 3.24l-9.82 5.67v-10.11z"
                  fill="#739bff"
                  id="elof904uw4f9g"
                  style={{
                    transformOrigin: '247.095px 131.772px',
                  }}
                />
                <path
                  className="animable"
                  d="M250.34 132l-1.09-.35a6.11 6.11 0 00.17-1.41 2.57 2.57 0 00-1-2.34 1.55 1.55 0 00-1.59.08 5.6 5.6 0 00-2.19 4.56 2.57 2.57 0 001 2.34 1.39 1.39 0 00.69.18 1.75 1.75 0 00.9-.26 4.58 4.58 0 001.77-2.37l1.1.34a.25.25 0 00.12 0 .4.4 0 00.12-.79zm-3.51 2.1a.77.77 0 01-.79.07 1.9 1.9 0 01-.59-1.63 4.92 4.92 0 011.78-3.86 1.05 1.05 0 01.5-.15.51.51 0 01.29.08 1.9 1.9 0 01.59 1.63 4.92 4.92 0 01-1.78 3.85z"
                  fill="#fafafa"
                  id="elu26nn281y0b"
                  style={{
                    transformOrigin: '247.642px 131.389px',
                  }}
                />
                <path
                  className="animable"
                  d="M129.06 194.53L117.81 201a4.1 4.1 0 00-1.87 3.22v5.79c0 1.19.84 1.67 1.87 1.08l11.25-6.51a4.11 4.11 0 001.86-3.23v-5.75c0-1.18-.83-1.67-1.86-1.07z"
                  fill="#739bff"
                  id="eld53rkuyl4i"
                  style={{
                    transformOrigin: '123.43px 202.808px',
                  }}
                />
                <path
                  className="animable"
                  d="M324.71 81.56a9.7 9.7 0 00-4.38 7.59c0 2.8 2 3.93 4.38 2.54a9.71 9.71 0 004.39-7.6c0-2.8-1.97-3.93-4.39-2.53z"
                  fill="#739bff"
                  id="eluxau7irpkq"
                  style={{
                    transformOrigin: '324.715px 86.6218px',
                  }}
                />
                <path
                  className="animable"
                  d="M324.2 86a.76.76 0 01-.39-.1 1 1 0 01-.42-.88 2.52 2.52 0 011.15-2 .87.87 0 011.4.81 2.54 2.54 0 01-1.16 2 1.23 1.23 0 01-.58.17z"
                  fill="#fff"
                  id="elm9c7k58r11a"
                  style={{
                    transformOrigin: '324.669px 84.4164px',
                  }}
                />
                <path
                  className="animable"
                  d="M326.44 86.31a1.5 1.5 0 00-1.54.12l-.64.37a4.32 4.32 0 00-2 3.41v.46a2.47 2.47 0 002.42-.26 7 7 0 002.42-2.54v-.11a1.59 1.59 0 00-.66-1.45z"
                  fill="#fff"
                  id="elkuk2vir1lfp"
                  style={{
                    transformOrigin: '324.684px 88.5125px',
                  }}
                />
                <path
                  className="animable"
                  d="M309.2 95.12v-1.55c0-1.76-1.07-2.57-2.39-1.81a5.74 5.74 0 00-2.4 4.58v1.39a5.52 5.52 0 01-.81 2.7 1.48 1.48 0 00-.2.7c0 .45.27.65.6.46l5.61-3.23a1.47 1.47 0 00.6-1.16.59.59 0 00-.18-.47 1.63 1.63 0 01-.83-1.61z"
                  fill="#739bff"
                  id="el39o70zkz3gz"
                  style={{
                    transformOrigin: '306.806px 96.5681px',
                  }}
                />
                <path
                  className="animable"
                  d="M308 99.8a2.77 2.77 0 01-1.15 2.2c-.64.36-1.16 0-1.16-.87z"
                  fill="#739bff"
                  id="ellhegq3mmu1"
                  style={{
                    transformOrigin: '306.845px 100.969px',
                  }}
                />
                <path
                  className="animable"
                  d="M288.52 102.48a2.57 2.57 0 011-.34 1.32 1.32 0 01.8.16 1.34 1.34 0 01.53.61A2.54 2.54 0 01291 104a4.21 4.21 0 01-.11 1 6.17 6.17 0 01-.28.86 7.85 7.85 0 01-.37.77l-.4.72c-.12.23-.24.47-.34.7a3.19 3.19 0 00-.21.69 1.14 1.14 0 01-.08.33.47.47 0 01-.16.2l-1.13.65h-.17a.3.3 0 01-.08-.23 3.13 3.13 0 01.13-.91 6.61 6.61 0 01.3-.85c.13-.27.26-.54.41-.79s.27-.5.4-.72.22-.45.31-.66a1.68 1.68 0 00.12-.59c0-.28-.07-.46-.2-.53s-.35 0-.63.12a1.57 1.57 0 00-.59.54 2.9 2.9 0 00-.27.57l-.14.5a.54.54 0 01-.23.33l-1.13.65a.12.12 0 01-.14 0 .27.27 0 01-.06-.2 4.91 4.91 0 01.18-1.15 7.62 7.62 0 01.5-1.29 6.26 6.26 0 01.8-1.22 4.14 4.14 0 011.09-1.01zm.8 9.24a.73.73 0 01-.07.31.48.48 0 01-.18.21l-1.16.67a.12.12 0 01-.17 0 .3.3 0 01-.08-.23v-1.43a.71.71 0 01.08-.31.44.44 0 01.17-.22l1.16-.67a.14.14 0 01.18 0 .28.28 0 01.07.22z"
                  fill="#739bff"
                  id="el3pfg5jn57ke"
                  style={{
                    transformOrigin: '288.478px 107.538px',
                  }}
                />
              </g>
            </g>
          </g>
          <g
            className="animable"
            id="freepik--404--inject-14"
            style={{
              transformOrigin: '216.465px 232.5px',
            }}
          >
            <g
              className="animable"
              id="freepik--404--inject-14"
              style={{
                transformOrigin: '216.465px 232.5px',
              }}
            >
              <g
                className="animable"
                id="freepik--shadow--inject-14"
                style={{
                  transformOrigin: '213.445px 205.185px',
                }}
              >
                <path
                  className="animable"
                  d="M161.56 282.63a3.52 3.52 0 01-2.46-1 4.84 4.84 0 01-1.36-3.64v-7.4L138 282a3.82 3.82 0 01-2 .55 3.47 3.47 0 01-2.45-1 4.83 4.83 0 01-1.37-3.65v-12.2a17.85 17.85 0 011.14-6.41L155.67 203a13 13 0 011.58-3 7.67 7.67 0 012.26-1.93l11.28-6.51a3.82 3.82 0 012-.55 3.5 3.5 0 012.45 1 4.84 4.84 0 011.37 3.64v39.83l2.67-1.54a3.8 3.8 0 012-.55 3.54 3.54 0 012.45 1 4.92 4.92 0 011.27 3.71v12.19a8.27 8.27 0 01-.84 3.59 6.22 6.22 0 01-2.43 2.84l-5.17 3V270a8.35 8.35 0 01-.84 3.6 6.23 6.23 0 01-2.43 2.84l-9.78 5.65a4 4 0 01-1.95.54zm-6.88-34.47l3.43-2v-6.65z"
                  fill="#e0e0e0"
                  id="eluk1jfoet2bo"
                  style={{
                    transformOrigin: '158.594px 236.82px',
                  }}
                />
                <path
                  className="animable"
                  d="M203.29 257.63h-.6a12.05 12.05 0 01-8.35-3.68 19.46 19.46 0 01-4.59-8.77 53.37 53.37 0 01-1.61-11.56c-.1-3.09-.15-6.49-.15-10.12s0-7.17.15-10.52a81.08 81.08 0 011.58-13.21 58.16 58.16 0 014.14-12.77 50.16 50.16 0 017-11.2 38 38 0 0110.31-8.66c3.94-2.28 7.34-3.38 10.41-3.38h.6a12.14 12.14 0 018.35 3.68 19.57 19.57 0 014.59 8.77 53.55 53.55 0 011.61 11.56c.1 3.31.15 6.79.15 10.36s0 7-.15 10.28a82.2 82.2 0 01-1.58 13.21 58.88 58.88 0 01-4.15 12.76 50.07 50.07 0 01-7 11.2 38.2 38.2 0 01-10.31 8.67c-3.93 2.27-7.34 3.38-10.4 3.38zM215.82 189a4.69 4.69 0 00-2.12.81 10.4 10.4 0 00-3 2.57 13.88 13.88 0 00-2 3.56 22.43 22.43 0 00-1.2 4.48 36.54 36.54 0 00-.49 5.24c-.25 6.45-.25 12.88 0 19.16a29.78 29.78 0 00.45 4.64 5.77 5.77 0 00.88 2.38.94.94 0 00.72.44 4.57 4.57 0 002.18-.8 10.57 10.57 0 003-2.58 14.37 14.37 0 002.07-3.6 20.29 20.29 0 001.2-4.43 43.14 43.14 0 00.45-5.25c.2-6.55.2-13 0-19.17a34.47 34.47 0 00-.52-4.59 6.49 6.49 0 00-.89-2.46.81.81 0 00-.63-.4z"
                  fill="#e0e0e0"
                  id="el84kv2fuhgv"
                  style={{
                    transformOrigin: '212.435px 210.695px',
                  }}
                />
                <path
                  className="animable"
                  d="M271.23 219.31a3.52 3.52 0 01-2.46-1 4.84 4.84 0 01-1.36-3.64v-7.4l-19.78 11.42a3.79 3.79 0 01-1.94.55 3.48 3.48 0 01-2.46-1 4.83 4.83 0 01-1.36-3.64v-12.23A17.62 17.62 0 01243 196l22.34-56.27a13 13 0 011.57-3 7.8 7.8 0 012.26-1.93l11.28-6.51a3.85 3.85 0 012-.55 3.47 3.47 0 012.45 1 4.84 4.84 0 011.37 3.64v39.83l2.68-1.54a3.76 3.76 0 011.94-.55 3.54 3.54 0 012.45 1 4.88 4.88 0 011.37 3.66V187a8.42 8.42 0 01-.83 3.6 6.28 6.28 0 01-2.43 2.84l-5.18 3v10.28a8.48 8.48 0 01-.83 3.6 6.24 6.24 0 01-2.44 2.84l-9.78 5.65a3.92 3.92 0 01-1.99.5zm-6.87-34.47l3.43-2v-6.65z"
                  fill="#e0e0e0"
                  id="elglvxgrvupw"
                  style={{
                    transformOrigin: '268.29px 173.525px',
                  }}
                />
              </g>
              <g
                className="animable"
                id="freepik--404--inject-14"
                style={{
                  transformOrigin: '217.934px 207.904px',
                }}
              >
                <path
                  className="animable"
                  d="M190.48 241.3a1.1 1.1 0 00-.25-.19l-7.59-4.38v-36a2.47 2.47 0 00-.6-1.84l-.24-.18-8.11-4.71a1.13 1.13 0 00-1.19.08l-11.28 6.51a5.23 5.23 0 00-1.53 1.29 9.91 9.91 0 00-1.23 2.38l-22.34 56.25a15.06 15.06 0 00-1 5.5v12.19a2.44 2.44 0 00.6 1.84 1.1 1.1 0 00.25.19l8.11 4.69a1.11 1.11 0 001.18-.09L160.7 276v2.35a2.51 2.51 0 00.59 1.84l.24.18 8.13 4.69a1.11 1.11 0 001.18-.08l9.78-5.65a3.82 3.82 0 001.42-1.74 5.83 5.83 0 00.6-2.53v-11.75l6.42-3.71a3.72 3.72 0 001.42-1.74 5.83 5.83 0 00.6-2.53v-12.19a2.47 2.47 0 00-.6-1.84z"
                  fill="#739bff"
                  id="elm92ai1yahia"
                  style={{
                    transformOrigin: '163.099px 239.53px',
                  }}
                />
                <g id="el68mypo5znkw">
                  <path
                    className="animable"
                    d="M167.76 206.6v.14a11.47 11.47 0 00-1.14 2.25l-22.33 56.25a12.76 12.76 0 00-.66 2.31l-8.18-4.72a14.23 14.23 0 01.65-2.28l22.33-56.25a10.46 10.46 0 011.24-2.38z"
                    id="elpdmfn3glq78"
                    opacity={0.15}
                    style={{
                      transformOrigin: '151.605px 234.735px',
                    }}
                  />
                </g>
                <g id="elnr5q8bip88k">
                  <path
                    className="animable"
                    d="M144 284.9c-.92-.53-7.69-4.44-8-4.62a1.46 1.46 0 01-.25-.2 2.44 2.44 0 01-.6-1.84v-12.18a16.53 16.53 0 01.32-3.2l8.12 4.69a15.72 15.72 0 00-.31 3.2v12.19a2.47 2.47 0 00.59 1.83z"
                    id="elm4blrtg4yu"
                    opacity={0.3}
                    style={{
                      transformOrigin: '139.57px 273.88px',
                    }}
                  />
                </g>
                <g id="elhf90gvzx8v">
                  <path
                    className="animable"
                    d="M169.2 231.52L169.2 252.68 162.36 248.73 169.2 231.52z"
                    id="elyfyqnycwez"
                    opacity={0.3}
                    style={{
                      transformOrigin: '165.78px 242.1px',
                    }}
                  />
                </g>
                <g id="elpa0n2ojey7o">
                  <path
                    className="animable"
                    d="M169.2 252.68L158.29 258.97 162.36 248.73 169.2 252.68z"
                    id="elv449umf9ho"
                    opacity={0.4}
                    style={{
                      transformOrigin: '163.745px 253.85px',
                    }}
                  />
                </g>
                <g id="el3xc75x6noxd">
                  <path
                    className="animable"
                    d="M169.42 284.86l.14.12-8-4.62a.88.88 0 01-.24-.19 2.45 2.45 0 01-.6-1.84V276l8.12-4.69V283a2.45 2.45 0 00.58 1.86z"
                    id="elrtgznxjbgk"
                    opacity={0.3}
                    style={{
                      transformOrigin: '165.135px 278.145px',
                    }}
                  />
                </g>
                <g id="elvj1xlh5miw">
                  <path
                    className="animable"
                    d="M190.14 241.07a1.14 1.14 0 00-1.07.13l-6.43 3.71v-8.17z"
                    id="el2qz4on2u0ix"
                    opacity={0.15}
                    style={{
                      transformOrigin: '186.39px 240.825px',
                    }}
                  />
                </g>
                <g id="elpqcf4i32tw">
                  <path
                    className="animable"
                    d="M181.75 198.7a1.14 1.14 0 00-1.13.11l-11.27 6.51a5.34 5.34 0 00-1.53 1.28l-8.12-4.69a5.29 5.29 0 011.52-1.28l11.28-6.51a1.1 1.1 0 011.19-.07z"
                    fill="#fff"
                    id="elj6jqgtwqyx"
                    opacity={0.4}
                    style={{
                      transformOrigin: '170.725px 200.254px',
                    }}
                  />
                </g>
                <path
                  className="animable"
                  d="M170.84 285a1.08 1.08 0 01-1.42-.1 2.45 2.45 0 01-.6-1.84v-11.77l-23.53 13.58a1.07 1.07 0 01-1.42-.1 2.44 2.44 0 01-.6-1.84v-12.19a15.07 15.07 0 011-5.5L166.58 209a10.94 10.94 0 011.23-2.38 5.5 5.5 0 011.53-1.29l11.28-6.51a1.08 1.08 0 011.42.1 2.47 2.47 0 01.6 1.84v44.16l6.42-3.71a1.1 1.1 0 011.42.1 2.47 2.47 0 01.6 1.84v12.19a5.83 5.83 0 01-.6 2.53 3.72 3.72 0 01-1.42 1.74l-6.42 3.71V275a5.83 5.83 0 01-.6 2.53 3.82 3.82 0 01-1.42 1.74zm-1.65-32.29v-21.2L158.29 259z"
                  fill="#739bff"
                  id="el1iwzjlwqqoy"
                  style={{
                    transformOrigin: '167.174px 241.91px',
                  }}
                />
                <path
                  className="animable"
                  d="M242.84 192.9a50.6 50.6 0 00-1.53-11 17 17 0 00-4-7.66 9.41 9.41 0 00-2-1.6c-1.35-.8-7.39-4.27-8.13-4.7a10 10 0 00-4.64-1.31q-4-.21-9.63 3a35.25 35.25 0 00-9.64 8.09 47.36 47.36 0 00-6.68 10.65 55.55 55.55 0 00-4 12.23 78.4 78.4 0 00-1.53 12.79q-.15 5-.15 10.43c0 3.61.05 6.95.15 10a50.42 50.42 0 001.53 11 17 17 0 004 7.67 9.56 9.56 0 002 1.59c1.36.8 7.48 4.33 8.26 4.77a10.06 10.06 0 004.53 1.25c2.68.14 5.9-.87 9.63-3a35.6 35.6 0 009.64-8.09 47.72 47.72 0 006.68-10.65 55.55 55.55 0 004-12.23 78.4 78.4 0 001.53-12.79q.15-4.8.15-10.2t-.17-10.24zm-29.51 40.87A32.16 32.16 0 01213 230q-.37-9.56 0-19.32a40 40 0 01.52-5.59 25 25 0 011.35-5 16.14 16.14 0 012.39-4.2 12.85 12.85 0 013.24-2.88c.17 1.14.29 2.38.36 3.73q.3 9.38 0 19.32a42.74 42.74 0 01-.49 5.57 22.56 22.56 0 01-1.34 5 16.94 16.94 0 01-2.43 4.22 12.78 12.78 0 01-3.27 2.92z"
                  fill="#739bff"
                  id="elbxifetlk9v"
                  style={{
                    transformOrigin: '216.96px 213.365px',
                  }}
                />
                <g id="el5epupw1b947">
                  <path
                    className="animable"
                    d="M206.66 258.79l-8-4.64a9.88 9.88 0 01-2-1.6 17 17 0 01-4-7.66 50.52 50.52 0 01-1.53-11q-.15-4.63-.15-10t.15-10.44a78.4 78.4 0 011.53-12.79 55 55 0 012.52-8.75l8.11 4.7a56 56 0 00-2.5 8.74 77.35 77.35 0 00-1.54 12.79q-.15 5-.15 10.44t.15 10a49.89 49.89 0 001.54 11 16.93 16.93 0 004 7.66 9.56 9.56 0 001.87 1.55z"
                    id="elx0q935mdngc"
                    opacity={0.15}
                    style={{
                      transformOrigin: '198.82px 225.35px',
                    }}
                  />
                </g>
                <g id="el7yvregpkxrr">
                  <path
                    className="animable"
                    d="M235 172.45a10.38 10.38 0 00-4.34-1.15q-4-.2-9.64 3a35.56 35.56 0 00-9.63 8.1 47.69 47.69 0 00-6.69 10.64c-.27.58-.52 1.17-.77 1.77s-.45 1.14-.67 1.72l-8.11-4.7c.19-.51.39-1 .6-1.52.27-.66.54-1.31.84-2a48.31 48.31 0 016.68-10.65 35.75 35.75 0 019.64-8.09c3.73-2.16 7-3.16 9.64-3a10.07 10.07 0 014.63 1.31c.7.45 6.04 3.52 7.82 4.57z"
                    fill="#fff"
                    id="eln2iqjtjf0fo"
                    opacity={0.4}
                    style={{
                      transformOrigin: '215.075px 181.542px',
                    }}
                  />
                </g>
                <g id="elno9jx8biy4b">
                  <path
                    className="animable"
                    d="M229 220.78a44.55 44.55 0 01-.49 5.57 22.42 22.42 0 01-1.34 5 16.47 16.47 0 01-.93 1.94l-8.12-4.69a18.16 18.16 0 00.92-1.94 23 23 0 001.35-5 44.59 44.59 0 00.48-5.57q.3-9.94 0-19.32c-.07-1.35-.19-2.59-.35-3.73 0 0 .21-.15.48-.31a6.24 6.24 0 013.74-1.12 3.33 3.33 0 012.39 1.44 8.77 8.77 0 011.31 3.44 38.72 38.72 0 01.56 5q.32 9.35 0 19.29z"
                    id="elyecpvqsru4t"
                    opacity={0.3}
                    style={{
                      transformOrigin: '223.64px 212.449px',
                    }}
                  />
                </g>
                <g id="el2buhnts50wh">
                  <path
                    className="animable"
                    d="M226.27 233.26a16 16 0 01-1.5 2.28 12.77 12.77 0 01-3.74 3.19 6.29 6.29 0 01-3.73 1.12 3.39 3.39 0 01-2.43-1.41 8.18 8.18 0 01-1.34-3.42c-.08-.4-.14-.82-.2-1.25a12.61 12.61 0 003.31-2.92 16.08 16.08 0 001.51-2.28z"
                    id="elq7pynbb4nzb"
                    opacity={0.4}
                    style={{
                      transformOrigin: '219.8px 234.211px',
                    }}
                  />
                </g>
                <path
                  className="animable"
                  d="M221 174.33q5.61-3.24 9.64-3a9.66 9.66 0 016.68 2.92 17 17 0 014 7.66 50.6 50.6 0 011.53 11q.15 4.86.15 10.27t-.15 10.2a78.4 78.4 0 01-1.53 12.79 55.55 55.55 0 01-4 12.23 48.08 48.08 0 01-6.65 10.6 35.6 35.6 0 01-9.64 8.09c-3.73 2.16-6.95 3.17-9.63 3a9.66 9.66 0 01-6.69-2.92 17 17 0 01-4-7.67 50.42 50.42 0 01-1.53-11c-.1-3.09-.15-6.43-.15-10s.05-7.08.15-10.43a78.4 78.4 0 011.53-12.79 55.55 55.55 0 014-12.23 47.76 47.76 0 016.69-10.65 35.2 35.2 0 019.6-8.07zm8 46.45q.3-9.94 0-19.32a37 37 0 00-.56-5 8.78 8.78 0 00-1.3-3.44 3.26 3.26 0 00-2.39-1.44 6.39 6.39 0 00-3.74 1.12 12.73 12.73 0 00-3.73 3.19 16.14 16.14 0 00-2.39 4.2 25 25 0 00-1.35 5 40 40 0 00-.52 5.59q-.37 9.76 0 19.32a32.28 32.28 0 00.48 5 8.07 8.07 0 001.35 3.42 3.4 3.4 0 002.43 1.42 6.38 6.38 0 003.73-1.12 13.06 13.06 0 003.74-3.19 17.22 17.22 0 002.42-4.22 22.58 22.58 0 001.35-5 44.59 44.59 0 00.48-5.53z"
                  fill="#739bff"
                  id="elziyrjxxxir"
                  style={{
                    transformOrigin: '221.015px 215.711px',
                  }}
                />
                <path
                  className="animable"
                  d="M300.16 178a1.15 1.15 0 00-.26-.19l-7.59-4.38v-36a2.49 2.49 0 00-.59-1.84 1.25 1.25 0 00-.24-.18l-8.12-4.69a1.13 1.13 0 00-1.19.08l-11.28 6.51a5.19 5.19 0 00-1.53 1.29 10.7 10.7 0 00-1.23 2.38l-22.33 56.25a15.06 15.06 0 00-1 5.5v12.19a2.45 2.45 0 00.59 1.84 1.15 1.15 0 00.26.19l8.11 4.69a1.11 1.11 0 001.18-.09l15.4-8.89V215a2.47 2.47 0 00.6 1.84l.24.18 8.12 4.69a1.13 1.13 0 001.18-.08l9.82-5.63a3.89 3.89 0 001.42-1.74 6 6 0 00.59-2.53V200l6.43-3.71a3.78 3.78 0 001.42-1.74 6 6 0 00.59-2.53v-12.2a2.51 2.51 0 00-.59-1.82z"
                  fill="#739bff"
                  id="eltlubf56p7zl"
                  style={{
                    transformOrigin: '272.773px 176.213px',
                  }}
                />
                <g id="ell4sxfk6ovae">
                  <path
                    className="animable"
                    d="M277.43 143.28v.14a11.47 11.47 0 00-1.14 2.25l-22.33 56.25a12.76 12.76 0 00-.66 2.31l-8.18-4.72a14.23 14.23 0 01.65-2.28L268.06 141a10.46 10.46 0 011.24-2.38z"
                    id="elwabbisey8n"
                    opacity={0.15}
                    style={{
                      transformOrigin: '261.275px 171.425px',
                    }}
                  />
                </g>
                <g id="elmgu0nzsnvpm">
                  <path
                    className="animable"
                    d="M253.69 221.58c-.92-.53-7.69-4.44-8-4.62a1.46 1.46 0 01-.25-.2 2.44 2.44 0 01-.6-1.84v-12.18a16.53 16.53 0 01.32-3.2l8.12 4.69a15.72 15.72 0 00-.31 3.2v12.19a2.47 2.47 0 00.59 1.83z"
                    id="elhtq7uwimq9w"
                    opacity={0.3}
                    style={{
                      transformOrigin: '249.26px 210.56px',
                    }}
                  />
                </g>
                <g id="elpx4cwpfykam">
                  <path
                    className="animable"
                    d="M278.87 168.2L278.87 189.36 272.03 185.41 278.87 168.2z"
                    id="eljdhsymx5rh"
                    opacity={0.3}
                    style={{
                      transformOrigin: '275.45px 178.78px',
                    }}
                  />
                </g>
                <g id="elt1114pkh2p">
                  <path
                    className="animable"
                    d="M278.87 189.36L267.96 195.65 272.03 185.41 278.87 189.36z"
                    id="elc18oeog8wah"
                    opacity={0.4}
                    style={{
                      transformOrigin: '273.415px 190.53px',
                    }}
                  />
                </g>
                <g id="elqte9wjursva">
                  <path
                    className="animable"
                    d="M279.09 221.54l.14.12-8-4.62a.88.88 0 01-.24-.19 2.45 2.45 0 01-.6-1.84v-2.35l8.12-4.69v11.73a2.45 2.45 0 00.58 1.84z"
                    id="elijvjbtac77k"
                    opacity={0.3}
                    style={{
                      transformOrigin: '274.805px 214.815px',
                    }}
                  />
                </g>
                <g id="elsfsctii9f0j">
                  <path
                    className="animable"
                    d="M299.81 177.75a1.14 1.14 0 00-1.07.13l-6.43 3.71v-8.17z"
                    id="elqfy1ywlribj"
                    opacity={0.15}
                    style={{
                      transformOrigin: '296.06px 177.505px',
                    }}
                  />
                </g>
                <g id="el8oup2yx12ox">
                  <path
                    className="animable"
                    d="M291.42 135.38a1.14 1.14 0 00-1.13.11L279 142a5.34 5.34 0 00-1.53 1.28l-8.12-4.69a5.29 5.29 0 011.52-1.28l11.28-6.51a1.1 1.1 0 011.19-.07z"
                    fill="#fff"
                    id="eld0tdk50agbb"
                    opacity={0.4}
                    style={{
                      transformOrigin: '280.385px 136.934px',
                    }}
                  />
                </g>
                <path
                  className="animable"
                  d="M280.51 221.64a1.08 1.08 0 01-1.42-.1 2.47 2.47 0 01-.59-1.84V208L255 221.55a1.07 1.07 0 01-1.42-.1 2.44 2.44 0 01-.6-1.84v-12.19a15.06 15.06 0 011-5.5l22.33-56.25a10.24 10.24 0 011.24-2.38A5.08 5.08 0 01279 142l11.28-6.51a1.09 1.09 0 011.42.1 2.49 2.49 0 01.59 1.84v44.16l6.43-3.71a1.09 1.09 0 011.42.1 2.51 2.51 0 01.59 1.84V192a6 6 0 01-.59 2.53 3.78 3.78 0 01-1.42 1.74l-6.41 3.73v11.73a6 6 0 01-.59 2.53 3.89 3.89 0 01-1.42 1.74zm-1.64-32.29v-21.16L268 195.65z"
                  fill="#739bff"
                  id="eljbg191mpxb8"
                  style={{
                    transformOrigin: '276.854px 178.567px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M201.22 292.43a.25.25 0 01.32 0 .57.57 0 01.14.42v2.76a1.41 1.41 0 01-.14.58.81.81 0 01-.32.39l-8 4.63a.25.25 0 01-.32 0 .57.57 0 01-.13-.42V284a1.31 1.31 0 01.13-.57.86.86 0 01.32-.39l7.89-4.56a.24.24 0 01.32 0 .53.53 0 01.13.41v2.77a1.31 1.31 0 01-.13.57.86.86 0 01-.32.39l-5.21 3v2.81l4.83-2.79a.27.27 0 01.33 0 .57.57 0 01.13.42v2.76a1.31 1.31 0 01-.13.57.91.91 0 01-.33.4l-4.83 2.79v2.92z"
                fill="#455a64"
                id="el9d3c4ooydz"
                style={{
                  transformOrigin: '197.225px 289.843px',
                }}
              />
              <path
                className="animable"
                d="M209.09 273.83a5.94 5.94 0 012-.79 2.12 2.12 0 011.5.23 2.33 2.33 0 01.95 1.31 7.61 7.61 0 01.33 2.46 11.24 11.24 0 01-.53 3.54 9.08 9.08 0 01-1.48 2.83l2.09 5a.56.56 0 01.05.25 1 1 0 01-.11.47.72.72 0 01-.26.32l-2.3 1.33c-.22.13-.38.14-.48 0a1.23 1.23 0 01-.23-.33l-1.89-4.45-1.55.89v5.58a1.33 1.33 0 01-.14.57 1 1 0 01-.32.4l-2.22 1.27a.23.23 0 01-.32 0 .54.54 0 01-.13-.42v-16.85a1.31 1.31 0 01.13-.57.9.9 0 01.32-.4zm-1.91 9l1.91-1.1a3.62 3.62 0 001.17-1.1 3.1 3.1 0 00.47-1.78c0-.73-.16-1.14-.47-1.24a1.5 1.5 0 00-1.17.26l-1.91 1.13z"
                fill="#455a64"
                id="eloqettgx1l2r"
                style={{
                  transformOrigin: '209.023px 283.883px',
                }}
              />
              <path
                className="animable"
                d="M221.27 266.79a6.12 6.12 0 012-.79 2.21 2.21 0 011.49.23 2.4 2.4 0 011 1.32A7.59 7.59 0 01226 270a11.61 11.61 0 01-.52 3.55 9.27 9.27 0 01-1.49 2.82l2.09 5a.62.62 0 01.06.26 1.15 1.15 0 01-.11.47.8.8 0 01-.27.32l-2.3 1.33c-.22.13-.38.14-.48 0a1.13 1.13 0 01-.23-.34l-1.84-4.41-1.55.9v5.58a1.33 1.33 0 01-.14.57.86.86 0 01-.32.39l-2.22 1.28a.24.24 0 01-.32 0 .57.57 0 01-.13-.42v-16.89a1.36 1.36 0 01.13-.58.86.86 0 01.32-.39zm-1.91 9l1.91-1.11a3.39 3.39 0 001.17-1.09 3.12 3.12 0 00.47-1.78c0-.73-.16-1.14-.47-1.24a1.51 1.51 0 00-1.17.26l-1.91 1.1z"
                fill="#455a64"
                id="elw4r0gmmmlr"
                style={{
                  transformOrigin: '221.184px 276.87px',
                }}
              />
              <path
                className="animable"
                d="M228 269.69a14.63 14.63 0 01.41-3 14.12 14.12 0 011-2.84 12 12 0 011.63-2.45 8.43 8.43 0 012.21-1.83 4.44 4.44 0 012.2-.71 2.44 2.44 0 011.63.57 3.56 3.56 0 011 1.64 8.84 8.84 0 01.41 2.51v4.64a14.63 14.63 0 01-.41 3 13.82 13.82 0 01-1 2.85 11.48 11.48 0 01-1.63 2.45 8.65 8.65 0 01-2.2 1.82 4.61 4.61 0 01-2.21.73 2.44 2.44 0 01-1.63-.57 3.84 3.84 0 01-1-1.66 8.84 8.84 0 01-.41-2.51v-2.27-2.37zm7.43.22v-1.06-1.18-1.15-1a5.26 5.26 0 00-.18-1.1 1.67 1.67 0 00-.41-.72 1 1 0 00-.65-.26 1.79 1.79 0 00-.91.3 3.37 3.37 0 00-.92.76 4.59 4.59 0 00-.65 1 5.74 5.74 0 00-.4 1.19 6.9 6.9 0 00-.18 1.3v4.33a2.9 2.9 0 00.58 1.83c.35.37.87.36 1.57-.05a3.63 3.63 0 001.55-1.75 7.39 7.39 0 00.62-2.44z"
                fill="#455a64"
                id="elp963cokqtvm"
                style={{
                  transformOrigin: '233.245px 268.965px',
                }}
              />
              <path
                className="animable"
                d="M246 252.5a6.12 6.12 0 012-.79 2.21 2.21 0 011.49.23 2.4 2.4 0 011 1.32 7.59 7.59 0 01.33 2.45 11.61 11.61 0 01-.52 3.55 9.44 9.44 0 01-1.49 2.83l2.09 5a.62.62 0 01.06.26 1.15 1.15 0 01-.11.47.8.8 0 01-.27.32l-2.3 1.33c-.22.13-.38.14-.48 0a1.13 1.13 0 01-.23-.34l-1.88-4.49-1.55.9v5.58a1.33 1.33 0 01-.14.57.86.86 0 01-.32.39l-2.22 1.28a.24.24 0 01-.32 0 .57.57 0 01-.13-.42v-16.82a1.39 1.39 0 01.13-.58.86.86 0 01.32-.39zm-1.91 9l1.91-1.11a3.51 3.51 0 001.18-1.09 3.12 3.12 0 00.46-1.78c0-.73-.15-1.14-.46-1.24a1.52 1.52 0 00-1.18.26l-1.91 1.1z"
                fill="#455a64"
                id="elv5tux1t18th"
                style={{
                  transformOrigin: '245.984px 262.545px',
                }}
              />
              <path
                className="animable"
                d="M170.71 321.23c1-.6 1.86-.69 2.44-.26s.87 1.36.87 2.83a8.16 8.16 0 01-.87 3.85 6.24 6.24 0 01-2.44 2.57l-2.07 1.19v4.46a1 1 0 01-.11.43.66.66 0 01-.24.31l-1 .6a.18.18 0 01-.25 0 .4.4 0 01-.1-.31V324a1 1 0 01.1-.44.69.69 0 01.25-.3zm-2.07 7.69l2-1.16a3.12 3.12 0 001.62-2.95c0-.75-.15-1.18-.44-1.3a1.42 1.42 0 00-1.18.26l-2 1.16z"
                fill="#e0e0e0"
                id="el3j3pvt2m0f6"
                style={{
                  transformOrigin: '170.48px 328.982px',
                }}
              />
              <path
                className="animable"
                d="M179.48 316.18c.13-.08.24-.09.31 0a.88.88 0 01.18.4l3.18 10.78v.13a1.13 1.13 0 01-.1.44.65.65 0 01-.25.3l-.93.54c-.18.1-.3.12-.37 0a.56.56 0 01-.14-.25l-.56-1.89-4.08 2.37-.56 2.53a2.85 2.85 0 01-.14.41.8.8 0 01-.37.38l-.93.54a.19.19 0 01-.25 0 .44.44 0 01-.1-.32.71.71 0 010-.15l3.19-14.39a2.82 2.82 0 01.18-.61.71.71 0 01.31-.35zm.71 8.35l-1.43-4.87-1.42 6.51z"
                fill="#e0e0e0"
                id="el7d5jdcxejtl"
                style={{
                  transformOrigin: '178.758px 324.512px',
                }}
              />
              <path
                className="animable"
                d="M184.16 318.64a11.36 11.36 0 01.28-2.35 10.31 10.31 0 01.75-2.13 8.27 8.27 0 011.22-1.8 7 7 0 011.68-1.36 3.7 3.7 0 011.86-.62 1.84 1.84 0 011.16.4 2 2 0 01.61 1 3.9 3.9 0 01.2 1 .87.87 0 01-.09.45.68.68 0 01-.26.29l-1 .61c-.09.05-.17.06-.22 0a.34.34 0 01-.13-.16 2.57 2.57 0 00-.13-.27 1 1 0 00-.35-.36 1.18 1.18 0 00-.63-.15 2.06 2.06 0 00-1 .33 4 4 0 00-1.56 1.71 5.72 5.72 0 00-.62 2.52V321c0 1.09.23 1.78.62 2a1.41 1.41 0 001.56-.15 4.66 4.66 0 00.88-.67 3.76 3.76 0 00.69-.92 4.22 4.22 0 00.45-1.21 6.54 6.54 0 00.17-1.54v-.16l-1.59.92a.19.19 0 01-.24 0 .42.42 0 01-.1-.32v-1.42a1 1 0 01.1-.44.76.76 0 01.24-.3l3-1.72a.17.17 0 01.24 0 .41.41 0 01.11.32v2.19a11.5 11.5 0 01-.25 2.35 9 9 0 01-.74 2.16 8.28 8.28 0 01-1.23 1.85 6.9 6.9 0 01-1.72 1.41 3.87 3.87 0 01-1.72.59 1.63 1.63 0 01-1.2-.43 2.71 2.71 0 01-.73-1.3 7.61 7.61 0 01-.28-2v-.83-.94-.94c0-.31-.04-.6-.03-.86z"
                fill="#e0e0e0"
                id="ely0cjmxyv61m"
                style={{
                  transformOrigin: '188.11px 318.161px',
                }}
              />
              <path
                className="animable"
                d="M200 315.79a.18.18 0 01.25 0 .41.41 0 01.11.32v1.41a1 1 0 01-.11.44.59.59 0 01-.25.3l-5.69 3.29a.18.18 0 01-.24 0 .41.41 0 01-.11-.32v-12.89a1 1 0 01.11-.44.63.63 0 01.24-.3l5.59-3.23a.19.19 0 01.25 0 .42.42 0 01.1.32v1.42a1 1 0 01-.1.43.67.67 0 01-.25.31l-4.19 2.41v3.18l3.91-2.26a.19.19 0 01.24 0 .43.43 0 01.11.32v1.5a1 1 0 01-.11.44.76.76 0 01-.24.3l-3.89 2.26v3.32z"
                fill="#e0e0e0"
                id="el3epvydr5xiu"
                style={{
                  transformOrigin: '197.16px 312.959px',
                }}
              />
              <path
                className="animable"
                d="M211.47 311.67c-.15.09-.26.09-.33 0l-.17-.18-3.63-6.21v8.22a1 1 0 01-.11.44.63.63 0 01-.24.3l-1.05.61a.18.18 0 01-.25 0 .41.41 0 01-.1-.32v-12.89a1 1 0 01.1-.44.59.59 0 01.25-.3l.9-.53c.15-.08.26-.09.34 0a1.26 1.26 0 01.17.18l3.63 6.21v-8.22a1 1 0 01.1-.44.65.65 0 01.25-.3l1-.61a.18.18 0 01.25 0 .45.45 0 01.1.32v12.89a1.21 1.21 0 01-.1.44.65.65 0 01-.25.3z"
                fill="#e0e0e0"
                id="elkyk9nw8t72"
                style={{
                  transformOrigin: '209.134px 306.02px',
                }}
              />
              <path
                className="animable"
                d="M214.77 301a12.56 12.56 0 01.27-2.27 10 10 0 01.71-2.12 7.92 7.92 0 011.17-1.83 6 6 0 011.66-1.39 3.31 3.31 0 011.64-.53 1.64 1.64 0 011.17.48 3 3 0 01.71 1.31 7.86 7.86 0 01.29 1.95v3.57a13.41 13.41 0 01-.28 2.27 9.78 9.78 0 01-.71 2.12 7.92 7.92 0 01-1.17 1.83 6.22 6.22 0 01-1.65 1.37 3.33 3.33 0 01-1.66.54 1.67 1.67 0 01-1.17-.47 3 3 0 01-.71-1.31 8.05 8.05 0 01-.27-1.95v-.82-.95-.95c0-.31-.01-.58 0-.85zm5.87-3.29a2.64 2.64 0 00-.6-1.88 1.21 1.21 0 00-1.46.05 3.74 3.74 0 00-1.46 1.64 6 6 0 00-.6 2.57v3.37a2.5 2.5 0 00.6 1.87c.37.31.85.29 1.46-.06a3.8 3.8 0 001.46-1.62 6.36 6.36 0 00.6-2.57v-1.7c0-.62.01-1.16 0-1.66z"
                fill="#e0e0e0"
                id="elqjh9ouwzao"
                style={{
                  transformOrigin: '218.578px 300.58px',
                }}
              />
              <path
                className="animable"
                d="M230.28 286.84a.19.19 0 01.25 0 .42.42 0 01.1.32v1.42a1 1 0 01-.1.44.69.69 0 01-.25.3l-2.28 1.36v10.94a1.13 1.13 0 01-.1.44.65.65 0 01-.25.3l-1 .61a.19.19 0 01-.25 0 .41.41 0 01-.1-.32V291.7l-2.43 1.3a.18.18 0 01-.25 0 .4.4 0 01-.1-.31v-1.42a1 1 0 01.1-.44.59.59 0 01.25-.3z"
                fill="#e0e0e0"
                id="elt0q2a7xxh6"
                style={{
                  transformOrigin: '227.075px 294.905px',
                }}
              />
              <path
                className="animable"
                d="M241.1 280.6a.18.18 0 01.24 0 .41.41 0 01.11.32v1.41a1 1 0 01-.11.44.63.63 0 01-.24.3l-4.1 2.41v3.87l3.88-2.23a.18.18 0 01.24 0 .44.44 0 01.11.32v1.42a1 1 0 01-.11.44.63.63 0 01-.24.3l-3.88 2.25v4.57a1 1 0 01-.1.44.59.59 0 01-.25.3l-1.05.61a.19.19 0 01-.25 0 .42.42 0 01-.1-.32v-12.91a1 1 0 01.1-.44.59.59 0 01.25-.3z"
                fill="#e0e0e0"
                id="el2hwjhqdrgxu"
                style={{
                  transformOrigin: '238.35px 289.186px',
                }}
              />
              <path
                className="animable"
                d="M242.86 284.79a12.58 12.58 0 01.28-2.27 9.77 9.77 0 01.7-2.12 8.27 8.27 0 011.17-1.83 6.18 6.18 0 011.66-1.39 3.32 3.32 0 011.65-.53 1.63 1.63 0 011.16.48 3.15 3.15 0 01.72 1.31 7.88 7.88 0 01.28 1.95v3.57a12.47 12.47 0 01-.28 2.27 9.77 9.77 0 01-.7 2.12 8 8 0 01-1.18 1.83 6.22 6.22 0 01-1.65 1.37 3.3 3.3 0 01-1.66.54 1.69 1.69 0 01-1.17-.47 2.92 2.92 0 01-.7-1.31 8 8 0 01-.28-1.95v-.82-1-.95c0-.31-.01-.54 0-.8zm5.87-3.29a2.55 2.55 0 00-.6-1.88c-.37-.31-.86-.29-1.46.06a3.77 3.77 0 00-1.46 1.63 6 6 0 00-.6 2.57v3.37a2.5 2.5 0 00.6 1.87c.37.31.86.29 1.46-.06a3.8 3.8 0 001.46-1.62 6 6 0 00.6-2.57v-1.7c0-.62.02-1.17 0-1.67z"
                fill="#e0e0e0"
                id="el8y2d5b9o1uj"
                style={{
                  transformOrigin: '246.668px 284.37px',
                }}
              />
              <path
                className="animable"
                d="M259.53 270a.19.19 0 01.25 0 .44.44 0 01.1.32v8.19a12.21 12.21 0 01-.23 2.37A9.77 9.77 0 01259 283a7.41 7.41 0 01-1.17 1.78 6.43 6.43 0 01-1.62 1.32 3.41 3.41 0 01-1.63.55 1.59 1.59 0 01-1.16-.43 2.75 2.75 0 01-.69-1.32 8.47 8.47 0 01-.23-2.1v-8.19a1.06 1.06 0 01.11-.44.68.68 0 01.24-.3l1-.61a.19.19 0 01.25 0 .44.44 0 01.1.32v8.08a4.7 4.7 0 00.15 1.32 1.38 1.38 0 00.4.72.83.83 0 00.62.18 2.26 2.26 0 00.79-.29 3.63 3.63 0 001.43-1.53 5 5 0 00.4-1.19 6.67 6.67 0 00.15-1.48v-8.09a1 1 0 01.11-.44.73.73 0 01.24-.31z"
                fill="#e0e0e0"
                id="elnk2bjpoynlo"
                style={{
                  transformOrigin: '256.19px 278.302px',
                }}
              />
              <path
                className="animable"
                d="M268.05 279c-.15.08-.26.09-.34 0a1.31 1.31 0 01-.17-.18l-3.63-6.2v8.22a1 1 0 01-.1.44.64.64 0 01-.25.3l-1.05.61a.18.18 0 01-.24 0 .43.43 0 01-.11-.32V269a1 1 0 01.11-.43.73.73 0 01.24-.31l.91-.52c.15-.08.26-.09.34 0l.17.18 3.63 6.2v-8.22a1 1 0 01.1-.44.76.76 0 01.24-.3l1.06-.61a.19.19 0 01.24 0 .44.44 0 01.11.32v12.89a1 1 0 01-.11.44.73.73 0 01-.24.31z"
                fill="#e0e0e0"
                id="elep9uubvp1oh"
                style={{
                  transformOrigin: '265.735px 273.372px',
                }}
              />
              <path
                className="animable"
                d="M275.2 260.91a3.79 3.79 0 011.67-.58 1.6 1.6 0 011.18.43 2.86 2.86 0 01.72 1.32 8.64 8.64 0 01.31 2.1v2.95a13.56 13.56 0 01-.31 2.45 9.36 9.36 0 01-.71 2.15 7.8 7.8 0 01-1.16 1.78 6.55 6.55 0 01-1.63 1.33l-3.27 1.89a.18.18 0 01-.24 0 .43.43 0 01-.11-.32V263.5a1 1 0 01.11-.44.58.58 0 01.24-.3zm2.13 4.28a4.92 4.92 0 00-.16-1.1 1.66 1.66 0 00-.4-.72.89.89 0 00-.67-.25 1.93 1.93 0 00-1 .32l-1.74 1v9l1.8-1a3.22 3.22 0 00.92-.76 4.19 4.19 0 00.65-1 5.55 5.55 0 00.4-1.19 7.84 7.84 0 00.16-1.29c.07-1.06.07-2.05.04-3.01z"
                fill="#e0e0e0"
                id="elt2ngbkp8tom"
                style={{
                  transformOrigin: '275.364px 268.552px',
                }}
              />
            </g>
          </g>
          <g
            className="animable"
            id="freepik--speech-bubble--inject-14"
            style={{
              transformOrigin: '394.472px 98.8468px',
            }}
          >
            <g
              className="animable"
              id="freepik--speech-bubble--inject-14"
              style={{
                transformOrigin: '394.472px 98.8468px',
              }}
            >
              <g
                className="animable"
                id="freepik--speech-bubble--inject-14"
                style={{
                  transformOrigin: '394.472px 98.8468px',
                }}
              >
                <path
                  className="animable"
                  d="M421.33 48.71l-50.21 29a2.85 2.85 0 00-1.3 2.24v64.2a2.82 2.82 0 001.3 2.23l4.64 2.6a2.88 2.88 0 002.59 0l50.22-29a2.89 2.89 0 001.29-2.24V53.52a2.8 2.8 0 00-1.3-2.22l-4.63-2.6a2.9 2.9 0 00-2.6.01z"
                  fill="#739bff"
                  id="elfftr0ygvbp"
                  style={{
                    transformOrigin: '399.84px 98.8424px',
                  }}
                />
                <path
                  className="animable"
                  d="M377.06 148.22V84a2.86 2.86 0 011.29-2.24l50.22-29c.71-.41 1.29-.08 1.29.74v64.21a2.89 2.89 0 01-1.29 2.24l-50.22 29c-.72.43-1.29.05-1.29-.73z"
                  fill="#739bff"
                  id="eli1s51574gfq"
                  style={{
                    transformOrigin: '403.46px 100.857px',
                  }}
                />
                <g id="eld436ei8yr8">
                  <path
                    className="animable"
                    d="M378.35 149a3 3 0 01-2.6 0l-4.63-2.6a2.83 2.83 0 01-1.3-2.22V80a2.68 2.68 0 01.41-1.32l7.21 4.11a2.56 2.56 0 00-.38 1.27v64.2c0 .74.53 1.15 1.29.74z"
                    id="el9s7qyzn82x4"
                    opacity={0.2}
                    style={{
                      transformOrigin: '374.085px 113.988px',
                    }}
                  />
                </g>
                <g id="ellrk204xjdva">
                  <path
                    className="animable"
                    d="M429.84 53.29c-.1-.65-.63-.88-1.27-.51l-50.22 29a2.66 2.66 0 00-.91 1l-7.21-4.11a2.54 2.54 0 01.89-.92l50.22-29a2.88 2.88 0 012.59 0l4.63 2.59a2.86 2.86 0 011.28 1.95z"
                    fill="#fff"
                    id="el31qof69yn1t"
                    opacity={0.4}
                    style={{
                      transformOrigin: '400.035px 65.6112px',
                    }}
                  />
                </g>
                <path
                  className="animable"
                  d="M369.82 99.3l-10.4 10.58a1.14 1.14 0 00.19 1.77c.22.14 7.2 4.15 7.2 4.15l10.25-12.33z"
                  fill="#739bff"
                  id="elew0bmvzno6g"
                  style={{
                    transformOrigin: '368.072px 107.55px',
                  }}
                />
                <g id="el8ya7un7qwju">
                  <path
                    className="animable"
                    d="M369.82 99.3l-10.4 10.58a1.14 1.14 0 00.19 1.77c.22.14 7.2 4.15 7.2 4.15l10.25-12.33z"
                    id="el2kgd9h7gdhb"
                    opacity={0.1}
                    style={{
                      transformOrigin: '368.072px 107.55px',
                    }}
                  />
                </g>
                <path
                  className="animable"
                  d="M377.06 103.47l-10.41 10.58a1.15 1.15 0 001 1.94l9.43-1.36c.99 0 .99-11.16-.02-11.16z"
                  fill="#739bff"
                  id="elae1ndm265un"
                  style={{
                    transformOrigin: '372.071px 109.737px',
                  }}
                />
              </g>
              <g
                className="animable"
                id="freepik--dead-emoji--inject-14"
                style={{
                  transformOrigin: '403.462px 98.614px',
                }}
              >
                <path
                  className="animable"
                  d="M395 101a1 1 0 01-.69-.28l-7.46-7.18a1 1 0 111.38-1.44l7.47 7.18a1 1 0 010 1.42 1 1 0 01-.7.3z"
                  fill="#455a64"
                  id="eleuxsk5r9z3"
                  style={{
                    transformOrigin: '391.241px 96.3844px',
                  }}
                />
                <path
                  className="animable"
                  d="M387.54 105.34a1.11 1.11 0 01-.43-.09 1 1 0 01-.47-1.33l7.46-15.8a1 1 0 011.33-.48 1 1 0 01.48 1.33l-7.46 15.8a1 1 0 01-.91.57z"
                  fill="#455a64"
                  id="elzla4uwnxsp"
                  style={{
                    transformOrigin: '391.274px 96.4426px',
                  }}
                />
                <path
                  className="animable"
                  d="M419.38 87a1 1 0 01-.7-.28l-7.46-7.18a1 1 0 010-1.41 1 1 0 011.42 0l7.46 7.18a1 1 0 01-.69 1.72z"
                  fill="#455a64"
                  id="el3sqg6iz28dc"
                  style={{
                    transformOrigin: '415.668px 82.4321px',
                  }}
                />
                <path
                  className="animable"
                  d="M411.91 91.27a1 1 0 01-.42-.09 1 1 0 01-.48-1.34l7.46-15.79a1 1 0 111.81.85l-7.46 15.8a1 1 0 01-.91.57z"
                  fill="#455a64"
                  id="elixawjzisd2r"
                  style={{
                    transformOrigin: '415.647px 82.364px',
                  }}
                />
                <path
                  className="animable"
                  d="M387.21 123.24a1 1 0 01-.87-.5 1 1 0 01.37-1.36l32.5-18.77a1 1 0 011 1.74l-32.5 18.76a1 1 0 01-.5.13z"
                  fill="#455a64"
                  id="elqc4gj2t0u8k"
                  style={{
                    transformOrigin: '403.462px 112.858px',
                  }}
                />
                <path
                  className="animable"
                  d="M409.86 123.77a3.13 3.13 0 01-1.56-.41 4.16 4.16 0 01-1.78-3.77v-9.07a1 1 0 112 0v9.07a2.3 2.3 0 00.78 2 1.83 1.83 0 001.78-.25 8.34 8.34 0 003.56-6.48v-9.07a1 1 0 012 0v9.07a10.26 10.26 0 01-4.56 8.21 4.48 4.48 0 01-2.22.7z"
                  fill="#455a64"
                  id="eloy220x31qe"
                  style={{
                    transformOrigin: '411.573px 114.28px',
                  }}
                />
                <path
                  className="animable"
                  d="M411.58 117.93a1 1 0 01-1-1v-8.76a1 1 0 012 0v8.76a1 1 0 01-1 1z"
                  fill="#455a64"
                  id="el6pze55lq1lx"
                  style={{
                    transformOrigin: '411.58px 112.55px',
                  }}
                />
              </g>
            </g>
          </g>
          <g
            className="animable"
            id="freepik--Character--inject-14"
            style={{
              transformOrigin: '391.803px 295.296px',
            }}
          >
            <g
              className="animable"
              id="freepik--character--inject-14"
              style={{
                transformOrigin: '391.803px 295.296px',
              }}
            >
              <path
                className="animable"
                d="M381.29 379.6c0-1.53-.4-10-.88-17.8-.5-8.21-.49-15.72-.49-15.72l13.88 10.36c-3 18.44-3.31 22.51-3.36 25.53l-.34.28a2.53 2.53 0 01.08.77c0 3.58-4 5.52-7.17 7.92a58.2 58.2 0 01-8.5 5.6c-2.29 1.16-6.94 1.28-7.52-.19 4.42-2.77 9.7-6.28 12.74-9.64 1.45-1.6 1.46-3.97 1.56-7.11z"
                fill="#ffa8a7"
                id="elsremy3v1egt"
                style={{
                  transformOrigin: '380.395px 371.756px',
                }}
              />
              <path
                className="animable"
                d="M361.58 400.9a2.79 2.79 0 00.78 2.84 12.85 12.85 0 009.66 1.82c4.75-.84 7.27-2.31 9.11-4s4.41-4.08 6.55-4.66a13 13 0 004.73-2.2c.61-.65.39-3.4.39-3.4z"
                fill="#263238"
                id="elb63rwhr9tek"
                style={{
                  transformOrigin: '377.152px 398.566px',
                }}
              />
              <path
                className="animable"
                d="M390.48 380.69a.84.84 0 01.67.69c.18.76.45 3 .82 4.19a22.27 22.27 0 01.79 6.68c-.2 1.43-3.42 2.56-5.48 3.46a26.79 26.79 0 00-6.57 4.6 19.22 19.22 0 01-9.9 4.23c-3.68.14-7.89-.85-8.92-2.51-1.28-2.06-.41-3.33 4.93-6.12 1-.53 4.54-2.85 5.74-3.69 3.25-2.26 6.43-5.35 7.8-9.16a2 2 0 01.73-1.17 1.71 1.71 0 011.05-.15 8.81 8.81 0 012.67.67c.75.31 1.81.67 1.84 1.61a3.12 3.12 0 01-.16 1c-.06.2-.1.46.07.56s.37 0 .51-.17a14 14 0 001.39-1.83 5.51 5.51 0 01.82-.92c.28-.25.66-.38.91-.65a1.79 1.79 0 00.29-1.32z"
                fill="#739bff"
                id="el4cbbt8pt9tk"
                style={{
                  transformOrigin: '377.071px 392.622px',
                }}
              />
              <g id="elzhb6tf59yfj">
                <path
                  className="animable"
                  d="M390.48 380.69a.84.84 0 01.67.69c.18.76.45 3 .82 4.19a22.27 22.27 0 01.79 6.68c-.2 1.43-3.42 2.56-5.48 3.46a26.79 26.79 0 00-6.57 4.6 19.22 19.22 0 01-9.9 4.23c-3.68.14-7.89-.85-8.92-2.51-1.28-2.06-.41-3.33 4.93-6.12 1-.53 4.54-2.85 5.74-3.69 3.25-2.26 6.43-5.35 7.8-9.16a2 2 0 01.73-1.17 1.71 1.71 0 011.05-.15 8.81 8.81 0 012.67.67c.75.31 1.81.67 1.84 1.61a3.12 3.12 0 01-.16 1c-.06.2-.1.46.07.56s.37 0 .51-.17a14 14 0 001.39-1.83 5.51 5.51 0 01.82-.92c.28-.25.66-.38.91-.65a1.79 1.79 0 00.29-1.32z"
                  id="elvyjzw6t2hif"
                  opacity={0.3}
                  style={{
                    transformOrigin: '377.071px 392.622px',
                  }}
                />
              </g>
              <g id="elxhu90r13w2j">
                <path
                  className="animable"
                  d="M374.08 396.25c-3.33 1.52-1.85 2.08-.9 2.18s6.52-3.52 9.88-6.45 5.64-6.3 6.94-7.42c.49-.42 1-.93 1.47-1.4-.13-.74-.23-1.42-.32-1.78a.84.84 0 00-.67-.69 1.79 1.79 0 01-.29 1.28c-.25.27-.63.4-.91.65a5.51 5.51 0 00-.82.92 14 14 0 01-1.39 1.83c-2.79 3.91-9.66 9.36-12.99 10.88z"
                  id="elm4q0vktf0x"
                  opacity={0.2}
                  style={{
                    transformOrigin: '381.744px 389.561px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M373.4 397.91a.32.32 0 00.21-.08.35.35 0 000-.48 8.12 8.12 0 00-6.34-2.16.34.34 0 00.1.67 7.54 7.54 0 015.74 1.94.3.3 0 00.29.11z"
                fill="#ebebeb"
                id="eli6umq8vdpbp"
                style={{
                  transformOrigin: '370.357px 396.533px',
                }}
              />
              <path
                className="animable"
                d="M376.28 396a.34.34 0 00.21-.08.34.34 0 000-.48 8.09 8.09 0 00-6.34-2.16.34.34 0 00-.28.39.35.35 0 00.39.28 7.5 7.5 0 015.73 1.94.32.32 0 00.29.11z"
                fill="#ebebeb"
                id="elqj52pzw7ix8"
                style={{
                  transformOrigin: '373.227px 394.622px',
                }}
              />
              <path
                className="animable"
                d="M379.16 394.08a.34.34 0 00.21-.08.34.34 0 000-.48 8.12 8.12 0 00-6.33-2.16.34.34 0 00-.28.39.33.33 0 00.38.28 7.5 7.5 0 015.73 1.94.32.32 0 00.29.11z"
                fill="#ebebeb"
                id="elgphagjngs06"
                style={{
                  transformOrigin: '376.112px 392.703px',
                }}
              />
              <path
                className="animable"
                d="M381.81 392a.32.32 0 00.21-.08.35.35 0 000-.48 8.12 8.12 0 00-6.34-2.16.33.33 0 00-.28.39.34.34 0 00.38.28 7.54 7.54 0 015.74 1.94.3.3 0 00.29.11z"
                fill="#ebebeb"
                id="elf2beg1uzge5"
                style={{
                  transformOrigin: '378.755px 390.623px',
                }}
              />
              <path
                className="animable"
                d="M384.41 389.88a.32.32 0 00.2-.08.33.33 0 000-.47 8.25 8.25 0 00-6.92-2.17.33.33 0 10.11.66 7.65 7.65 0 016.3 1.95.32.32 0 00.31.11z"
                fill="#ebebeb"
                id="elljy1iwts68f"
                style={{
                  transformOrigin: '381.059px 388.476px',
                }}
              />
              <path
                className="animable"
                d="M409.29 359.54l15.18-.33c-.19 10.13-1.76 21.39-2 30.9-.05 1.79.09 13.9-.57 17.59-1 5.54-7.56 4.81-7.92 1.5s.35-17.46.33-18.91c0-6.1-2.86-16.39-4.4-27.33-.06-.53-.55-2.9-.62-3.42z"
                fill="#ffa8a7"
                id="elxnaxf3rbh7q"
                style={{
                  transformOrigin: '416.88px 385.493px',
                }}
              />
              <path
                className="animable"
                d="M411.53 411.52c-.12 3.25.17 5.44 1.14 7.45a4.78 4.78 0 005.31 2.47c2.25-.34 5.2-1.56 6.1-4.29a17.91 17.91 0 00.75-7.7z"
                fill="#263238"
                id="elk11458m6tjc"
                style={{
                  transformOrigin: '418.232px 415.505px',
                }}
              />
              <path
                className="animable"
                d="M422.52 388.94c.9.16.74 4.53.84 8.93.11 4.71 1.32 6.77 1.44 10.64.15 4.42-.27 6.35-2.05 8.84s-7.45 4.56-9.75.52c-1.88-3.29-1.64-6.72-1-11.06a108.91 108.91 0 001.27-11.07c.15-3.29.23-6.48 1.05-6.76v1.57c0 .47-.07 2.15.44 2.21a7.12 7.12 0 00.12-1.23 1.55 1.55 0 01.35-1 1.74 1.74 0 011.05-.35A25 25 0 01419 390a12.21 12.21 0 011.35.07 3.35 3.35 0 011.13.28.78.78 0 01.45.49 1.4 1.4 0 010 .5 3.47 3.47 0 000 .91c0 .13.09.29.22.28s.16-.15.17-.25c.06-.53 0-.92.06-1.54v-.95c0-.28.13-.56.14-.85z"
                fill="#739bff"
                id="elf80enjh6chv"
                style={{
                  transformOrigin: '418.18px 404.545px',
                }}
              />
              <g id="elbvvv70ezoq">
                <path
                  className="animable"
                  d="M422.52 388.94c.9.16.74 4.53.84 8.93.11 4.71 1.32 6.77 1.44 10.64.15 4.42-.27 6.35-2.05 8.84s-7.45 4.56-9.75.52c-1.88-3.29-1.64-6.72-1-11.06a108.91 108.91 0 001.27-11.07c.15-3.29.23-6.48 1.05-6.76v1.57c0 .47-.07 2.15.44 2.21a7.12 7.12 0 00.12-1.23 1.55 1.55 0 01.35-1 1.74 1.74 0 011.05-.35A25 25 0 01419 390a12.21 12.21 0 011.35.07 3.35 3.35 0 011.13.28.78.78 0 01.45.49 1.4 1.4 0 010 .5 3.47 3.47 0 000 .91c0 .13.09.29.22.28s.16-.15.17-.25c.06-.53 0-.92.06-1.54v-.95c0-.28.13-.56.14-.85z"
                  id="el1govplg02k1"
                  opacity={0.3}
                  style={{
                    transformOrigin: '418.18px 404.545px',
                  }}
                />
              </g>
              <g id="el5bd4cg9szwf">
                <path
                  className="animable"
                  d="M421.65 410.35c-.14 1.58 1.47 1.2 1.76-1s-.43-7.63-.05-11.46c-.1-4.4.06-8.77-.84-8.93v.17l-.09 2.22c0 .32 0 .61-.05.95-.28 3.22-.43 9.48-.44 12.45a54 54 0 01-.29 5.6z"
                  id="el3vwa78g4mif"
                  opacity={0.2}
                  style={{
                    transformOrigin: '422.561px 400.137px',
                  }}
                />
              </g>
              <g id="elwoi1n7w68rg">
                <path
                  className="animable"
                  d="M415.32 410.38a54.08 54.08 0 01-.32-5.62c0-2.95-.22-9.14-.53-12.38a8.07 8.07 0 01-.14-1.83v-1.47a.38.38 0 010-.1c-.59.22-.8 2-.92 4.15 0 1.28 0 2.86.14 4.78.42 3.82-.26 9.27 0 11.49s1.92 2.6 1.77.98z"
                  id="elvswwqsconl8"
                  opacity={0.2}
                  style={{
                    transformOrigin: '414.37px 400.178px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M414.73 410.49h.13a10.63 10.63 0 017-.05.35.35 0 00.43-.2.34.34 0 00-.2-.43 11.25 11.25 0 00-7.52 0 .34.34 0 00-.18.44.34.34 0 00.34.24z"
                fill="#ebebeb"
                id="el5b8j492cjsb"
                style={{
                  transformOrigin: '418.337px 409.827px',
                }}
              />
              <path
                className="animable"
                d="M414.31 407a.2.2 0 00.11 0 13.35 13.35 0 017.87-.05.33.33 0 00.43-.21.34.34 0 00-.21-.43 13.73 13.73 0 00-8.32.06.34.34 0 00-.2.43.33.33 0 00.32.2z"
                fill="#ebebeb"
                id="elv885xgsge5"
                style={{
                  transformOrigin: '418.354px 406.351px',
                }}
              />
              <path
                className="animable"
                d="M422.39 403.65a.33.33 0 00.3-.2.34.34 0 00-.16-.45 11.51 11.51 0 00-8.3 0 .33.33 0 00-.18.43.34.34 0 00.43.19s4.12-1.64 7.77 0a.32.32 0 00.14.03z"
                fill="#ebebeb"
                id="el4spr8e9whfu"
                style={{
                  transformOrigin: '418.374px 402.938px',
                }}
              />
              <path
                className="animable"
                d="M422.45 400.56a.34.34 0 00.15-.64 10.43 10.43 0 00-8.46-.06.34.34 0 00-.16.45.34.34 0 00.45.15 9.92 9.92 0 017.88.07.32.32 0 00.14.03z"
                fill="#ebebeb"
                id="el03269qyfrfdg"
                style={{
                  transformOrigin: '418.364px 399.777px',
                }}
              />
              <path
                className="animable"
                d="M422.51 397.08a.34.34 0 00.3-.18.33.33 0 00-.15-.45c-4-2-8.35-.06-8.53 0a.34.34 0 00-.16.45.33.33 0 00.44.17s4.22-1.87 7.95 0a.27.27 0 00.15.01z"
                fill="#ebebeb"
                id="eleipeiam27q"
                style={{
                  transformOrigin: '418.393px 396.324px',
                }}
              />
              <path
                className="animable"
                d="M418.1 261c5.41 14.8 5.51 24 4.65 39.56-.79 14.25-2.08 26.8-2.08 26.8.22 2.53 3.76 7.45 4.25 18.63a181.77 181.77 0 01-1 23.55s-7 2.58-12.92.05c0 0-6.17-26.72-7.87-39.79-1.48-11.41-3.65-24.88-3.65-24.88l-3.87 24.88a61.62 61.62 0 01.6 11.37c-.5 6.08-3.46 22.41-3.46 22.41s-7.35 2.65-12.35-1.75c0 0-1.52-24.48-2.25-33.74-1-12.41-.77-46.43 2.14-63.86z"
                fill="#455a64"
                id="el4h9stvnd4jp"
                style={{
                  transformOrigin: '401.29px 315.851px',
                }}
              />
              <path
                className="animable"
                d="M399.49 304.89l-2.65-20.61s-9.84-1.28-14.28-5.44a16.11 16.11 0 0011.59 7.27l3.62 19.24-2.15 24.42z"
                fill="#263238"
                id="elj7qfwynz9m"
                style={{
                  transformOrigin: '391.025px 304.305px',
                }}
              />
              <path
                className="animable"
                d="M402.1 229.12l.2-.09c12.65-6 17.73-20 17.11-33.3a35 35 0 00-2.59-12.32 20.88 20.88 0 00-8-9.57 20 20 0 00-9.15-2.75c-2.93-.19-6.72-.14-9.48 1a3.28 3.28 0 01-2.71.09 9.21 9.21 0 00-3-.18 10.43 10.43 0 00-6.88 4c-2.33 2.87-2.61 7.16-1.81 10.64.38 1.61 2.62 4 2.53 5.49-.14 2.23-1.76 4-3.54 5.92s-3.75 3.36-4.61 6.19c-.74 2.43-.87 7.58 4.57 9.56-7.92 10.47-.11 16.15 4.21 17.65a20.89 20.89 0 009 1.09c4.83-.54 9.73-1.36 14.15-3.42z"
                fill="#37474f"
                id="el83af4f20lu9"
                style={{
                  transformOrigin: '394.631px 201.823px',
                }}
              />
              <path
                className="animable"
                d="M374.75 246.9c4.66-4.79 13.07-15.64 13.07-15.64l4.76-16.48c.12 0-2.42.05-3.19 0-5.14.34-6.66.78-9.86 4.28-2.54 2.78-12.23 16-15.6 20.47L355 228.15c-2.14-3.24-1.8-6.87-2.91-9.51s-2.91-3.82-4.35-6.21-1.78-4-3-2.73.18 4.52.36 5.27 2 3-1 1.83-7.67-6.67-8.87-7.8-1.83.62-1.56 2-1 4.49-.55 6.77a9.28 9.28 0 003.18 5.87c2.18 2.19 7.49 4.87 9.57 7.74s6.51 11.79 9.23 17.17c3.44 6.83 6.38 9.08 10.25 6.78s7.65-6.66 9.4-8.43z"
                fill="#ffa8a7"
                id="el655az7lwad"
                style={{
                  transformOrigin: '362.803px 232.42px',
                }}
              />
              <path
                className="animable"
                d="M363.93 239.54a10.9 10.9 0 013.25 6s1-3.3-2.48-7z"
                fill="#f28f8f"
                id="elnnjrvndc5kk"
                style={{
                  transformOrigin: '365.622px 242.04px',
                }}
              />
              <path
                className="animable"
                d="M380.8 243.85c-6.32-5.2-4.24-12-1.93-16.55 4.62-9.13 9.42-12.72 11.42-12.68l12.59.11c6 .82 10.67.41 12.12.76 3.7.87 3.78 3.92 3.92 7.86.16 4.32.62 3.86-.51 11 0 0-1.71 5.53-2.38 8s-1.93 6.31-.91 10.31c.39 1.54 1.43 3 3 7.31a62.59 62.59 0 013.21 10.82s-8.63 8-26.56 5.42C381.59 274.33 379 270 379 270l2.47-15.39c-.33-5.41-.42-7.36-.67-10.76z"
                fill="#739bff"
                id="ely6xjkqhzzfl"
                style={{
                  transformOrigin: '398.964px 245.671px',
                }}
              />
              <g id="elzu58kl3bf08">
                <path
                  className="animable"
                  d="M389 242.49s5.17 4.16 11.19 2.14a10.23 10.23 0 007-7.23s.51 6.85-7.07 9a9.89 9.89 0 01-11.12-3.91z"
                  id="el7hrmhimktgo"
                  opacity={0.1}
                  style={{
                    transformOrigin: '398.099px 242.121px',
                  }}
                />
              </g>
              <path
                className="animable"
                d="M434.15 202.06c-2.68-3.34-10-11.69-11.35-13.36a7.74 7.74 0 00-3.16-2.38 8.11 8.11 0 01-2.94-1.87c-.52-.51-1.65-2.68-2.11-3.25a20.5 20.5 0 00-4.81-4.48c-2.12-1.49-4.13-2.18-6.31-3.59-1.28-.83-2.84-1.66-1.44-3.06a3.12 3.12 0 011.6-.87c3-.56 6.18.38 9.9 1.35a45.75 45.75 0 014.71 1.47 9.15 9.15 0 012.49 1.27 10.69 10.69 0 012.22 3c1.74 2.84 5.72 4.74 8.2 6.91 2.9 2.55 5.76 4.68 9.07 7.49a62.42 62.42 0 019 8.95c2 2.7 1.43 4.32.61 5.52-4.13 6.09-13.33 13-16.6 15.7-3.49 2.88-5.94 4.68-9.06 7.47a78 78 0 00-6.2 6.59 1.37 1.37 0 01-1.7.39c-3.61-2-6-12-3.22-18.21.71-1.59 1.45-1.65 1.45-1.65 5.7-4 19.65-13.35 19.65-13.35"
                fill="#ffa8a7"
                id="el2t98tvz6j6i"
                style={{
                  transformOrigin: '426.031px 202.244px',
                }}
              />
              <path
                className="animable"
                d="M434.15 202.06a14.24 14.24 0 006.51 4.65s-3.45.82-8.08-3.49z"
                fill="#f28f8f"
                id="elnrhpcjfend"
                style={{
                  transformOrigin: '436.62px 204.416px',
                }}
              />
              <path
                className="animable"
                d="M382.73 195.55c.06 9.93 3.23 12.44 4.83 13.17s4.73.36 7.76-.09l-.1 6s-3.56 3.59-3.34 6.32 5.43 3.14 9.39.54a30.11 30.11 0 005.89-5.13 2.14 2.14 0 00.52-1.37l.24-14s1.63 1.79 4.6-.17a5.4 5.4 0 001.52-7.83 4 4 0 00-6.08.62c-.91 1.7-.83 2.89-2 2.69s-1.28-1.53-1.36-2.49-.05-1.26-.12-2.51c-2.94-.63-6-4.72-6.31-7.7a14 14 0 01-6.39 1.44c-3.28-.23-5-.88-6.59-3.26a6.64 6.64 0 00-.92 1.77 21.87 21.87 0 00-1 3.89 51.76 51.76 0 00-.54 8.11z"
                fill="#ffa8a7"
                id="el3aox1dyc79w"
                style={{
                  transformOrigin: '398.916px 202.507px',
                }}
              />
              <path
                className="animable"
                d="M395.32 208.63c3.2-.36 9.8-2.13 10.87-4.71a6.74 6.74 0 01-2.36 3.27c-2 1.65-8.54 3.43-8.54 3.43z"
                fill="#f28f8f"
                id="eliiqdae2r3lm"
                style={{
                  transformOrigin: '400.74px 207.27px',
                }}
              />
              <path
                className="animable"
                d="M392.1 203.28a1.31 1.31 0 101.33-1.28 1.31 1.31 0 00-1.33 1.28z"
                fill="#b16668"
                id="el048yxd6bjuq"
                style={{
                  transformOrigin: '393.41px 203.31px',
                }}
              />
              <path
                className="animable"
                d="M393.77 193.51a1.37 1.37 0 101.47-1.33 1.4 1.4 0 00-1.47 1.33z"
                fill="#263238"
                id="el2g6xmlkipqf"
                style={{
                  transformOrigin: '395.139px 193.547px',
                }}
              />
              <path
                className="animable"
                d="M384.5 192.92a1.26 1.26 0 001.16 1.37 1.2 1.2 0 001.33-1.21 1.25 1.25 0 10-2.49-.16z"
                fill="#263238"
                id="el1zt1dwu5ycf"
                style={{
                  transformOrigin: '385.747px 192.985px',
                }}
              />
              <path
                className="animable"
                d="M390.91 191.63L389.92 199.92 385.67 198.16 390.91 191.63z"
                fill="#f28f8f"
                id="elztjqjnfsges"
                style={{
                  transformOrigin: '388.29px 195.775px',
                }}
              />
              <path
                className="animable"
                d="M398.74 189.93l-2.47-2.35a1.78 1.78 0 00.07 2.47 1.67 1.67 0 002.4-.12z"
                fill="#263238"
                id="el0hkanwm4z3ef"
                style={{
                  transformOrigin: '397.273px 189.041px',
                }}
              />
              <path
                className="animable"
                d="M386.38 186.82l-2.74 2.07a1.66 1.66 0 002.37.39 1.81 1.81 0 00.37-2.46z"
                fill="#263238"
                id="el1ll8rut1icx"
                style={{
                  transformOrigin: '385.172px 188.217px',
                }}
              />
            </g>
          </g>
          <defs>
            <filter height="200%" id="active">
              <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="DILATED" />
              <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />
              <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
              <feMerge>
                <feMergeNode in="OUTLINE" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter height="200%" id="hover">
              <feMorphology in="SourceAlpha" operator="dilate" radius={2} result="DILATED" />
              <feFlood floodColor="red" floodOpacity={0.5} result="PINK" />
              <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
              <feMerge>
                <feMergeNode in="OUTLINE" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
              <feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            </filter>
          </defs>
        </svg>
      </div>
      <h2 className={'my-12 text-5xl font-extrabold text-text-100'}>404 NOT FOUND</h2>
      <BaseButton onClick={() => router.push('/')}>Go to Home</BaseButton>
    </div>
  );
}
