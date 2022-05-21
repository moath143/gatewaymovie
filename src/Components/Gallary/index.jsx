import React, { useState, useCallback, useEffect, useMemo } from "react";
import CRUDRequest from "../../API";
import { Container, Typography } from "../../Theme/styles";
import { useLocation, useParams } from "react-router-dom";
import Fancybox from "./fancybox";
import { SectionGallary, ImageGallary } from "./styleGallary";

const Gallary = () => {
  const [gallary, setGallary] = useState([]);

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const res = await CRUDRequest.get(
      `/movie/${id}/images?api_key=278dc390fe2dab0dcb2a2a1872dcc11f`
    );
    setGallary(res.data.backdrops);
  }, []);

    const data = useMemo(() => {
      return gallary.slice(0, 10).map((item, index) => {
        return (
          <a
            data-fancybox="gallery"
            href={`https://image.tmdb.org/t/p/original${item.file_path}`}
          >
            <img
              alt=""
              src={`https://image.tmdb.org/t/p/original${item.file_path}`}
            />
          </a>
        );
      });
    }, [gallary]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SectionGallary>
      <Container>
        <Typography color={"white"} size={32} weight={700} height={48}>
          Gallary
        </Typography>
        <ImageGallary>
          <Fancybox>
            <p>
              {data}
            </p>
          </Fancybox>
        </ImageGallary>
      </Container>
    </SectionGallary>
  );
};

export default Gallary;
