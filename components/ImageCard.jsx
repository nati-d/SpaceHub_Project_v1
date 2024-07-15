import { Card } from 'antd';

const ImageCard = () => {
  return (
    <Card
      className="max-w-xs"
      cover={<img alt="example" src="https://lh3.googleusercontent.com/p/AF1QipNNyjg6NXQUNO1IDXS-BLfPTvow62znPk3XECrY=s1360-w1360-h1020" />}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Co-Working Space</h3>
        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-600 mb-2">legehar</p>
        <div className="border-t-2 border-black mt-2"></div>
        <p className="text-blue-600 font-semibold">Per day 230 bir</p>
      </div>
    </Card>
  );
};

export default ImageCard;
