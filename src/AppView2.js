
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const AppView2 = () => {
  const key ="wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D";
    const pageNo = "pageNo=5"

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await axios.get(`http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${key}&${pageNo}&numOfRows=3&resultType=json`)
        setArticles(response.data.getRecommendedKr.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  
  if (loading) {
    return <div>대기중...</div>;
  }
  console.log(articles);

  if (!articles) {
    return null;
  }

  return (
    <div className="news_list">
        
        <div>
      {articles.map((articleMap) => (
        <NewsItem key={articleMap.id} article={articleMap} />
        ))}
        </div>
    </div> /* news_list end */
  );
};

export default AppView2;
