import Directory from "../../components/directory/directory.component";
import categories from "../../categories";
const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
