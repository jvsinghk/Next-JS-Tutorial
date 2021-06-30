import { useRouter } from "next/router";

const Houses = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Houses within the Minimum Budget of {params[0]} to Maximum Budget of{" "}
        {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Houses within the Minimum Budget of {params[0]}</h1>;
  }
  return <h1>Houses Home Page</h1>;
};

export default Houses;
