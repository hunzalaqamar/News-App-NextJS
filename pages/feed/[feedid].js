import { useRouter } from "next/router";
import Toolbar from "../../components/Toolbar";
import styles from "../../styles/feed.module.css";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <Toolbar />
      <div className={styles.articleMain}>
        {articles.map((article, index) => (
          <div className={styles.articleInfo} key={index}>
            <h1 onClick={() => window.open(article.url, "_blank")}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img className="w-full" src={article.urlToImage} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 1 ? styles.active : styles.disabled}
        >
          Previous Page
        </div>
        <div className="mx-3">#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={pageNumber === 5 ? styles.active : styles.disabled}
        >
          Next Page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.feedid;
  console.log(pageNumber);

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const { articles } = await apiResponse.json();

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
