import React, { useContext, useEffect, useState } from "react";
import "./NewsContainer.css";
import Cards from "../Cards/Cards";
import Heading from "../Heading/Heading";
import { BarLoader, BeatLoader, HashLoader, PuffLoader, RingLoader } from "react-spinners";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { Context } from "../../Context/Context";
import { Box, Skeleton } from "@mui/material";

const NewsContainer = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalResults, setTotalReults] = useState();
  const { category } = useContext(Context);


  const getData = async () => {
    setLoading(true);
    const promise = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=52317f21506b476c995393f17464a154&page=${pageNo}&pageSize=20`
    );
    const response = await promise.json();
    setNewsData(response.articles);
    setTotalReults(response.totalResults)
    console.log(response);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [pageNo]);

  useEffect(() => {
    getData()
  }, [category])

  return (
    <div className="news-container container justify-content-center w-100  ">
      <Heading heading="Online News" />
      <div className="container m-0 w-100 flex-wrap h-100">
        {loading ? (
          <div className="loader">
            <PuffLoader />
          </div>
        ) : (
          <div className="news-cards gap-5">
            {newsData.map((news) => {
              return (
                <>
                  {news.author !== null ? (
                    <Cards
                      key={news}
                      imgUrl={
                        news.urlToImage === null
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKE_k4qoe2RJWmpPc22DahftQed2fhqVeFfBh93_Hcw&s"
                          : news.urlToImage
                      }
                      title={news.title === null ? "" : news.title.split(" ").slice(0, 5).join(" ") + "..."}
                      description={news.description === null ? "" : news.description.split(" ").slice(0, 10).join(" ") + "..."}
                      author={(news.author).split(" ").slice(0,2).join(" ") + "..."}
                      url={news.url}
                    />
                  ) : null}
                </>
              );
            })}
          </div>
        )}
        <div className="btns">
          <button disabled={pageNo < 2} className="btn d-flex gap-3 align-items-center btn-dark" onClick={() => { setPageNo(pageNo - 1) }}><i class="fa-solid fa-arrow-left-long"></i>Previous</button>
          <button disabled={false} className="btn d-flex gap-3 align-items-center btn-dark" onClick={() => { pageNo + 1 > Math.ceil(totalResults / 20) ? null : setPageNo(pageNo + 1) }}>Next<i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
