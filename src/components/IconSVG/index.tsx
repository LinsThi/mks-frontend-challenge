import { ReactSVG, Props } from "react-svg";

import { TextError } from "./styles";

type SVGImageProps = {
  alt: string;
  color?: string;
  size?: number;
} & Omit<Props, "ref">;

function IconSVG({ alt, color = "#F8F8F8", size, ...rest }: SVGImageProps) {
  return (
    <ReactSVG
      fallback={() => <TextError>{alt}</TextError>}
      beforeInjection={(svg) => {
        svg.setAttribute("fill", color);
        if (size) {
          svg.setAttribute("width", String(size));
          svg.setAttribute("height", String(size));
        }
      }}
      style={{
        pointerEvents: "none",
      }}
      {...rest}
    />
  );
}

export default IconSVG;
