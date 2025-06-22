import{ useState, useEffect } from 'react';
import '../css/carousel.css';

interface SlideMold {
  backgroundImage: string;
  explanationImage: string;
}[]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 以下スライドの内容の設定
  const slides: SlideMold[] = [
    {
      backgroundImage: "/images/carousel/self-portrait.JPG",
      explanationImage: "/images/carousel/hal-office.jpg",
    },
    {
      backgroundImage: "/images/carousel/kyoto-travel-shrine.jpg",
      explanationImage: "/images/carousel/slime-drawing-orange.JPG"
    },
    // {
    //   backgroundImage: "/images/carousel/",
    //   explanationImage: "/images/carousel/"
    // },
    // {
    //   backgroundImage: "/images/carousel/",
    //   explanationImage: "/images/carousel/"
    // },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    // 自動でバナー画像がスライドする時間を設定
    return () => clearInterval(interval);
  }, [currentIndex]);
  // 以下バナー画像の前のスライド操作処理
  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  // 以下バナー画像の次のスライド操作処理
  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  // ナビゲーショnインジケーターをクリックした時の処理
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel" >
      <img onClick={handlePrev} className="carousel-button prev" src="/images/carousel/customer-page-carousel-carousel-prev-arrow.svg" />
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
        {slides.map((slide, index) => (
          <>
            <div
              key={index}
              className="carousel-slide"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <img
                src={slide.explanationImage}
                alt="explanation"
                className="video"
              />
            </div>
          </>
        ))}
      </div>
      <img onClick={handleNext} className="carousel-button next" src="/images/carousel/customer-page-carousel-carousel-next-arrow.svg" />
      <div className="carousel-nav" >
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;