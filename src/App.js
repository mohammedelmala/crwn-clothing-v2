import Directory from "./components/directory/directory.component";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/22670683/pexels-photo-22670683/free-photo-of-man-standing-and-woman-sitting-in-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/6712035/pexels-photo-6712035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/5661240/pexels-photo-5661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/26933997/pexels-photo-26933997/free-photo-of-two-young-women-wearing-afros-smiling-at-the-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // "https://images.pexels.com/photos/26888160/pexels-photo-26888160/free-photo-of-portrait-of-woman-sitting-and-smiling-at-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/26892135/pexels-photo-26892135/free-photo-of-a-man-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
