
const backToTopHandle = () => {
    // page top set
    // document.documentElement.scrollTop = 0;
    // window.scrollTo(0, 0);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };







  
const toNumber032 = function () {
    const number032 = document.getElementById("032");
    const element032 = number032.getBoundingClientRect().top;
    const navoffset = 30;

    let offsetPosition = element032 - navoffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    offsetPosition = 0;
    console.log(offsetPosition);
  };

  const toNumber064 = function () {
    const number064 = document.getElementById("064");
    const element064 = number064.getBoundingClientRect().top;
    const navoffset = 30;

    let offsetPosition = element064 - navoffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    offsetPosition = 0;
    console.log(offsetPosition);
  };

  const [visibleBackTopBtn, setVisibleBackTopBtn] = useState(false);

  useEffect(() => {
    // 在 React 中使用 addEventListener 监听事件
    document.addEventListener("scroll", handleScroll, true);
    // 组件卸载时移除事件监听

    return () => document.removeEventListener("scroll", handleScroll);
  }, [visibleBackTopBtn]);

  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      0;
    // console.log("1   " + window.pageYOffset);
    // console.log("2   " + document.body.scrollTop);
    // console.log("3   " + document.documentElement.scrollTop);
    if (scrollTop > 200) {
    } else {
    }
  };