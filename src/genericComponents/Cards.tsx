import { useState } from "react";
import { CgArrowDownO, CgArrowUpO ,  } from "react-icons/cg";
import bgTech from "/bgTech.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Collapse,
} from "@material-tailwind/react";

type CardsProps = {
  cardTitle: string;
  cardBodyText: string;
  cardButtonText: string; 
  cardLink: string;
  cardImage: string;
  buttonFunction: () => void;
}


const Cards = ({ cardTitle, cardBodyText, cardButtonText, buttonFunction, cardLink, cardImage }: CardsProps) => {

  const [open, setOpen] = useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);

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
        className="relative h-56 flex items-center justify-center"
      >
        <img src={cardImage} alt="card-image" className="object-contain max-w-full"/>
      </CardHeader>
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="pt-0"      
      >
        <Typography 
          variant="h5"          
          className="mb-2 text-lime-400 font-sten text-3xl flex justify-between items-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {cardTitle}
          <Button          
            onClick={toggleOpen}
            placeholder={undefined}
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}
            className="bg-transparent text-lime-400 font-black font-helv animate-pulse text-6xl leading-3"         
          >
            <div>

            {!open ? <CgArrowDownO /> : <CgArrowUpO />}
            </div>
          </Button>
        </Typography>
        <Collapse open={open}>
          <Typography 
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-white font-helv text-lg text-left"
          >
            {cardBodyText}
          </Typography>
        </Collapse>
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
