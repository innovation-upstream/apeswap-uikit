import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg viewBox="0 0 512 512" {...props}>
      <g>
        <path
          d="m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z"
          fill="#ffecb3"
        />
        <path
          d="m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z"
          fill="#ffe082"
        />
        <path
          d="m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z"
          fill="#ffd54f"
        />
        <path
          d="m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z"
          fill="#ffca28"
        />
        <g>
          <path
            d="m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z"
            fill="#ffb300"
          />
        </g>
      </g>
    </LegacySvg>
  );
};

export default Icon;
