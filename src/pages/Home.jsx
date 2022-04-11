import React from 'react';
import Myfoto from '../images/me1.png';
import SkillCard from '../components/SkillCard';

const Home = () => {
    return (
        <main className="pt-5 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex justify-center w-full mb-8 md:hidden">
                    <img src={Myfoto} className="w-2/3" alt="" />
                </div>
                <div className="flex flex-col justify-end pb-8 pr-0 font-mono md:col-span-2 md:pb-16 text-dark dark:text-light md:space-y-5 md:pr-5 lg:pr-20 xl:pr-40">
                    <div className="space-y-0 md:space-y-4">
                        <h1 className="text-xl font-bold lg:text-2xl">
                            Hello I'm
                        </h1>
                        <h1 className="text-4xl font-bold lg:text-5xl">
                            Edi Kurniawan
                        </h1>
                        <h1 className="text-xl font-bold lg:text-2xl">
                            a Web Developer
                        </h1>
                        <p className="pt-2 font-sans text-base tracking-wider md:pt-0 md:text-lg">
                            I am a hard worker with experience as a web
                            developer. I love coding so I study every day to
                            improve my skills regarding web development. My
                            experience is related to web development for about 1
                            year using several technologies to build websites
                            from clients request.
                        </p>
                    </div>
                    <div className="flex justify-center pt-5 space-x-6 text-base font-medium md:justify-start md:text-lg md:pt-10">
                        <a
                            href="https://drive.google.com/u/2/uc?id=1ZSd_Y9xnBtL_nSUjMmIEePklriAS-Il7&export=download"
                            className="px-4 py-2 text-white border-2 dark:text-dark bg-dark dark:bg-light md:px-8 border-dark dark:border-light hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
                            <i className="fas fa-file-download"></i>
                            &nbsp; Resume
                        </a>
                    </div>
                </div>
                <div className="hidden w-full md:block justify-self-end">
                    <img loading="lazy" src={Myfoto} className="" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <span className="font-mono text-base font-bold md:text-lg text-dark dark:text-light">
                    Connect with me:
                </span>
                <div className="space-x-4">
                    <a
                        href="https://www.linkedin.com/in/edikurniawan-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '9.5px',
                                paddingRight: '9.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://github.com/edikurniawan-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '8px',
                                paddingRight: '8px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-github"></i>
                    </a>
                    <a
                        href="https://twitter.com/edikurnia_dev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '7.5px',
                                paddingRight: '7.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/edi.kurniawan27/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl md:text-3xl">
                        <i
                            style={{
                                paddingLeft: '9.5px',
                                paddingRight: '9.5px',
                                paddingTop: '8px',
                                paddingBottom: '8px',
                            }}
                            className="text-white border-2 border-dark dark:border-light bg-dark dark:bg-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <h1 className="mt-10 font-mono text-2xl font-bold text-center underline md:mt-20 md:text-3xl text-dark dark:text-light">
                Skills
            </h1>
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-7 md:gap-10">
                <SkillCard icon="fab fa-js" iconName="Javascript" />
                <SkillCard icon="fab fa-react" iconName="ReactJS" />
                <SkillCard icon="fab fa-node-js" iconName="NodeJS" />
                <SkillCard icon="fab fa-laravel" iconName="Laravel" />
                <div className="bg-gray hover:bg-dark text-dark hover:text-light">
                    <div className="flex flex-col items-center justify-between h-full pt-3 border-2 md:pt-6 border-dark dark:hover:border-light">
                        <div className="px-8 text-6xl md:text-8xl">
                            <svg
                                width="1.3em"
                                height="1em"
                                viewBox="0 0 675 675"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_101_4)">
                                    <path
                                        d="M335.391 1.83521L353.405 35.6696C357.455 41.9133 361.842 47.4399 367.01 52.5868C382.092 67.6688 396.415 83.468 409.282 100.385C439.805 140.463 460.392 184.971 475.095 233.107C483.912 262.512 488.7 292.676 489.059 323.177C490.535 414.366 459.274 492.666 396.246 557.74C385.952 568.034 374.941 577.568 363.129 586.048C356.885 586.048 353.932 581.259 351.359 576.851C346.57 568.772 343.638 559.554 342.162 550.378C339.947 539.346 338.491 528.314 339.209 516.923V511.777C338.702 510.68 333.197 4.42974 335.391 1.83521Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M335.391 0.717144C334.652 -0.759419 333.914 0.35855 333.176 1.07574C333.534 8.45855 330.961 15.0398 326.932 21.3257C322.502 27.5695 316.638 32.3578 310.753 37.5046C278.058 65.8125 252.323 100.005 231.715 138.248C204.293 189.717 190.16 244.877 186.152 302.948C184.317 323.895 192.776 397.807 199.378 419.133C217.392 475.748 249.75 523.188 291.663 564.363C301.957 574.277 312.968 583.474 324.359 592.312C327.67 592.312 328.029 589.359 328.788 587.166C330.24 582.471 331.347 577.677 332.1 572.822L339.483 517.683L335.391 0.717144Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M353.405 608.449C354.143 600.012 358.193 593.009 362.602 586.027C358.172 584.192 354.881 580.542 352.308 576.471C350.093 572.801 348.258 568.392 346.823 564.342C341.677 548.902 340.58 532.702 339.103 516.924V507.368C337.268 508.845 336.888 521.332 336.888 523.188C335.815 539.865 333.602 556.448 330.265 572.822C329.168 579.446 328.43 586.048 324.359 591.933C324.359 592.671 324.359 593.41 324.717 594.506C331.341 613.997 333.155 633.846 334.273 654.075V661.458C334.273 670.275 333.914 668.419 341.234 671.372C344.187 672.469 347.477 672.849 350.431 675.042C352.645 675.042 353.004 673.207 353.004 671.731L351.907 659.602V625.767C351.548 619.861 352.645 613.997 353.384 608.471L353.405 608.449Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_101_4">
                                        <rect
                                            width="675"
                                            height="675"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <span className="pt-2 pb-2 font-mono text-lg md:pb-5">
                            MongoDB
                        </span>
                    </div>
                </div>
                <div className="bg-gray hover:bg-dark text-dark hover:text-light">
                    <div className="flex flex-col items-center justify-between h-full pt-3 border-2 md:pt-6 border-dark dark:hover:border-light">
                        <div className="px-8 text-6xl md:text-8xl">
                            <svg
                                width="1.3em"
                                height="1em"
                                viewBox="0 0 256 133"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 120.814H8.43375V87.5219L21.49 116.556C23.03 120.056 25.14 121.313 29.275 121.313C33.41 121.313 35.4375 120.069 36.98 116.556L50.0375 87.5219V120.827H58.4725V87.5769C58.4725 84.3331 57.1725 82.7644 54.4975 81.9544C48.0912 79.9544 43.7925 81.6844 41.8475 86.0094L29.035 114.663L16.625 85.9969C14.76 81.6719 10.3813 79.9419 3.975 81.9419C1.2975 82.7531 0 84.3219 0 87.5644V120.814ZM65.4825 93.7069H73.9138V112.057C73.835 113.054 74.2338 115.394 78.8538 115.466C81.2113 115.503 97.0462 115.466 97.1937 115.466V93.6156H105.644C105.681 93.6156 105.635 123.408 105.636 123.536C105.683 130.883 96.5187 132.479 92.2962 132.603H65.6663V126.928L92.3438 126.927C97.7713 126.352 97.1313 123.656 97.1313 122.747V120.534H79.2063C70.8663 120.459 65.5562 116.818 65.49 112.631C65.4837 112.256 65.67 93.8869 65.485 93.7056L65.4825 93.7069Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M112.145 120.814H136.393C139.23 120.814 141.989 120.22 144.18 119.192C147.83 117.517 149.614 115.245 149.614 112.272V106.109C149.614 103.675 147.586 101.405 143.614 99.8917C141.505 99.0792 138.91 98.648 136.396 98.648H126.178C122.773 98.648 121.15 97.6205 120.745 95.3505C120.664 95.0805 120.664 94.8505 120.664 94.593V90.7555C120.664 90.5392 120.664 90.3217 120.745 90.0517C121.15 88.3217 122.043 87.8342 125.043 87.5517C125.286 87.5517 125.61 87.4967 125.855 87.4967H149.94V81.8755H126.26C122.854 81.8755 121.07 82.0917 119.448 82.578C114.415 84.1467 112.225 86.6467 112.225 90.9717V95.8917C112.225 99.6767 116.525 102.92 123.74 103.677C124.553 103.73 125.363 103.784 126.173 103.784H134.931C135.256 103.784 135.581 103.784 135.824 103.839C138.499 104.055 139.636 104.542 140.446 105.514C140.946 106.014 141.096 106.489 141.096 107.014V111.934C141.096 112.529 140.691 113.287 139.88 113.934C139.15 114.584 137.934 115.015 136.311 115.124C135.986 115.124 135.744 115.178 135.42 115.178H112.145V120.8V120.814ZM202.225 111.029C202.225 116.814 206.523 120.058 215.2 120.707C216.009 120.769 216.821 120.805 217.633 120.814H239.61V115.192H217.47C212.524 115.192 210.658 113.948 210.658 110.974V81.8867H202.224V111.027L202.225 111.029ZM154.994 111.322V91.278C154.994 86.1855 158.569 83.0967 165.639 82.1217C166.393 82.014 167.153 81.9597 167.915 81.9592H183.924C184.712 81.9597 185.5 82.014 186.281 82.1217C193.351 83.0967 196.926 86.1842 196.926 91.278V111.322C196.926 115.453 195.408 117.664 191.908 119.105L200.215 126.605H190.423L183.701 120.538L176.935 120.967H167.915C166.371 120.967 164.746 120.749 162.958 120.262C157.583 118.799 154.995 115.982 154.995 111.322H154.994ZM164.098 110.822C164.098 111.093 164.179 111.363 164.26 111.689C164.76 114.019 166.941 115.319 170.26 115.319H177.923L170.885 108.965H180.678L186.803 114.507C187.934 113.904 188.678 112.982 188.928 111.798C189.009 111.528 189.009 111.257 189.009 110.985V91.7667C189.009 91.5505 189.009 91.2667 188.928 91.008C188.428 88.8417 186.245 87.5955 182.995 87.5955H170.275C166.525 87.5955 164.1 89.2205 164.1 91.7667V110.837L164.098 110.822Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M247.03 72.5595C241.846 72.4195 237.885 72.9007 234.5 74.3282C233.538 74.7345 232.004 74.7445 231.846 75.9507C232.375 76.5045 232.459 77.332 232.878 78.0132C233.686 79.322 235.053 81.0757 236.269 81.9932C237.599 82.997 238.969 84.072 240.398 84.9432C242.935 86.4907 245.768 87.3745 248.21 88.9232C249.65 89.8357 251.08 90.9857 252.485 92.0182C253.179 92.5282 253.648 93.3207 254.548 93.6395V93.492C254.073 92.8882 253.951 92.0582 253.516 91.4295L251.6 89.5132C249.725 87.0132 247.348 84.842 244.819 83.0257C242.803 81.5782 238.289 79.6232 237.448 77.2757L237.3 77.1282C238.73 76.9657 240.404 76.4495 241.725 76.097C243.941 75.5032 245.923 75.6557 248.213 75.0657L251.309 74.1807V73.5907C250.151 72.4032 249.326 70.832 248.065 69.7582C244.765 66.9457 241.161 64.1395 237.453 61.7957C235.395 60.4957 232.853 59.6532 230.671 58.552C229.938 58.182 228.649 57.9895 228.165 57.372C227.02 55.912 226.396 54.0595 225.513 52.372C223.663 48.8095 221.845 44.917 220.205 41.1682C219.086 38.612 218.355 36.0907 216.963 33.797C210.269 22.792 203.063 16.1495 191.903 9.62197C189.528 8.23447 186.669 7.68447 183.646 6.96822L178.781 6.67322C177.791 6.26072 176.761 5.04822 175.831 4.46072C172.134 2.12322 162.65 -2.95553 159.911 3.71072C158.183 7.92697 162.495 12.0407 164.039 14.1782C165.121 15.6782 166.509 17.357 167.281 19.0432C167.79 20.1507 167.879 21.262 168.314 22.4345C169.385 25.3095 170.318 28.4632 171.704 31.132C172.404 32.482 173.176 33.9045 174.063 35.112C174.606 35.8532 175.538 36.1795 175.684 37.3245C174.774 38.5995 174.721 40.5745 174.209 42.1895C171.905 49.4545 172.774 58.4832 176.125 63.8607C177.154 65.5107 179.575 69.0507 182.906 67.6932C185.819 66.5057 185.156 62.8307 186.003 59.5857C186.19 58.8482 186.075 58.3107 186.445 57.817V57.9645L189.099 63.2707C191.061 66.4332 194.549 69.7395 197.501 71.9707C199.033 73.127 200.251 75.127 202.219 75.8032V75.6557H202.071C201.688 75.0557 201.088 74.8095 200.596 74.3307C199.443 73.1995 198.159 71.7932 197.205 70.4982C194.518 66.8507 192.145 62.8607 189.983 58.7045C188.95 56.7207 188.051 54.532 187.183 52.5132C186.848 51.7345 186.851 50.5582 186.151 50.1545C185.198 51.6345 183.793 52.8295 183.055 54.577C181.875 57.3695 181.723 60.7745 181.286 64.307C181.028 64.3995 181.143 64.3357 180.991 64.4545C178.939 63.9595 178.216 61.8457 177.454 60.032C175.524 55.4445 175.166 48.062 176.864 42.7845C177.301 41.4195 179.289 37.117 178.485 35.8557C178.101 34.597 176.835 33.8557 176.126 32.9057C175.251 31.7182 174.374 30.1507 173.768 28.7782C172.188 25.2032 171.45 21.1907 169.788 17.5745C168.993 15.847 167.65 14.0995 166.545 12.5745C165.323 10.8745 163.954 9.61947 163.008 7.57447C162.67 6.84322 162.213 5.67447 162.713 4.92072C162.76 4.70416 162.869 4.50577 163.026 4.34896C163.183 4.19215 163.381 4.08346 163.598 4.03572C164.453 3.37697 166.835 4.25447 167.725 4.62572C170.088 5.60822 172.063 6.54322 174.065 7.86947C175.028 8.49447 175.999 9.73947 177.16 10.082H178.485C180.56 10.5595 182.885 10.232 184.823 10.8195C188.25 11.8607 191.32 13.482 194.11 15.242C202.608 20.607 209.554 28.2445 214.306 37.367C215.071 38.8332 215.401 40.2345 216.075 41.7895C217.434 44.9145 219.145 48.1557 220.498 51.2232C221.848 54.2857 223.16 57.3732 225.068 59.9207C226.07 61.2582 229.943 61.9782 231.701 62.7207C232.935 63.242 234.955 63.7857 236.124 64.4895C238.355 65.8357 240.518 67.4395 242.611 68.9145C243.658 69.652 246.874 71.2682 247.034 72.5995L247.03 72.5595Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M181.138 16.3946C180.056 16.3746 179.293 16.5121 178.484 16.6896V16.8371H178.631C179.146 17.8971 180.056 18.5783 180.694 19.4908L182.169 22.5858L182.316 22.4383C183.229 21.7946 183.648 20.7658 183.641 19.1946C183.275 18.8096 183.221 18.3271 182.904 17.8671C182.483 17.2546 181.654 16.9071 181.135 16.3921L181.138 16.3946Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M243.569 115.032C243.569 118.744 246.502 121.247 249.784 121.247C253.065 121.247 255.999 118.744 255.999 115.032C255.999 111.319 253.065 108.817 249.784 108.817C246.502 108.817 243.569 111.319 243.569 115.032ZM254.606 115.032C254.606 117.849 252.452 119.954 249.781 119.954C247.081 119.954 244.956 117.849 244.956 115.032C244.956 112.214 247.079 110.109 249.781 110.109C252.45 110.109 254.606 112.214 254.606 115.032ZM251.456 118.579H252.847L250.81 115.464C251.904 115.348 252.731 114.817 252.731 113.524C252.731 112.082 251.819 111.487 250.064 111.487H247.295V118.581H248.489V115.514H249.599L251.455 118.581L251.456 118.579ZM248.489 114.517V112.479H249.864C250.576 112.479 251.439 112.612 251.439 113.442C251.439 114.436 250.66 114.519 249.764 114.519H248.489V114.517Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <span className="pt-2 pb-2 font-mono text-lg md:pb-5">
                            MySQL
                        </span>
                    </div>
                </div>

                <SkillCard icon="fa-brands fa-bootstrap" iconName="Bootstrap" />
                <div className="bg-gray hover:bg-dark text-dark hover:text-light">
                    <div className="flex flex-col items-center justify-between h-full pt-3 border-2 md:pt-6 border-dark dark:hover:border-light">
                        <div className="px-8 text-6xl md:text-8xl">
                            <svg
                                width="1.3em"
                                height="1em"
                                viewBox="0 0 518 311"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M259 0C189.933 0 146.767 34.5556 129.5 103.667C155.4 69.1111 185.617 56.1528 220.15 64.7917C239.853 69.7158 253.935 84.0276 269.523 99.856C294.915 125.648 324.306 155.5 388.5 155.5C457.567 155.5 500.733 120.944 518 51.8333C492.1 86.3889 461.883 99.3472 427.35 90.7083C407.647 85.7842 393.565 71.4724 377.977 55.644C352.585 29.8522 323.194 0 259 0ZM129.5 155.5C60.4333 155.5 17.2667 190.056 0 259.167C25.9 224.611 56.1167 211.653 90.65 220.292C110.353 225.225 124.435 239.528 140.023 255.356C165.415 281.148 194.806 311 259 311C328.067 311 371.233 276.444 388.5 207.333C362.6 241.889 332.383 254.847 297.85 246.208C278.147 241.284 264.065 226.972 248.477 211.144C223.085 185.352 193.694 155.5 129.5 155.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <span className="pt-2 pb-2 font-mono text-lg md:pb-5">
                            TailwindCSS
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
