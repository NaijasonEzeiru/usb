import { useState, useEffect } from "react";

const useImgInput = () => {
  const [value, setValue] = useState() as any;
  const [imgPreview, setImgPreview] = useState("") as any;

  useEffect(() => {
    if (!value) {
      setImgPreview(undefined);
      return;
    }
    // if (value?.type == "image/svg+xml") {
    //   setImgPreview(undefined);
    //   alert("SVG images are not allowed");
    //   return;
    // }
    console.log({ value });
    const objectUrl = URL.createObjectURL(value);
    setImgPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  const bind = {
    onChange: (e: any) => {
      setValue(e.target.files[0]);
    },
  };

  return [value, imgPreview, bind];
};

export default useImgInput;
