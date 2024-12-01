import bgTech from "../assets/bgTech.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

type CardsProps = {
  cardTitle: string;
  cardBodyText: string;
  cardButtonText: string;
}


const Cards = ({ cardTitle, cardBodyText, cardButtonText }: CardsProps) => {
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
          {cardTitle}
        </Typography>
        <Typography 
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {cardBodyText}
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
          {cardButtonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
