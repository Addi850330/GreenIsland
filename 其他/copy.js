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
