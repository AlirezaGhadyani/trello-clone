import { FC } from "react";

// props interface
interface Props {
  fileName: string;
  dir?: "icons";
  alt: string;
  className?: string;
  onClick?: () => void;
}

const Image: FC<Props> = ({ fileName, dir, alt, ...props }) => {
  return (
    <img
      src={
        require(`../../../assets/images/${
          dir ? `${dir}/${fileName}` : fileName
        }`).default
      }
      alt={alt}
      {...props}
    />
  );
};

export default Image;
