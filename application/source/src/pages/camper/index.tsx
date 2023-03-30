import {NextPage} from "next";
import {useRouter} from "next/router";

const Camper: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h2>Welcome Potential Camper</h2>
    </div>
  );
};

export default Camper;