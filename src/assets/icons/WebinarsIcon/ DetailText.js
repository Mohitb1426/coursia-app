/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={194}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.179 6.608 4.95.891h1.49L3.93 8h-.992l.24-1.392ZM1.543.891l1.763 5.717L3.56 8H2.559L.059.89h1.484Zm7.69 7.207c-.4 0-.76-.065-1.079-.196a2.37 2.37 0 0 1-.815-.542 2.492 2.492 0 0 1-.513-.815 2.841 2.841 0 0 1-.176-1.006v-.195c0-.407.059-.777.176-1.109a2.54 2.54 0 0 1 .498-.864c.215-.24.472-.426.772-.557.3-.13.63-.195.99-.195.375 0 .706.064.992.19.287.124.526.3.718.528a2.3 2.3 0 0 1 .434.82c.098.316.147.666.147 1.05v.542h-4.14V4.86h2.87v-.097A1.557 1.557 0 0 0 9.99 4.2a.897.897 0 0 0-.332-.41c-.15-.104-.343-.156-.58-.156a.97.97 0 0 0-.504.127 1.01 1.01 0 0 0-.351.351c-.091.15-.16.33-.205.537a3.25 3.25 0 0 0-.069.694v.195c0 .221.03.426.088.615.062.19.151.353.269.493.12.137.263.245.43.323.169.075.36.112.576.112.27 0 .514-.052.732-.156a1.63 1.63 0 0 0 .576-.474l.65.674c-.111.163-.26.319-.45.469-.185.15-.41.272-.674.366a2.792 2.792 0 0 1-.913.137Zm4.297-4.302V8h-1.289V2.717h1.22l.07 1.079Zm1.607-1.113-.02 1.2a3.377 3.377 0 0 0-.493-.04c-.198.002-.373.03-.522.085a.975.975 0 0 0-.376.23c-.098.1-.173.224-.225.37a1.59 1.59 0 0 0-.088.489l-.278-.035c0-.335.034-.646.102-.932a2.61 2.61 0 0 1 .298-.752c.13-.215.293-.381.488-.498.199-.12.427-.18.684-.18.072 0 .148.006.23.019.084.01.15.024.2.044Zm3.452 4.194V4.44c0-.179-.031-.333-.093-.463a.671.671 0 0 0-.283-.303.975.975 0 0 0-.483-.108c-.173 0-.324.03-.455.088a.67.67 0 0 0-.293.25.644.644 0 0 0-.102.36h-1.294c0-.217.052-.424.156-.62a1.66 1.66 0 0 1 .444-.527 2.19 2.19 0 0 1 .699-.366 2.99 2.99 0 0 1 .918-.132c.4 0 .757.068 1.07.205.315.134.562.336.741.606.183.27.274.61.274 1.02v2.305c0 .264.016.49.048.679.036.185.088.346.157.483V8h-1.314a1.942 1.942 0 0 1-.141-.508 3.975 3.975 0 0 1-.05-.615Zm.18-2.095.01.767h-.815c-.202 0-.38.021-.532.063a.983.983 0 0 0-.376.176.713.713 0 0 0-.22.274.83.83 0 0 0 .015.708.67.67 0 0 0 .263.249.906.906 0 0 0 .41.087c.228 0 .427-.045.596-.136.17-.095.301-.209.396-.342a.738.738 0 0 0 .151-.38l.371.556a2.182 2.182 0 0 1-.205.425 1.91 1.91 0 0 1-.352.42 1.79 1.79 0 0 1-.517.322 1.807 1.807 0 0 1-.703.127c-.342 0-.648-.069-.918-.205a1.628 1.628 0 0 1-.64-.562 1.442 1.442 0 0 1-.234-.81c0-.28.052-.528.156-.743.104-.215.259-.395.464-.542.205-.15.459-.262.762-.337a4.26 4.26 0 0 1 1.05-.117h.869Zm3.546-.937V8h-1.29V2.717h1.211l.078 1.128Zm-.206 1.323h-.38c.003-.384.055-.732.156-1.045.1-.312.242-.581.425-.806.185-.224.405-.397.659-.517s.537-.18.85-.18c.253 0 .483.035.688.107.205.071.38.185.527.341.15.157.264.362.342.616.081.25.122.56.122.927V8h-1.299V4.602c0-.241-.036-.432-.107-.572a.6.6 0 0 0-.303-.298 1.177 1.177 0 0 0-.483-.087c-.199 0-.373.04-.523.122a1.08 1.08 0 0 0-.37.327c-.099.14-.173.3-.226.483-.052.182-.078.38-.078.591Zm7.696 1.709V.5h1.299V8h-1.172l-.127-1.123ZM26.41 5.422v-.103c0-.403.046-.77.137-1.098.094-.332.231-.617.41-.855.179-.237.396-.421.65-.552.257-.13.548-.195.873-.195.316 0 .591.064.826.19.237.128.44.308.605.543.17.234.305.512.405.835.101.319.174.67.22 1.054v.279a5.528 5.528 0 0 1-.22 1.03c-.1.312-.236.586-.405.82-.166.231-.368.41-.605.537-.238.127-.516.19-.835.19-.323 0-.612-.066-.87-.2a1.911 1.911 0 0 1-.649-.561 2.705 2.705 0 0 1-.405-.85 3.935 3.935 0 0 1-.137-1.064Zm1.294-.103v.103c0 .228.02.441.059.64.039.198.102.374.19.527a1 1 0 0 0 .337.351c.14.085.31.127.508.127.254 0 .462-.055.625-.166.166-.114.294-.268.386-.463a2.13 2.13 0 0 0 .175-.67v-.766a2.165 2.165 0 0 0-.102-.542 1.284 1.284 0 0 0-.225-.43.995.995 0 0 0-.351-.283 1.123 1.123 0 0 0-.498-.102.936.936 0 0 0-.85.488c-.088.153-.153.33-.195.532-.04.202-.059.42-.059.654Zm7.476 1.558V4.44c0-.179-.031-.333-.093-.463a.671.671 0 0 0-.283-.303.975.975 0 0 0-.484-.108c-.172 0-.324.03-.454.088a.67.67 0 0 0-.293.25.644.644 0 0 0-.102.36h-1.294c0-.217.052-.424.156-.62a1.66 1.66 0 0 1 .444-.527 2.19 2.19 0 0 1 .699-.366 2.99 2.99 0 0 1 .918-.132c.4 0 .756.068 1.069.205.316.134.563.336.742.606.182.27.273.61.273 1.02v2.305c0 .264.017.49.05.679.035.185.087.346.156.483V8H35.37a1.942 1.942 0 0 1-.142-.508 3.975 3.975 0 0 1-.048-.615Zm.18-2.095.01.767h-.815c-.202 0-.38.021-.533.063a.983.983 0 0 0-.376.176.713.713 0 0 0-.22.274.83.83 0 0 0 .015.708.67.67 0 0 0 .264.249.906.906 0 0 0 .41.087c.228 0 .427-.045.596-.136.17-.095.301-.209.395-.342a.738.738 0 0 0 .152-.38l.37.556a2.182 2.182 0 0 1-.204.425 1.91 1.91 0 0 1-.352.42 1.79 1.79 0 0 1-.517.322 1.807 1.807 0 0 1-.703.127c-.342 0-.648-.069-.918-.205a1.628 1.628 0 0 1-.64-.562 1.443 1.443 0 0 1-.235-.81c0-.28.053-.528.157-.743.104-.215.259-.395.464-.542.205-.15.459-.262.761-.337a4.26 4.26 0 0 1 1.05-.117h.87ZM40.23.891h2.583c.54 0 1.004.081 1.391.244.388.163.685.403.894.722.208.32.312.712.312 1.177 0 .368-.065.687-.195.957-.13.27-.314.497-.552.679a2.708 2.708 0 0 1-.83.43l-.42.214h-2.28l-.01-1.06h1.704c.277 0 .506-.048.689-.146a.967.967 0 0 0 .41-.405 1.21 1.21 0 0 0 .141-.59 1.3 1.3 0 0 0-.136-.616.927.927 0 0 0-.415-.405c-.186-.095-.42-.142-.703-.142h-1.24V8H40.23V.89ZM44.242 8l-1.645-3.184 1.42-.004 1.666 3.12V8h-1.44Zm5.171-6.03L47.388 8h-1.421L48.623.89h.908l-.117 1.08ZM51.108 8l-2.036-6.03L48.95.89h.913L52.534 8h-1.426Zm-.092-2.642v1.06h-3.814v-1.06h3.814Zm6.323.303h1.343a2.756 2.756 0 0 1-.396 1.265 2.367 2.367 0 0 1-.952.86c-.407.207-.9.312-1.48.312-.446 0-.847-.078-1.206-.235a2.61 2.61 0 0 1-.913-.678 3.1 3.1 0 0 1-.576-1.065 4.58 4.58 0 0 1-.2-1.401v-.542c0-.518.068-.985.205-1.402a3.06 3.06 0 0 1 .586-1.064 2.62 2.62 0 0 1 .923-.684c.361-.16.765-.239 1.21-.239.58 0 1.07.108 1.47.322.4.212.712.503.933.874.221.371.355.798.4 1.28h-1.342a2.107 2.107 0 0 0-.196-.762 1.027 1.027 0 0 0-.459-.474c-.201-.11-.47-.166-.805-.166-.26 0-.49.05-.689.147a1.26 1.26 0 0 0-.488.44c-.13.191-.228.432-.293.722a4.527 4.527 0 0 0-.098.996v.552c0 .361.03.685.088.971.059.287.15.53.274.728.123.199.283.35.478.454.196.104.428.156.699.156.328 0 .595-.052.8-.156a1.06 1.06 0 0 0 .474-.459c.11-.202.18-.452.21-.752Zm7.095 1.284V8h-3.78V6.945h3.78ZM61.064.891V8h-1.342V.89h1.343Zm2.876 2.934v1.03h-3.286v-1.03h3.286ZM64.42.891v1.06h-3.765V.89h3.765Zm5.186 5.747L71.02.89h.767l.049 1.21L70.322 8h-.81l.093-1.362ZM68.71.89l1.162 5.727V8h-.884L67.378.89h1.333Zm4.595 5.703L74.448.89h1.338L74.175 8h-.884l.015-1.406ZM72.153.89l1.416 5.766L73.652 8h-.81l-1.509-5.903.059-1.206h.761Zm6.602 7.207c-.4 0-.76-.065-1.08-.196a2.37 2.37 0 0 1-.815-.542 2.49 2.49 0 0 1-.512-.815 2.841 2.841 0 0 1-.176-1.006v-.195c0-.407.059-.777.176-1.109a2.54 2.54 0 0 1 .498-.864c.215-.24.472-.426.771-.557.3-.13.63-.195.991-.195.375 0 .705.064.992.19.286.124.525.3.717.528.192.228.337.501.435.82.098.316.146.666.146 1.05v.542h-4.14V4.86h2.87v-.097a1.556 1.556 0 0 0-.116-.562.897.897 0 0 0-.332-.41c-.15-.104-.344-.156-.581-.156a.97.97 0 0 0-.503.127 1.01 1.01 0 0 0-.352.351c-.091.15-.16.33-.205.537-.046.209-.068.44-.068.694v.195c0 .221.029.426.088.615.061.19.151.353.268.493.12.137.264.245.43.323.17.075.361.112.576.112.27 0 .514-.052.732-.156.222-.108.414-.266.577-.474l.649.674c-.11.163-.26.319-.45.469-.185.15-.41.272-.673.366a2.792 2.792 0 0 1-.913.137ZM81.758.5h1.294v6.333L82.925 8h-1.167V.5Zm4.692 4.805v.102c0 .394-.044.755-.132 1.084a2.54 2.54 0 0 1-.385.855 1.827 1.827 0 0 1-.645.556c-.254.13-.552.196-.894.196-.325 0-.608-.064-.85-.19a1.72 1.72 0 0 1-.6-.538 2.983 2.983 0 0 1-.39-.825 6.358 6.358 0 0 1-.22-1.045v-.278c.049-.381.122-.73.22-1.045.097-.316.228-.591.39-.825.163-.235.363-.415.6-.542.239-.127.519-.19.84-.19.346 0 .647.066.904.2.26.13.475.315.645.556.172.238.3.52.385.85.088.325.132.685.132 1.079Zm-1.294.102v-.102c0-.225-.018-.437-.053-.635a1.797 1.797 0 0 0-.176-.532.937.937 0 0 0-.332-.362.974.974 0 0 0-.528-.131c-.201 0-.374.034-.517.102a.995.995 0 0 0-.352.283 1.41 1.41 0 0 0-.215.425 2.617 2.617 0 0 0-.097.527v.762c.023.25.076.477.16.679.085.198.21.356.377.473.17.118.387.176.654.176.209 0 .383-.04.523-.122a.908.908 0 0 0 .332-.351c.081-.153.138-.33.17-.533a3.78 3.78 0 0 0 .054-.659Zm3.599-2.69V8H87.46V2.717h1.294Zm-1.382-1.382a.64.64 0 0 1 .195-.479c.134-.127.313-.19.538-.19.224 0 .401.063.532.19.133.127.2.287.2.479a.627.627 0 0 1-.2.474c-.13.127-.308.19-.532.19-.225 0-.404-.063-.538-.19a.635.635 0 0 1-.195-.474Zm3.877 2.51V8h-1.29V2.717h1.212l.078 1.128Zm-.205 1.323h-.38c.002-.384.054-.732.155-1.045.101-.312.243-.581.425-.806a1.91 1.91 0 0 1 .66-.517c.253-.12.536-.18.849-.18.254 0 .483.035.688.107.206.071.381.185.528.341.15.157.263.362.341.616.082.25.123.56.123.927V8h-1.3V4.602c0-.241-.035-.432-.107-.572a.599.599 0 0 0-.302-.298 1.177 1.177 0 0 0-.484-.087c-.198 0-.373.04-.522.122a1.08 1.08 0 0 0-.371.327 1.61 1.61 0 0 0-.225.483c-.052.182-.078.38-.078.591Zm7.436 1.709V4.44c0-.179-.03-.333-.092-.463a.671.671 0 0 0-.283-.303.975.975 0 0 0-.484-.108c-.172 0-.324.03-.454.088a.67.67 0 0 0-.293.25.643.643 0 0 0-.103.36h-1.294c0-.217.053-.424.157-.62.104-.198.252-.374.444-.527a2.19 2.19 0 0 1 .698-.366c.274-.088.58-.132.918-.132.4 0 .757.068 1.07.205.315.134.563.336.742.606.182.27.273.61.273 1.02v2.305c0 .264.016.49.05.679.035.185.087.346.155.483V8h-1.313a1.942 1.942 0 0 1-.142-.508 3.976 3.976 0 0 1-.049-.615Zm.181-2.095.01.767h-.816c-.201 0-.379.021-.532.063a.984.984 0 0 0-.376.176.713.713 0 0 0-.22.274.83.83 0 0 0 .015.708.67.67 0 0 0 .264.249.906.906 0 0 0 .41.087c.228 0 .426-.045.596-.136.169-.095.3-.209.395-.342a.738.738 0 0 0 .152-.38l.37.556a2.188 2.188 0 0 1-.204.425c-.092.15-.209.29-.352.42s-.316.237-.518.322a1.807 1.807 0 0 1-.703.127c-.342 0-.648-.069-.918-.205a1.628 1.628 0 0 1-.64-.562 1.443 1.443 0 0 1-.234-.81c0-.28.052-.528.157-.743.104-.215.258-.395.463-.542.206-.15.46-.262.762-.337a4.26 4.26 0 0 1 1.05-.117h.87Zm3.569-.986V8h-1.289V2.717h1.221l.068 1.079Zm1.607-1.113-.02 1.2a3.384 3.384 0 0 0-.493-.04 1.5 1.5 0 0 0-.522.085.974.974 0 0 0-.376.23c-.098.1-.173.224-.225.37a1.608 1.608 0 0 0-.088.489l-.278-.035c0-.335.034-.646.102-.932.069-.287.168-.537.298-.752.131-.215.293-.381.489-.498.198-.12.426-.18.683-.18.072 0 .148.006.23.019.084.01.151.024.2.044Zm3.613 3.872c0-.111-.029-.21-.088-.298-.058-.088-.169-.168-.332-.24a3.37 3.37 0 0 0-.703-.21 5.202 5.202 0 0 1-.757-.22 2.444 2.444 0 0 1-.595-.316 1.439 1.439 0 0 1-.391-.445 1.258 1.258 0 0 1-.137-.596c0-.218.047-.423.142-.615a1.5 1.5 0 0 1 .41-.512c.179-.15.397-.267.654-.352.257-.088.547-.132.869-.132.45 0 .835.073 1.158.22.325.146.574.348.747.605.172.254.259.54.259.86h-1.29a.755.755 0 0 0-.097-.381.672.672 0 0 0-.288-.274 1.015 1.015 0 0 0-.493-.107c-.179 0-.331.03-.455.088a.666.666 0 0 0-.273.23.557.557 0 0 0-.044.541.559.559 0 0 0 .171.181c.078.055.184.106.317.151.137.046.305.09.503.132.394.078.738.183 1.031.313.296.127.527.296.693.508.166.211.249.481.249.81 0 .234-.051.45-.151.645-.101.192-.248.36-.44.503a2.223 2.223 0 0 1-.688.336 3.217 3.217 0 0 1-.904.118c-.485 0-.895-.087-1.23-.26a1.973 1.973 0 0 1-.762-.663 1.544 1.544 0 0 1-.259-.84h1.236c.009.205.065.37.166.493a.86.86 0 0 0 .381.269c.156.052.32.078.493.078.195 0 .359-.026.493-.078a.711.711 0 0 0 .303-.22.538.538 0 0 0 .102-.322Zm6.099-3.838V8h-1.294V2.717h1.294Zm-1.382-1.382c0-.192.065-.352.195-.479.134-.127.313-.19.537-.19.225 0 .402.063.533.19.133.127.2.287.2.479a.629.629 0 0 1-.2.474c-.131.127-.308.19-.533.19-.224 0-.403-.063-.537-.19a.635.635 0 0 1-.195-.474Zm5.518 5.22a.53.53 0 0 0-.088-.298c-.059-.088-.17-.168-.332-.24a3.383 3.383 0 0 0-.704-.21 5.187 5.187 0 0 1-.756-.22 2.452 2.452 0 0 1-.596-.316 1.452 1.452 0 0 1-.391-.445 1.258 1.258 0 0 1-.136-.596c0-.218.047-.423.141-.615.095-.195.231-.366.41-.512a1.97 1.97 0 0 1 .655-.352c.257-.088.547-.132.869-.132.449 0 .835.073 1.157.22.326.146.575.348.747.605.173.254.259.54.259.86h-1.289a.755.755 0 0 0-.098-.381.672.672 0 0 0-.288-.274 1.015 1.015 0 0 0-.493-.107c-.179 0-.33.03-.454.088a.663.663 0 0 0-.274.23.564.564 0 0 0-.044.541.559.559 0 0 0 .171.181c.078.055.184.106.318.151.136.046.304.09.503.132.394.078.737.183 1.03.313.296.127.527.296.693.508.166.211.249.481.249.81 0 .234-.05.45-.151.645-.101.192-.247.36-.44.503a2.223 2.223 0 0 1-.688.336 3.215 3.215 0 0 1-.903.118c-.485 0-.895-.087-1.231-.26-.335-.175-.589-.396-.761-.663a1.536 1.536 0 0 1-.259-.84h1.235c.01.205.065.37.166.493a.86.86 0 0 0 .381.269c.156.052.321.078.493.078.195 0 .36-.026.493-.078a.7.7 0 0 0 .303-.22.538.538 0 0 0 .103-.322ZM123.682.5V8h-1.294V.5h1.294Zm-.205 4.668h-.381c0-.368.049-.706.146-1.016.098-.309.236-.577.415-.805.179-.231.392-.41.64-.537a1.81 1.81 0 0 1 .83-.19c.26 0 .496.037.708.111.215.072.399.188.552.347.153.16.27.368.351.625.085.254.127.563.127.928V8h-1.299V4.621c0-.244-.035-.436-.107-.576a.642.642 0 0 0-.308-.308 1.12 1.12 0 0 0-.483-.092c-.208 0-.387.04-.537.122-.15.078-.274.187-.371.327-.095.14-.166.3-.215.483a2.41 2.41 0 0 0-.068.591Zm6.899 2.93c-.4 0-.76-.065-1.079-.196a2.376 2.376 0 0 1-.816-.542 2.489 2.489 0 0 1-.512-.815 2.846 2.846 0 0 1-.176-1.006v-.195c0-.407.059-.777.176-1.109.117-.335.283-.623.498-.864.215-.24.472-.426.771-.557.3-.13.63-.195.991-.195.375 0 .705.064.992.19.286.124.525.3.717.528.193.228.337.501.435.82.098.316.147.666.147 1.05v.542h-4.141V4.86h2.871v-.097a1.58 1.58 0 0 0-.117-.562.898.898 0 0 0-.332-.41c-.15-.104-.344-.156-.581-.156a.97.97 0 0 0-.503.127c-.14.081-.257.198-.352.351-.091.15-.159.33-.205.537-.045.209-.068.44-.068.694v.195c0 .221.029.426.088.615.062.19.151.353.268.493.121.137.264.245.43.323.169.075.361.112.576.112.27 0 .514-.052.733-.156.221-.108.413-.266.576-.474l.649.674a2.296 2.296 0 0 1-1.123.835 2.793 2.793 0 0 1-.913.137Zm4.297-4.302V8h-1.289V2.717h1.22l.069 1.079Zm1.606-1.113-.019 1.2a3.384 3.384 0 0 0-.493-.04c-.199.002-.373.03-.523.085a.974.974 0 0 0-.376.23 1.02 1.02 0 0 0-.224.37 1.55 1.55 0 0 0-.088.489l-.279-.035c0-.335.035-.646.103-.932.068-.287.168-.537.298-.752.13-.215.293-.381.488-.498.199-.12.426-.18.684-.18.071 0 .148.006.229.019.085.01.151.024.2.044Zm2.984 5.415a2.83 2.83 0 0 1-1.079-.196 2.376 2.376 0 0 1-.816-.542 2.508 2.508 0 0 1-.513-.815 2.845 2.845 0 0 1-.175-1.006v-.195c0-.407.058-.777.175-1.109.118-.335.284-.623.499-.864.214-.24.472-.426.771-.557.299-.13.63-.195.991-.195.375 0 .705.064.991.19.287.124.526.3.718.528.192.228.337.501.435.82.097.316.146.666.146 1.05v.542h-4.14V4.86h2.871v-.097a1.58 1.58 0 0 0-.117-.562.904.904 0 0 0-.332-.41c-.15-.104-.344-.156-.582-.156a.966.966 0 0 0-.502.127c-.14.081-.258.198-.352.351-.091.15-.16.33-.205.537-.046.209-.068.44-.068.694v.195c0 .221.029.426.087.615.062.19.152.353.269.493.12.137.264.245.43.323.169.075.361.112.576.112.27 0 .514-.052.732-.156.222-.108.414-.266.576-.474l.65.674a2.31 2.31 0 0 1-1.123.835 2.793 2.793 0 0 1-.913.137ZM143.74.89l-.141 4.975h-1.089l-.142-4.975h1.372Zm-1.411 6.508c0-.192.065-.353.195-.483.134-.133.313-.2.538-.2.224 0 .402.067.532.2.133.13.2.291.2.483a.644.644 0 0 1-.2.479c-.13.13-.308.195-.532.195-.225 0-.404-.065-.538-.195a.651.651 0 0 1-.195-.479Z"
        fill="#000"
      />
      <Path
        d="M149.644 8h-1.519l.01-.972h1.509c.439 0 .807-.096 1.103-.288.3-.192.524-.467.674-.825.153-.358.229-.784.229-1.28V4.25c0-.384-.044-.724-.131-1.02a2.01 2.01 0 0 0-.381-.748 1.59 1.59 0 0 0-.616-.459 2.082 2.082 0 0 0-.834-.156h-1.592V.891h1.592c.472 0 .903.08 1.293.239.391.156.728.382 1.011.679.287.296.506.65.659 1.064.153.413.23.876.23 1.387v.376c0 .51-.077.973-.23 1.386a3.007 3.007 0 0 1-.659 1.065c-.286.293-.628.52-1.025.679a3.562 3.562 0 0 1-1.323.234Zm-.84-7.11V8h-1.226V.89h1.226Zm4.966 4.527v-.112c0-.381.055-.734.166-1.06.11-.329.27-.613.478-.854.212-.245.469-.433.772-.567a2.51 2.51 0 0 1 1.035-.205c.387 0 .732.068 1.035.205.306.134.565.322.776.567.212.24.373.525.484.854.11.326.166.679.166 1.06v.112c0 .38-.056.734-.166 1.06-.111.325-.272.61-.484.854a2.24 2.24 0 0 1-.771.566c-.303.134-.646.2-1.031.2-.387 0-.734-.066-1.04-.2a2.249 2.249 0 0 1-.771-.566 2.516 2.516 0 0 1-.483-.854 3.263 3.263 0 0 1-.166-1.06Zm1.176-.112v.112c0 .238.025.462.074.674.048.211.125.397.229.556.104.16.238.285.4.376.163.092.357.137.581.137.219 0 .407-.045.567-.137a1.13 1.13 0 0 0 .4-.376c.104-.159.181-.345.23-.556.052-.212.078-.436.078-.674v-.112c0-.235-.026-.456-.078-.664a1.698 1.698 0 0 0-.235-.562 1.116 1.116 0 0 0-.971-.522c-.222 0-.414.047-.576.141a1.13 1.13 0 0 0-.396.381c-.104.163-.181.35-.229.562-.049.208-.074.43-.074.664Zm5.889-1.46V8h-1.177V2.717h1.109l.068 1.128Zm-.21 1.318-.381-.005c.003-.374.055-.718.156-1.03a2.56 2.56 0 0 1 .43-.806c.186-.224.407-.397.664-.517.257-.124.544-.186.86-.186.253 0 .483.036.688.108.208.068.386.18.532.336.15.157.264.36.342.61.078.248.117.553.117.914V8h-1.181V4.582c0-.254-.038-.454-.113-.6a.625.625 0 0 0-.317-.318 1.193 1.193 0 0 0-.513-.098 1.14 1.14 0 0 0-.542.127c-.159.085-.294.2-.405.347a1.653 1.653 0 0 0-.249.508 2.084 2.084 0 0 0-.088.615ZM165.894.5v.688c0 .206-.038.419-.113.64a2.711 2.711 0 0 1-.302.63c-.131.199-.28.371-.45.518l-.591-.372a3.03 3.03 0 0 0 .323-.64c.084-.227.127-.483.127-.766V.5h1.006Zm3.461 2.217v.86h-2.978v-.86h2.978Zm-2.119-1.294h1.177V6.54c0 .163.023.288.068.376a.366.366 0 0 0 .201.17c.084.03.184.045.297.045a2.38 2.38 0 0 0 .416-.044l.004.898c-.097.03-.211.056-.341.078a2.518 2.518 0 0 1-.44.035c-.27 0-.509-.048-.718-.142a1.057 1.057 0 0 1-.488-.474c-.117-.218-.176-.507-.176-.869v-5.19Zm6.695 2.368V8h-1.177V2.717h1.108l.069 1.074Zm-.191 1.372-.4-.005c0-.364.045-.701.137-1.01a2.42 2.42 0 0 1 .4-.806c.176-.231.394-.409.654-.532.264-.127.568-.19.913-.19.241 0 .461.035.66.107.201.068.375.177.522.327.15.15.264.342.342.576.081.234.122.517.122.85V8h-1.177V4.582c0-.257-.039-.459-.117-.605a.65.65 0 0 0-.327-.313 1.186 1.186 0 0 0-.503-.098c-.222 0-.41.043-.567.127-.153.085-.278.2-.376.347a1.554 1.554 0 0 0-.214.508 2.635 2.635 0 0 0-.069.615Zm3.277-.312-.552.122c0-.32.044-.62.132-.904.091-.286.223-.537.395-.752.176-.218.392-.389.65-.512a2.01 2.01 0 0 1 .883-.186c.271 0 .511.038.723.112.215.072.397.186.547.342.15.156.264.36.342.61.078.248.117.547.117.899V8h-1.182V4.577c0-.267-.039-.473-.117-.62a.607.607 0 0 0-.322-.303 1.3 1.3 0 0 0-.503-.088c-.182 0-.344.035-.484.103a.96.96 0 0 0-.346.278 1.232 1.232 0 0 0-.215.406 1.723 1.723 0 0 0-.068.498Zm5.708-2.134V8h-1.182V2.717h1.182Zm-1.26-1.387a.6.6 0 0 1 .176-.444c.12-.12.286-.18.498-.18.208 0 .372.06.493.18.12.117.18.265.18.444 0 .176-.06.322-.18.44-.121.117-.285.175-.493.175-.212 0-.378-.058-.498-.175a.593.593 0 0 1-.176-.44Zm5.513 5.24a.595.595 0 0 0-.088-.318c-.059-.098-.171-.186-.337-.264a3.273 3.273 0 0 0-.723-.215 6.204 6.204 0 0 1-.771-.22 2.433 2.433 0 0 1-.596-.317 1.335 1.335 0 0 1-.386-.44 1.219 1.219 0 0 1-.137-.585c0-.215.048-.418.142-.61a1.55 1.55 0 0 1 .405-.508c.176-.147.389-.262.64-.347.254-.085.537-.127.85-.127.442 0 .822.075 1.137.225.319.146.563.346.733.6.169.251.254.534.254.85h-1.177c0-.14-.036-.27-.108-.39a.745.745 0 0 0-.312-.299 1.071 1.071 0 0 0-.527-.117c-.202 0-.37.033-.503.098a.683.683 0 0 0-.293.244.622.622 0 0 0-.044.571.566.566 0 0 0 .175.19c.082.056.193.108.333.157.143.049.322.096.537.142.403.084.75.193 1.04.327.293.13.517.3.674.508.156.205.234.465.234.78a1.394 1.394 0 0 1-.581 1.148c-.189.14-.415.25-.679.327-.26.079-.553.118-.879.118-.478 0-.884-.085-1.216-.254a1.932 1.932 0 0 1-.756-.66c-.17-.27-.254-.55-.254-.84h1.137a.885.885 0 0 0 .181.523.97.97 0 0 0 .41.279c.166.055.337.083.513.083.211 0 .389-.028.532-.083a.767.767 0 0 0 .327-.235.559.559 0 0 0 .113-.342Zm5.146 0a.586.586 0 0 0-.088-.318c-.058-.098-.171-.186-.337-.264a3.261 3.261 0 0 0-.722-.215 6.221 6.221 0 0 1-.772-.22 2.452 2.452 0 0 1-.596-.317 1.332 1.332 0 0 1-.385-.44 1.207 1.207 0 0 1-.137-.585c0-.215.047-.418.142-.61.094-.192.229-.362.405-.508a1.98 1.98 0 0 1 .639-.347c.254-.085.538-.127.85-.127.443 0 .822.075 1.138.225.319.146.563.346.732.6.169.251.254.534.254.85h-1.177c0-.14-.035-.27-.107-.39a.747.747 0 0 0-.313-.299 1.069 1.069 0 0 0-.527-.117c-.202 0-.369.033-.503.098a.689.689 0 0 0-.293.244.622.622 0 0 0-.044.571.57.57 0 0 0 .176.19c.081.056.192.108.332.157.143.049.322.096.537.142.404.084.75.193 1.04.327.293.13.518.3.674.508.156.205.234.465.234.78 0 .235-.05.45-.151.645-.098.192-.241.36-.43.503-.188.14-.415.25-.678.327a3.062 3.062 0 0 1-.879.118c-.479 0-.884-.085-1.216-.254a1.942 1.942 0 0 1-.757-.66 1.563 1.563 0 0 1-.254-.84h1.138c.013.219.073.393.18.523.111.127.248.22.411.279.166.055.337.083.512.083.212 0 .389-.028.533-.083a.767.767 0 0 0 .327-.235.558.558 0 0 0 .112-.342ZM.381 19.416v-.112c0-.381.055-.734.166-1.06.11-.329.27-.614.478-.854a2.16 2.16 0 0 1 .772-.567 2.512 2.512 0 0 1 1.035-.205c.387 0 .732.069 1.035.205.306.134.565.322.777.567.211.24.372.525.483.854.11.326.166.679.166 1.06v.112c0 .38-.055.734-.166 1.06-.11.325-.272.61-.483.854-.212.24-.47.43-.772.567a2.53 2.53 0 0 1-1.03.2c-.388 0-.734-.067-1.04-.2a2.242 2.242 0 0 1-.772-.567 2.536 2.536 0 0 1-.483-.854 3.272 3.272 0 0 1-.166-1.06Zm1.177-.112v.112c0 .238.024.462.073.674.049.211.125.397.23.556.104.16.237.285.4.376.163.092.356.137.58.137.219 0 .408-.045.567-.137.163-.09.296-.216.4-.375.105-.16.181-.346.23-.557.052-.212.078-.436.078-.674v-.112a2.73 2.73 0 0 0-.078-.664 1.706 1.706 0 0 0-.234-.562 1.12 1.12 0 0 0-.972-.522c-.221 0-.413.047-.576.141-.16.091-.291.218-.396.381-.104.163-.18.35-.23.562-.048.208-.072.43-.072.664Zm7.9 1.45v-4.038h1.182V22H9.526l-.068-1.245Zm.166-1.099.396-.01c0 .355-.04.682-.118.982a2.275 2.275 0 0 1-.361.776 1.69 1.69 0 0 1-.625.513c-.254.12-.558.18-.913.18a2.14 2.14 0 0 1-.708-.112c-.215-.075-.4-.19-.557-.346a1.578 1.578 0 0 1-.356-.61 2.82 2.82 0 0 1-.127-.9v-3.412h1.177v3.423c0 .192.022.353.068.483.046.127.107.23.186.308a.66.66 0 0 0 .273.166c.104.032.215.048.332.048.335 0 .599-.065.791-.195a1.08 1.08 0 0 0 .415-.537c.085-.224.127-.477.127-.757Zm4.644-2.94v.86h-2.979v-.86h2.979Zm-2.12-1.293h1.177v5.117c0 .163.023.288.069.376a.365.365 0 0 0 .2.17.91.91 0 0 0 .298.045 2.346 2.346 0 0 0 .415-.044l.005.898c-.098.03-.212.056-.342.079a2.508 2.508 0 0 1-.44.034c-.27 0-.51-.047-.717-.142a1.057 1.057 0 0 1-.489-.474c-.117-.218-.176-.507-.176-.869v-5.19Zm7.94 1.294v.86h-2.979v-.86h2.979Zm-2.12-1.294h1.177v5.117c0 .163.023.288.069.376a.365.365 0 0 0 .2.17.91.91 0 0 0 .298.045 2.35 2.35 0 0 0 .415-.044l.005.898c-.098.03-.212.056-.342.079a2.508 2.508 0 0 1-.44.034c-.27 0-.509-.047-.717-.142a1.057 1.057 0 0 1-.488-.474c-.118-.218-.176-.507-.176-.869v-5.19Zm4.19-.923V22h-1.172v-7.5h1.172Zm-.205 4.663-.38-.005c.003-.364.053-.701.15-1.01.102-.31.242-.578.42-.806a1.867 1.867 0 0 1 1.5-.723c.26 0 .494.036.703.108.211.071.394.187.547.346.153.157.268.362.346.616.082.25.122.556.122.917V22H24.18v-3.403c0-.254-.038-.456-.113-.606a.651.651 0 0 0-.317-.322 1.162 1.162 0 0 0-.513-.103c-.211 0-.398.043-.561.127-.16.085-.293.2-.4.347a1.6 1.6 0 0 0-.245.508 2.345 2.345 0 0 0-.078.615Zm5.86-2.446V22H26.63v-5.283h1.181Zm-1.26-1.387c0-.179.058-.327.175-.444.121-.12.287-.18.499-.18.208 0 .372.06.493.18.12.117.18.265.18.444 0 .176-.06.322-.18.44-.12.117-.285.175-.493.175-.212 0-.378-.058-.498-.175a.596.596 0 0 1-.176-.44Zm5.512 5.24a.59.59 0 0 0-.087-.318c-.06-.098-.171-.186-.337-.264a3.264 3.264 0 0 0-.723-.215 6.23 6.23 0 0 1-.771-.22 2.448 2.448 0 0 1-.596-.317 1.337 1.337 0 0 1-.386-.44 1.218 1.218 0 0 1-.137-.585c0-.215.048-.418.142-.61.094-.192.23-.362.405-.508.176-.147.39-.262.64-.347.254-.084.537-.127.85-.127.442 0 .821.075 1.137.225.32.146.563.346.733.6.169.251.253.534.253.85h-1.176c0-.14-.036-.27-.108-.39a.748.748 0 0 0-.312-.299 1.07 1.07 0 0 0-.527-.117c-.202 0-.37.033-.504.098a.688.688 0 0 0-.292.244.623.623 0 0 0-.044.571.563.563 0 0 0 .175.19c.082.056.192.108.332.157.144.049.323.096.538.142.403.084.75.193 1.04.327.292.13.517.3.673.508.157.205.235.465.235.78 0 .235-.05.45-.152.645-.097.192-.24.36-.43.503-.188.14-.414.25-.678.328-.26.078-.553.117-.879.117-.478 0-.884-.085-1.216-.254a1.939 1.939 0 0 1-.757-.66c-.169-.27-.254-.55-.254-.84h1.138c.013.219.074.393.18.523.112.127.248.22.411.278.166.056.337.084.513.084.211 0 .389-.028.532-.084a.764.764 0 0 0 .327-.234.559.559 0 0 0 .112-.342Zm8.057-3.853h1.07v5.137c0 .475-.102.878-.303 1.21a1.946 1.946 0 0 1-.845.757c-.361.176-.78.264-1.255.264a2.948 2.948 0 0 1-1.387-.371 1.767 1.767 0 0 1-.57-.503l.55-.693c.19.224.398.389.626.493.228.104.467.156.718.156.27 0 .5-.05.688-.151.192-.098.34-.243.444-.435.105-.192.157-.426.157-.703v-3.965l.107-1.196Zm-3.589 2.7v-.103c0-.4.049-.765.147-1.093.097-.332.237-.617.42-.855.182-.24.403-.425.664-.552.26-.13.555-.195.883-.195.342 0 .634.062.875.186.244.123.447.3.61.532.163.228.29.501.38.82.095.316.165.668.21 1.055v.327a5.29 5.29 0 0 1-.214 1.035c-.101.313-.235.583-.4.81a1.71 1.71 0 0 1-.616.528c-.24.124-.525.186-.854.186-.323 0-.614-.067-.874-.2a1.99 1.99 0 0 1-.664-.562 2.657 2.657 0 0 1-.42-.85 3.739 3.739 0 0 1-.147-1.069Zm1.177-.103v.103c0 .24.023.465.068.674.05.208.122.392.22.552.101.156.228.28.38.37.157.089.341.132.553.132.276 0 .503-.058.678-.175.18-.117.316-.275.41-.474.098-.202.166-.426.206-.674v-.883a2.154 2.154 0 0 0-.123-.538 1.438 1.438 0 0 0-.239-.434.999.999 0 0 0-.38-.293 1.268 1.268 0 0 0-.543-.108c-.211 0-.395.046-.551.137a1.12 1.12 0 0 0-.386.376 1.86 1.86 0 0 0-.22.557 3.015 3.015 0 0 0-.073.678Zm4.477.103v-.112c0-.381.056-.734.166-1.06.111-.329.27-.614.479-.854.212-.244.469-.433.771-.567a2.512 2.512 0 0 1 1.036-.205c.387 0 .732.069 1.035.205.306.134.565.322.776.567.212.24.373.525.484.854.11.326.166.679.166 1.06v.112c0 .38-.056.734-.166 1.06-.111.325-.272.61-.484.854-.211.24-.469.43-.771.567a2.53 2.53 0 0 1-1.03.2c-.388 0-.735-.067-1.04-.2a2.242 2.242 0 0 1-.772-.567 2.536 2.536 0 0 1-.484-.854 3.271 3.271 0 0 1-.166-1.06Zm1.177-.112v.112c0 .238.025.462.074.674.048.211.125.397.229.556.104.16.238.285.4.376.163.092.357.137.581.137.218 0 .407-.045.567-.137.163-.09.296-.216.4-.375.104-.16.18-.346.23-.557a2.81 2.81 0 0 0 .078-.674v-.112a2.73 2.73 0 0 0-.078-.664 1.706 1.706 0 0 0-.235-.562 1.121 1.121 0 0 0-.971-.522c-.222 0-.414.047-.577.141-.159.091-.29.218-.395.381a1.77 1.77 0 0 0-.23.562c-.048.208-.073.43-.073.664Zm5.982-4.805V22h-1.182v-7.5h1.182Zm4.511 6.406V14.5h1.182V22h-1.07l-.112-1.094Zm-3.437-1.489v-.103c0-.4.047-.765.142-1.093.094-.332.23-.617.41-.855a1.8 1.8 0 0 1 .654-.552c.257-.13.547-.195.87-.195.318 0 .598.062.839.186.24.123.446.3.615.532.17.228.305.501.405.82.101.316.173.668.215 1.055v.327a5.282 5.282 0 0 1-.215 1.035 2.78 2.78 0 0 1-.405.81c-.17.229-.376.404-.62.528-.24.124-.522.186-.845.186-.319 0-.607-.067-.864-.2a1.91 1.91 0 0 1-.65-.562 2.642 2.642 0 0 1-.41-.85 3.86 3.86 0 0 1-.141-1.069Zm1.177-.103v.103c0 .24.02.465.063.674.046.208.116.392.21.552.095.156.217.28.366.37.153.089.336.132.547.132.267 0 .487-.058.66-.175a1.2 1.2 0 0 0 .405-.474c.1-.202.169-.426.205-.674v-.883a2.158 2.158 0 0 0-.122-.538 1.438 1.438 0 0 0-.24-.434 1.007 1.007 0 0 0-.376-.293 1.178 1.178 0 0 0-.522-.108c-.215 0-.397.046-.547.137a1.11 1.11 0 0 0-.371.376c-.094.16-.164.345-.21.557a3.225 3.225 0 0 0-.068.678Zm7.002 2.784c-.391 0-.744-.064-1.06-.19-.312-.131-.58-.312-.8-.543a2.4 2.4 0 0 1-.504-.815 2.855 2.855 0 0 1-.175-1.01v-.196c0-.414.06-.788.18-1.123a2.55 2.55 0 0 1 .503-.86 2.16 2.16 0 0 1 .762-.551c.293-.127.61-.19.952-.19.378 0 .708.063.991.19.283.127.518.306.703.537.19.227.33.5.42.815.095.316.142.664.142 1.045v.503H56.63v-.845h2.92v-.092a1.65 1.65 0 0 0-.127-.596 1.012 1.012 0 0 0-.347-.45c-.156-.113-.364-.17-.625-.17-.195 0-.37.042-.522.127-.15.081-.275.2-.376.356a1.88 1.88 0 0 0-.235.566 3.188 3.188 0 0 0-.078.738v.195c0 .231.031.446.093.645.065.195.16.366.283.512.124.147.274.262.45.347.175.081.375.122.6.122.283 0 .535-.057.757-.17.221-.115.413-.276.576-.484l.62.6a2.417 2.417 0 0 1-.444.479c-.183.15-.406.272-.67.366a2.66 2.66 0 0 1-.907.142Zm4.199-4.253V22H61.62v-5.283h1.108l.069 1.128Zm-.21 1.318-.381-.005c.003-.374.055-.718.156-1.03.104-.313.248-.581.43-.806.185-.224.407-.397.664-.517.257-.124.544-.186.86-.186.253 0 .483.036.688.108.208.068.386.18.532.337.15.156.264.36.342.61.078.247.117.552.117.913V22h-1.181v-3.418c0-.254-.038-.454-.113-.6a.628.628 0 0 0-.317-.318 1.19 1.19 0 0 0-.513-.098c-.202 0-.382.043-.542.127-.16.085-.294.2-.405.347a1.68 1.68 0 0 0-.25.508 2.097 2.097 0 0 0-.087.615Zm6.875.254v-.112c0-.381.055-.734.166-1.06.11-.329.27-.614.478-.854.212-.244.47-.433.772-.567a2.512 2.512 0 0 1 1.035-.205c.387 0 .733.069 1.035.205.306.134.565.322.777.567.211.24.372.525.483.854.11.326.166.679.166 1.06v.112c0 .38-.055.734-.166 1.06-.11.325-.272.61-.483.854-.212.24-.47.43-.772.567a2.53 2.53 0 0 1-1.03.2c-.388 0-.734-.067-1.04-.2a2.242 2.242 0 0 1-.772-.567 2.536 2.536 0 0 1-.483-.854 3.271 3.271 0 0 1-.166-1.06Zm1.177-.112v.112c0 .238.024.462.073.674.049.211.125.397.23.556.103.16.237.285.4.376.162.092.356.137.58.137.219 0 .408-.045.567-.137.163-.09.297-.216.4-.375.105-.16.181-.346.23-.557a2.81 2.81 0 0 0 .078-.674v-.112a2.73 2.73 0 0 0-.078-.664 1.704 1.704 0 0 0-.234-.562 1.12 1.12 0 0 0-.972-.522c-.221 0-.413.047-.576.141-.16.091-.291.218-.396.381a1.77 1.77 0 0 0-.23.562c-.048.208-.072.43-.072.664Zm5.903-1.573v6.3h-1.177v-7.315h1.084l.093 1.015Zm3.442 1.578v.102c0 .384-.045.74-.136 1.07-.088.325-.22.61-.396.854-.172.24-.386.428-.64.562-.253.133-.546.2-.878.2-.33 0-.617-.06-.865-.181a1.772 1.772 0 0 1-.62-.523 2.838 2.838 0 0 1-.41-.79 5.079 5.079 0 0 1-.215-1.006v-.396c.043-.387.114-.739.215-1.055.104-.315.24-.587.41-.815.17-.228.376-.404.62-.527.245-.124.53-.186.855-.186.332 0 .626.065.884.195.257.127.473.31.649.547.176.235.308.518.395.85.088.329.132.695.132 1.099Zm-1.176.102v-.102c0-.245-.023-.47-.069-.68a1.772 1.772 0 0 0-.215-.556 1.053 1.053 0 0 0-.376-.37 1.023 1.023 0 0 0-.542-.138c-.208 0-.387.036-.537.108a1.03 1.03 0 0 0-.376.288 1.36 1.36 0 0 0-.234.434 2.6 2.6 0 0 0-.117.533v.947c.039.234.106.45.2.644.094.196.228.352.4.47.176.113.4.17.674.17.212 0 .392-.045.542-.137.15-.09.272-.216.366-.375.098-.163.17-.35.215-.562.046-.212.069-.436.069-.674Zm3.359-1.68v6.3h-1.177v-7.315h1.084l.093 1.015Zm3.442 1.578v.102c0 .384-.045.74-.136 1.07-.088.325-.22.61-.396.854-.172.24-.386.428-.64.562-.253.133-.546.2-.878.2-.33 0-.617-.06-.865-.181a1.772 1.772 0 0 1-.62-.523 2.838 2.838 0 0 1-.41-.79 5.079 5.079 0 0 1-.215-1.006v-.396c.043-.387.114-.739.215-1.055.104-.315.24-.587.41-.815.17-.228.376-.404.62-.527.245-.124.53-.186.855-.186.332 0 .626.065.884.195.257.127.473.31.649.547.176.235.308.518.395.85.088.329.132.695.132 1.099Zm-1.176.102v-.102c0-.245-.023-.47-.069-.68a1.772 1.772 0 0 0-.215-.556 1.053 1.053 0 0 0-.376-.37 1.023 1.023 0 0 0-.542-.138c-.208 0-.387.036-.537.108a1.03 1.03 0 0 0-.376.288 1.36 1.36 0 0 0-.234.434 2.6 2.6 0 0 0-.117.533v.947c.039.234.106.45.2.644.094.196.228.352.4.47.176.113.4.17.674.17.212 0 .392-.045.542-.137.15-.09.272-.216.366-.375.098-.163.17-.35.215-.562.046-.212.069-.436.069-.674Zm1.953.005v-.112c0-.381.055-.734.166-1.06.11-.329.27-.614.478-.854.212-.244.469-.433.772-.567a2.512 2.512 0 0 1 1.035-.205c.387 0 .732.069 1.035.205.306.134.565.322.776.567.212.24.373.525.484.854.11.326.166.679.166 1.06v.112c0 .38-.056.734-.166 1.06-.11.325-.272.61-.484.854-.211.24-.468.43-.771.567a2.53 2.53 0 0 1-1.03.2c-.388 0-.734-.067-1.04-.2a2.242 2.242 0 0 1-.772-.567 2.536 2.536 0 0 1-.483-.854 3.274 3.274 0 0 1-.166-1.06Zm1.177-.112v.112c0 .238.024.462.073.674.049.211.125.397.23.556.103.16.237.285.4.376.162.092.356.137.58.137.219 0 .408-.045.567-.137.163-.09.296-.216.4-.375.105-.16.181-.346.23-.557a2.81 2.81 0 0 0 .078-.674v-.112a2.73 2.73 0 0 0-.078-.664 1.706 1.706 0 0 0-.234-.562 1.121 1.121 0 0 0-.972-.522c-.221 0-.413.047-.576.141-.16.091-.292.218-.396.381a1.77 1.77 0 0 0-.23.562c-.048.208-.072.43-.072.664Zm5.903-1.582V22H92.29v-5.283h1.123l.054 1.006Zm1.616-1.04-.01 1.093a3.067 3.067 0 0 0-.478-.04c-.202.001-.38.03-.532.09a1.002 1.002 0 0 0-.62.624c-.056.15-.088.318-.098.503l-.269.02c0-.332.033-.64.098-.923.065-.283.163-.532.293-.747.133-.215.3-.383.498-.503.202-.12.434-.18.698-.18a1.46 1.46 0 0 1 .42.063Zm3.403.034v.86h-2.978v-.86h2.978Zm-2.119-1.294h1.177v5.117c0 .163.023.288.068.376a.365.365 0 0 0 .2.17c.085.03.184.045.298.045a2.35 2.35 0 0 0 .415-.044l.005.898a3.03 3.03 0 0 1-.341.079 2.51 2.51 0 0 1-.44.034c-.27 0-.51-.047-.718-.142a1.057 1.057 0 0 1-.488-.474c-.117-.218-.176-.507-.176-.869v-5.19Zm6.206 5.332v-4.038h1.182V22h-1.113l-.069-1.245Zm.166-1.099.396-.01c0 .355-.039.682-.117.982a2.288 2.288 0 0 1-.362.776 1.691 1.691 0 0 1-.625.513c-.254.12-.558.18-.913.18-.257 0-.493-.037-.708-.112-.215-.075-.4-.19-.556-.346a1.577 1.577 0 0 1-.357-.61 2.818 2.818 0 0 1-.127-.9v-3.412h1.177v3.423c0 .192.023.353.068.483.046.127.108.23.186.308a.66.66 0 0 0 .273.166c.104.032.215.048.332.048.336 0 .599-.065.791-.195.196-.133.334-.312.415-.537.085-.224.127-.477.127-.757Zm3.389-1.811V22h-1.177v-5.283h1.109l.068 1.128Zm-.21 1.318-.381-.005c.003-.374.055-.718.156-1.03a2.56 2.56 0 0 1 .43-.806c.186-.224.407-.397.664-.517.257-.124.544-.186.859-.186.254 0 .484.036.689.108.208.068.386.18.532.337.15.156.264.36.342.61.078.247.117.552.117.913V22h-1.181v-3.418c0-.254-.038-.454-.113-.6a.625.625 0 0 0-.317-.318 1.193 1.193 0 0 0-.513-.098c-.202 0-.382.043-.542.127-.159.085-.294.2-.405.347a1.653 1.653 0 0 0-.249.508 2.084 2.084 0 0 0-.088.615Zm5.869-2.446V22h-1.182v-5.283h1.182Zm-1.26-1.387c0-.179.059-.327.176-.444.121-.12.287-.18.498-.18.209 0 .373.06.493.18a.592.592 0 0 1 .181.444c0 .176-.06.322-.181.44-.12.117-.284.175-.493.175-.211 0-.377-.058-.498-.175a.597.597 0 0 1-.176-.44Zm4.971 1.387v.86h-2.978v-.86h2.978Zm-2.119-1.294h1.177v5.117c0 .163.022.288.068.376a.368.368 0 0 0 .2.17c.085.03.184.045.298.045a2.304 2.304 0 0 0 .415-.044l.005.898a3.06 3.06 0 0 1-.342.079 2.504 2.504 0 0 1-.439.034c-.27 0-.51-.047-.718-.142a1.057 1.057 0 0 1-.488-.474c-.117-.218-.176-.507-.176-.869v-5.19Zm4.56 6 1.436-4.706h1.26l-2.119 6.089a4.22 4.22 0 0 1-.191.424c-.078.154-.18.298-.307.435-.124.14-.279.252-.464.337-.186.088-.41.132-.674.132a1.55 1.55 0 0 1-.303-.03 4.879 4.879 0 0 1-.268-.053l-.005-.899a3.595 3.595 0 0 0 .234.015c.195 0 .358-.024.488-.073a.678.678 0 0 0 .318-.225c.084-.104.156-.244.215-.42l.38-1.025Zm-.81-4.706 1.255 3.955.21 1.24-.816.21-1.919-5.405h1.27Zm6.719 4.697c0-.182.062-.335.185-.459.124-.127.292-.19.503-.19.215 0 .383.063.503.19a.623.623 0 0 1 .186.46.622.622 0 0 1-.186.458c-.12.124-.288.186-.503.186-.211 0-.379-.062-.503-.186a.625.625 0 0 1-.185-.459Z"
        fill="#8D8F91"
      />
    </Svg>
  );
}

export default SvgComponent;
