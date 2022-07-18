export const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 7,
    draggable: true,
    arrows:false,
    appendDots: dots => (
        <div
          style={{
           display: 'flex',
           flexDirection:'raw',
           justifyContent: 'space-around',
           flexWrap: 'wrap',
          }}
        >
          <ul style={{ margin: "0px" ,flexDirection: 'row'}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "20px",
            color: "blue",
            border: "1px blue solid",
            borderRadius: "50%",
            margin: '0 2px',
                       backgroundColor:'#FFFFFF',

          }}
        >
          {i + 1}
        </div>
      ),
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 438,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 507,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 694,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
    ],
  };
