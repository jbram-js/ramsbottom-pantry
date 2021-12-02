import React from "react";
import nigel from "../images/nigel.jpg";

const News = () => {
  return (
    <div className="news" id="news">
      <div className="left-news">
        <h1>News</h1>
        <h2>Rammy's Revolutionary Doctor</h2>
        <p className="news-p">
          ‘Ramsbottom’s Revolutionary Doctor’ is local author Nigel Jepson’s new
          book, which is a follow-up on a local theme to his history of
          Ramsbottom United, ‘Come on You Rams’, published last December. The
          fascinating story of a young Scottish doctor who started up a medical
          practice at 18 Bolton Street in Ramsbottom nearly 200 years ago. When
          arriving in Rammy in 1835, Peter Murray McDouall was shocked by the
          conditions that local factory workers faced in the mills of owners
          such as the Grant Brothers. However, it seemed there was little he
          could do to bring about change until he joined the ranks of the
          Chartist movement, which was campaigning fiercely across the north of
          England, especially in hot-spots in East Lancashire, for the rights of
          working men to vote in elections.
          <br />
          <br />
          The local book launch for ‘Ramsbottom’s Revolutionary Doctor’ will
          take place at Ramsbottom Cricket Club on Sunday 5 December from twelve
          o’clock midday till two o’clock. Refreshments will be available. The
          author will be present and happy to sign copies of the book which will
          be available for a reduced price of £10 on the day.
          <br />
          <br />
          Nigel has kindly agreed to donate £5 of each book sale to the Pantry
          to help our families in need just like Peter McDouall did all them
          years ago. You can find out more about the book{" "}
          <a
            href="https://ramsbottomcc.com/rammys-revolutionary-doctor-book-launch-at-rcc/"
            target="_blank"
            alt="book launch"
          >
            here
          </a>
          . We would like to express our thanks to Nigel for this fantastic
          gesture.
        </p>
      </div>
      <div className="right-news">
        <img src={nigel} alt="Author Nigel Jepson" className="nigel-image" />
      </div>
    </div>
  );
};

export default News;
