/* 뉴스정보 보여줌 */
/* 
title : 제목
description: 내용
url : 링크
urlTolmage: 뉴스 이미지
*/

/* import styled from "styled-components";
const NewsItemBlock = styled.div`
    display : flex;
    .thumbnail {
        margin-right : 10px;
    }
    .thumbnail img {
        display: block;
        width: 160px;
        height: 100px;
        object-fit : cover;
    }
` */

const NewsItem = ({ article }) => {
  const {
    MAIN_TITLE,
    TITLE,
    TRFC_INFO,
    ITEMCNTNTS,
    MAIN_IMG_NORMAL,
    HOMEPAGE_URL,
    GUGUN_NM
  } = article;
  return (
    <div className="travel_item">
      <div className="title">
        <strong>{GUGUN_NM}</strong>
        <h4>{MAIN_TITLE}</h4>
        <span>{TITLE}</span>
      </div>  
      {/* .title end */}
      <img src={MAIN_IMG_NORMAL} alt={MAIN_TITLE} />
      <p>{ITEMCNTNTS}</p>
      <p>{TRFC_INFO}</p>
      {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">
        바로가기
      </a>}
    </div> /* travel_item end */
  );
};
export default NewsItem;
