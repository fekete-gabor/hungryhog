const Test = ({ title, filteredMenuItems }) => {
  return filteredMenuItems.map((item) => {
    const { type } = item.attributes;

    if (title === type) {
      return (
        <>
          <p>{item.attributes.title}</p>
          <p>{item.attributes.desc}</p>
          <img
            src={item.attributes.img.data.attributes.url}
            alt={item.attributes.title}
          />
        </>
      );
    }
  });
};

export default Test;
