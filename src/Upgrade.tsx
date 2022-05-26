import { FC } from "react";

type UpgradeProps = {};

const Upgrade: FC<UpgradeProps> = () => {
  return (
    <div>
      <h1 className="text-purple-500 bg-yellow-400 text-5xl h-screen">
        You Can Buy Anything Here
      </h1>
    </div>
  );
};

Upgrade.defaultProps = {};

export default Upgrade;
