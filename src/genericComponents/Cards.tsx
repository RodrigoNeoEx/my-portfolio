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
  cardLink: string;
  buttonFunction: () => void;
}


const Cards = ({ cardTitle, cardBodyText, cardButtonText, buttonFunction, cardLink }: CardsProps) => {

  
  return (
    <Card 
      placeholder={undefined} 
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="mt-6 w-11/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-black justify-between"
    >
      <CardHeader
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}        
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
          className="mb-2 text-lime-400 font-sten text-3xl"
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
          className="text-white font-helv text-lg text-left"
        >
          {cardBodyText}
        </Typography>
      </CardBody>
      <div>
      <CardFooter 
        // className="flex justify-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} 
      >
        <Button          
          onClick={buttonFunction}
          placeholder={undefined}
          onPointerEnterCapture={undefined} 
          onPointerLeaveCapture={undefined}
          className="bg-lime-400 text-black font-bold font-helv hover:animate-pulse"         
        >
          {cardButtonText}
        </Button>
      </CardFooter>
      </div>
    </Card>
  );
};

export default Cards;
