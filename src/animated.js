import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    @-webkit-keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    }

    @-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

    @-webkit-keyframes zoomIn {
        from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
            opacity: 1;
        }
    }

    @keyframes zoomIn {
    from {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
        opacity: 1;
    }
    }

    .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
    }


    @-webkit-keyframes fadeOutRotate {
        from {
            opacity: 1;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        to {
            opacity: 0;
            -webkit-transform: rotate(360deg) scale3d(0.1, 0.1, 0.1);
            transform: rotate(360deg) scale3d(0.1, 0.1, 0.1);
            
        }
    }
    @keyframes fadeOutRotate {
        from {
            opacity: 1;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        to {
            opacity: 0;
            -webkit-transform: rotate(360deg) scale3d(0.1, 0.1, 0.1);
            transform: rotate(360deg) scale3d(0.1, 0.1, 0.1);
            
        }
    }

    .fadeOutRotate {
    -webkit-animation-name: fadeOutRotate;
    animation-name: fadeOutRotate;
    }

    .animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    }

    .animated.delay-1s {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    }

    .animated.delay-2s {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    }

    .animated.delay-3s {
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    }

    .animated.delay-4s {
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    }

    .animated.delay-5s {
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
    }

    .animated.fast {
    -webkit-animation-duration: 800ms;
    animation-duration: 800ms;
    }

    .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
    }

    .animated.slow {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    }

    .animated.slower {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    }

    .animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.animated.delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.animated.delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.animated.delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}
`

const Animated = () => (
    <GlobalStyle />
)

export default Animated;