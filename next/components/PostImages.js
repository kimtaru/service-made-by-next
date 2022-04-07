import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";
import { backUrl } from "../config/config";
const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
          style={{}}
        />
        {/* role: 클릭 가능여부를 시각장애인에게 알려줌*/}
        {/* alt: 시각장애인을 위한 적정 문구 삽입(해당 이미지에 대한 설명)*/}

        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          style={{ width: "50%", display: "inline-block" }}
          onClick={onZoom}
        />
        <img
          role="presentation"
          src={`${backUrl}/${images[1].src}`}
          alt={images[1].src}
          style={{ width: "50%", display: "inline-block" }}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          style={{ width: "50%" }}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
export default PostImages;
