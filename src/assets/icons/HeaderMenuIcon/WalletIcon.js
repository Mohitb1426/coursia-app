/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, {
  Path, Defs, Pattern, Use, Image,
} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_786_5118" transform="scale(.02)" />
        </Pattern>
        <Image
          id="image0_786_5118"
          width={50}
          height={50}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC1ElEQVRoge2Zz0sUYRjHv8870ypmUhBYB4lEsDW3DhZIiRr4g6A8CAohCWY/Tv4BZcmQUOAl6BZFhaSVXvoBHaQQJKhOQaDWpV94KDVCSTbWfd+ngx3WmTFndt3ZN5jP7X3nfWa/n51n3xlmgZCQrEC5+uDK+70lEkaTIFXHoAMAdhLwUxFuT08bV2BZys/5zCzldFD11CqIL6k6ApoZ3KSAKIHBKd8lA1uJ0V9RLhengOt+zp9VkdiQVZo0kscJdCy+JGsA5LOnSmpDLkUqhy8UK8NohEIzCI0SspjS6V7ifX5LMhIpe9aTF1nYVkPETSvtQvvBSCu7jUK/Bb5FYkNWqTJkAwMNWEQziItW2mVD9w3ht8CTyN4Rawez7AHjpIQs8Z8r+/xTpHzk4m4hcZ6V7ASQF1CmtFizH6IPe2sFiz0QxssFLHyaab8WDzLYhlA/bplVN85uynUOP6z9C7UsES1XXSCcInAlgKLgYq3iF4C3AN2ZEtODaB+VbotcRcruWUURUz4CcCSbCf1DEyqy3Pq+9eoP+xHnNsegiCkfQDsJAOBakTAf149bjk3KIVIxcqkNwNFAcqXH4dnvyW77pNuN51wAYTKEuuwzbq11MJAsmRGzT7hdkS0BBMmUAvuE72caXQlFdCMU0Y1QRDd0FPkCpgYzES9k4kYAX70UBfZeyzNM3VMnLr/4O3oeHe47TYLH1ivT7oqQId6kjtXm36+91GknojhZnToWS/nVa61NRbvWIqZb0eG+M8IUr0glDynwTS912okA2EWCx1jJVe+F10O71kqXUEQ3QhHdCEV0w01kOfAU/nFkdBPx9LSZYz7bJxwiTPQkmCyZ4MzoEBEkBgDMB5InDQiYMxNiwD7vEJlst74pgRZoKEPAnIJqeddpzdqPGW4F86MTM8WtNYNMQgDYjpX/RlzXBsAygI8A3TUTRsdkR/+HHOUICfmv+QMgh8Ii8foKKAAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default React.memo(SvgComponent);
