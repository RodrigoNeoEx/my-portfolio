import bgTech from "../assets/bgTech.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Cards = () => {
  return (
    <Card 
      placeholder={undefined} 
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="mt-6 w-96"
    >
      <CardHeader
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        color="blue-gray"
        className="relative h-56"
      >
        <img src={bgTech} alt="card-image" />
      </CardHeader>
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography 
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          UI/UX Review Check
        </Typography>
        <Typography 
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio", where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter 
        className="pt-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Button
          color="blue"
          onClick={() => alert("Button clicked!")}
          placeholder={undefined}
          onPointerEnterCapture={undefined} 
          onPointerLeaveCapture={undefined}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
