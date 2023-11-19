import React from 'react'
import classnames from 'classnames'
import styles from './logo.module.scss'

const Logo = ({ className, polygonClassName }) => (
  <div className={classnames(styles.wrap, className)}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 720 720"
      enableBackground="new 0 0 720 720"
      className={styles.svg}
    >
      <g id="Yellow_square" className={polygonClassName}>
        <path d="M577.1,577H142.8V142.7h434.3V577z M144.8,575h430.3V144.7H144.8V575z" />
      </g>
      <g
        id="JS"
        transform="translate(0.000000,1052.000000) scale(0.100000,-0.100000)"
      >
        <path
          d="M4685.2,7142.5c-156.2-12.4-287.3-68.6-384.8-165.3C4200,6877.5,4152,6756,4152,6601.9c0-230.6,94.7-391.8,305.9-519.6
        c53.7-32.2,126.9-67.4,253.4-121.9c172.4-74,236.4-109.1,277.3-152.9c50.4-54.1,64.5-140.5,32.7-206.7
        c-6.2-12.8-22.3-34.3-36.8-48.8c-48.8-49.2-125.7-75.2-221.1-75.2c-161.2,0-281.5,66.1-378.2,209.1c-13.2,19-25.2,34.7-26.9,34.7
        c-3.7,0-318.3-181.5-324.9-187.7c-4.1-3.7-0.8-12.4,15.3-38.9c125.7-211.6,322-335.6,587.3-371.2c69.4-9.5,199.6-9.1,266.2,0
        c167,23.6,292.2,78.9,389.4,173.2c103.3,99.6,154.2,228.6,154.2,390.2c0,103.3-16.9,183.9-55.4,263.7
        c-26.5,54.6-52.9,91.3-98.4,137.6c-87.2,88.5-200.1,155.4-425.3,252.1c-170.3,73.2-227.3,104.6-264.9,144.7
        c-36,38.4-51.3,83.5-47.9,139.7c2.9,44.6,15.3,74.8,42.6,104.2c39.3,42.6,84.7,60.3,155,59.9c79.8,0,131.4-20.7,183.9-73.6
        c18.6-18.2,42.6-47.5,53.7-65.3c12.8-20.3,22.3-31.4,25.6-30.2c10.7,4.5,311.2,198.8,311.2,201.7c0,1.7-15.3,25.6-33.9,53.7
        c-39.7,59.5-111.2,133.9-160.4,166.6c-90.9,60.3-188.1,91.3-316.2,100.9C4752.6,7147,4744.4,7147,4685.2,7142.5z"
        />
        <path
          d="M3398.5,6391.5l-1.2-730.8l-9.1-34.3c-12-45.1-26-71.9-50.8-96.7c-34.7-34.7-79.4-49.2-153.8-49.6
        c-106.2-0.4-169.9,44.6-243.9,171.1c-12,19.8-22.7,36-24,35.5c-1.7-0.8-76.5-45.9-166.2-100l-163.3-99.2l12.4-24.8
        c74-147.6,202.1-259.2,356.3-310.4c162.9-54.1,372-49.2,525.3,12.4c183.9,74.4,291.8,228.2,320.3,456.7
        c2.5,23.1,4.1,281.5,4.1,767.6v732.8h-202.5h-202.1L3398.5,6391.5z"
        />
      </g>
      <g id="Triangles" className={polygonClassName}>
        <g id="Blue_triangles">
          <g>
            <path d="M276,188h-91.4l45.7-45.7L276,188z M189.5,186h81.7l-40.9-40.8L189.5,186z" />
          </g>
          <g>
            <path d="M232.8,317.7h-91.4l45.7-45.7L232.8,317.7z M146.2,315.7h81.7l-40.9-40.8L146.2,315.7z" />
          </g>
          <g>
            <path d="M142.8,405.7v-91.4l45.7,45.7L142.8,405.7z M144.8,319.1v81.7l40.8-40.9L144.8,319.1z" />
          </g>
          <g>
            <path d="M229.3,319.2v-91.4l45.7,45.7L229.3,319.2z M231.3,232.7v81.7l40.8-40.9L231.3,232.7z" />
          </g>
          <g>
            <path d="M360,188.4l-45.7-45.7h91.4L360,188.4z M319.2,144.7l40.9,40.8l40.8-40.8H319.2z" />
          </g>
          <g>
            <path d="M143.8,145.2L98.1,99.5h91.4L143.8,145.2z M103,101.5l40.9,40.8l40.8-40.8H103z" />
          </g>
        </g>
        <g id="Green_triangles">
          <g>
            <polygon points="187.2,230.2 187.2,273.4 143.9,230.2 187.2,186.9 			" />
            <path d="M188.2,275.8l-45.7-45.7l45.7-45.7V275.8z M145.4,230.2l40.8,40.8v-81.7L145.4,230.2z" />
          </g>
          <g>
            <polygon points="316.9,187 316.9,230.3 273.6,187 316.9,143.7 			" />
            <path d="M317.9,232.7L272.2,187l45.7-45.7V232.7z M275,187l40.8,40.8v-81.7L275,187z" />
          </g>
          <g>
            <polygon points="316.7,273.4 273.5,273.4 316.7,230.2 360,273.4 			" />
            <path d="M362.4,274.4h-91.4l45.7-45.7L362.4,274.4z M275.9,272.4h81.7l-40.9-40.8L275.9,272.4z" />
          </g>
          <g>
            <polygon points="187.1,403.2 230.3,403.2 187.1,446.5 143.8,403.2 			" />
            <path d="M187.1,447.9l-45.7-45.7h89.9l0,0.6l0,0.8L187.1,447.9z M146.2,404.2l40.9,40.8l40.8-40.8H146.2z" />
          </g>
          <g>
            <polygon points="403.3,186.9 403.3,230.2 360,186.9 403.3,143.6 			" />
            <path d="M404.3,232.6l-45.7-45.7l44.6-44.6l0.5,0.5h0.6V232.6z M361.4,186.9l40.8,40.8v-81.7L361.4,186.9z" />
          </g>
          <g>
            <polygon points="230.3,100.5 273.6,100.5 230.3,143.7 187.1,100.5 			" />
            <path d="M230.3,145.2l-45.7-45.7H276L230.3,145.2z M189.5,101.5l40.9,40.8l40.8-40.8H189.5z" />
          </g>
          <g>
            <polygon points="100.5,143.7 100.5,187 57.3,143.7 100.5,100.5 			" />
            <path d="M101.5,189.4l-45.7-45.7l45.7-45.7V189.4z M58.7,143.7l40.8,40.8v-81.7L58.7,143.7z" />
          </g>
        </g>
        <g id="Red_triangles">
          <g>
            <polygon points="143.8,187 143.8,143.7 187.1,187 143.8,230.3 			" />
            <path d="M142.8,232.7v-91.4l45.7,45.7L142.8,232.7z M144.8,146.1v81.7l40.8-40.9L144.8,146.1z" />
          </g>
          <g>
            <polygon points="273.6,230.2 230.4,230.2 273.6,186.9 316.9,230.2 			" />
            <path d="M319.3,231.2h-91.4l45.7-45.7L319.3,231.2z M232.8,229.2h81.7l-40.9-40.8L232.8,229.2z" />
          </g>
          <g>
            <polygon points="230.3,273.4 230.3,316.7 187.1,273.4 230.3,230.2 			" />
            <path d="M231.3,319.1l-45.7-45.7l45.7-45.7V319.1z M188.5,273.4l40.8,40.8v-81.7L188.5,273.4z" />
          </g>
          <g>
            <polygon points="187.1,316.7 230.3,316.7 187.1,360 143.8,316.7 			" />
            <path d="M187.1,361.4l-45.7-45.7h91.4L187.1,361.4z M146.2,317.7l40.9,40.8l40.8-40.8H146.2z" />
          </g>
          <g>
            <polygon points="273.5,316.7 273.5,360 230.2,316.7 273.5,273.4 			" />
            <path d="M274.5,362.4l-45.7-45.7l45.7-45.7V362.4z M231.6,316.7l40.8,40.8v-81.7L231.6,316.7z" />
          </g>
          <g>
            <polygon points="316.9,100.5 316.9,143.7 273.6,100.5 316.9,57.2 			" />
            <path d="M317.9,146.2l-45.7-45.7l45.7-45.7V146.2z M275,100.5l40.8,40.8V59.6L275,100.5z" />
          </g>
          <g>
            <polygon points="100.5,230.2 57.3,230.2 100.5,186.9 143.8,230.2 			" />
            <path d="M146.2,231.2H54.9l45.7-45.7L146.2,231.2z M59.7,229.2h81.7l-40.9-40.8L59.7,229.2z" />
          </g>
          <g>
            <polygon points="100.5,57.2 143.8,57.2 100.5,100.5 57.3,57.2 			" />
            <path d="M100.5,101.9L54.9,56.2h91.4L100.5,101.9z M59.7,58.2l40.9,40.8l40.8-40.8H59.7z" />
          </g>
        </g>
        <g id="Yellow_triangles">
          <g>
            <path d="M405.7,144.7h-91.4L360,99.1L405.7,144.7z M319.2,142.7h81.7L360,101.9L319.2,142.7z" />
          </g>
          <g>
            <path d="M276,101.5h-91.4l45.7-45.7L276,101.5z M189.5,99.5h81.7l-40.9-40.8L189.5,99.5z" />
          </g>
          <g>
            <path d="M232.8,144.7h-91.4l45.7-45.7L232.8,144.7z M146.2,142.7h81.7l-40.9-40.8L146.2,142.7z" />
          </g>
          <g>
            <path d="M144.8,319.1l-45.7-45.7l45.7-45.7V319.1z M102,273.4l40.8,40.8v-81.7L102,273.4z" />
          </g>
        </g>
        <g id="White_triangles">
          <g>
            <path d="M187.1,188.5l-45.7-45.7h91.4L187.1,188.5z M146.2,144.8l40.9,40.8l40.8-40.8H146.2z" />
          </g>
          <g>
            <path d="M315.7,232.7v-91.4l45.7,45.7L315.7,232.7z M317.7,146.2v81.7l40.8-40.9L317.7,146.2z" />
          </g>
          <g>
            <path d="M186.2,276.1v-91.4l45.7,45.7L186.2,276.1z M188.2,189.6v81.7l40.8-40.9L188.2,189.6z" />
          </g>
          <g>
            <path d="M273.6,274.9l-45.7-45.7h91.4L273.6,274.9z M232.8,231.2l40.9,40.8l40.8-40.8H232.8z" />
          </g>
          <g>
            <path d="M142.8,319.2v-91.4l45.7,45.7L142.8,319.2z M144.8,232.6v81.7l40.8-40.9L144.8,232.6z" />
          </g>
          <g>
            <path d="M230.8,404.1l-0.5,0.6L185.7,360l45.7-45.7v89.3L230.8,404.1z M188.5,360l40.8,40.8v-81.7L188.5,360z" />
          </g>
          <g>
            <path d="M446.5,188.5l-45.7-45.7h91.4L446.5,188.5z M405.7,144.8l40.9,40.8l40.8-40.8H405.7z" />
          </g>
          <g>
            <path d="M144.8,232.6L99.1,187l45.7-45.7V232.6z M102,187l40.8,40.8v-81.7L102,187z" />
          </g>
          <g>
            <path d="M188.1,103l-45.7-45.7l45.7-45.7V103z M145.2,57.3l40.8,40.8V16.4L145.2,57.3z" />
          </g>
          <g>
            <path d="M144.8,405.7L99.1,360l45.7-45.7V405.7z M102,360l40.8,40.8v-81.7L102,360z" />
          </g>
        </g>
      </g>
    </svg>
  </div>
)

export default Logo
